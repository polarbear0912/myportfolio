import { NextApiRequest, NextApiResponse } from 'next';

import { getUserLikeCount } from '@/lib/api.server';
import { getArticleViewsFromDevto } from '@/lib/devto';
import { getSessionId } from '@/lib/helper.server';
import { prismaClient } from '@/lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const slug = req.query.slug as string;
  const sessionId = getSessionId(req);

  try {
    if (req.method === 'POST') {
      const likeCount = await getUserLikeCount({ sessionId, slug });

      if (likeCount >= 5) throw new Error('Max like count is 5');

      const content = await prismaClient.contentMeta.upsert({
        where: {
          slug: slug,
        },
        create: {
          slug,
          likes: {
            create: {
              sessionId,
            },
          },
        },
        update: {
          likes: {
            create: {
              sessionId,
            },
          },
        },
        include: {
          _count: {
            select: {
              views: true,
              likes: true,
            },
          },
        },
      });

      let devtoViews: number | undefined;
      if (slug.startsWith('b_')) {
        devtoViews = await getArticleViewsFromDevto(slug);
      }

      return res.status(201).json({
        contentViews: (content?._count.views ?? 0) + (devtoViews ?? 0),
        contentLikes: content?._count.likes ?? 0,
        devtoViews: devtoViews,
        likesByUser: likeCount + 1,
      });
    } else {
      res.status(405).json({ message: 'Method Not Allowed' });
    }
  } catch (err: unknown) {
    // eslint-disable-next-line no-console
    console.error(err);
    if (err instanceof Error) {
      res.status(500).json({ message: err.message ?? 'Internal Server Error' });
    } else {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  }
}
