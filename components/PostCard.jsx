import Link from 'next/link';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { formatDate } from '../utils/helper';

export default function PostCard({ post }) {
    const { data } = useSWR(`/api/${post.slug}`, fetcher);
    const { data: postData } = post;
    return (
        <Link href={`/blog/${post.slug}`}>
            <a className='block w-full p-5 rounded-md card ring-vis-0 border-thin'>
                <header className='flex justify-between'>
                    <h4>
                        <span>{postData.title}</span>
                    </h4>
                    <p className='self-center flex-shrink-0 component text-dark dark:text-light'>
                        {data?.count >= 0 ? data.count : '–––'} views
                    </p>
                </header>
                <p className='component text-dark dark:text-light'>
                    {formatDate(postData.publishedAt)} • {post.readingTime}
                </p>
                <p className='component'>{postData.description}</p>
            </a>
        </Link>
    );
}
