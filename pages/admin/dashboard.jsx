import Nav from '@/components/Nav';
import Seo from '@/components/Seo';
import fetcher from '@/utils/fetcher';
import useSWR from 'swr';

export default function dashboard() {
  const { data, error } = useSWR('/api/content', fetcher);
  const isLoading = !error & !data;

  // if slug first char is b
  const blogs = data?.data
    ?.filter((item) => item.slug.startsWith('b'))
    .map((item) => ({ ...item, slug: item.slug.slice(2) }));
  const library = data?.data
    ?.filter((item) => item.slug.startsWith('l'))
    .map((item) => ({ ...item, slug: item.slug.slice(2) }));
  const projects = data?.data
    ?.filter((item) => item.slug.startsWith('p'))
    .map((item) => ({ ...item, slug: item.slug.slice(2) }));

  const dashboard = [
    { label: 'Blogs', value: blogs },
    { label: 'Library', value: library },
    { label: 'Projects', value: projects },
  ];

  return (
    <>
      <Seo title='Dashboard' />
      <Nav />
      <section className='bg-dark'>
        <article className='py-16 text-white layout'>
          <h1 className='mb-8'>Dashboard</h1>
          {isLoading ? (
            <div className='space-y-8'>
              <div className='space-y-4'>
                <h2>Blogs</h2>
                <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className='h-[150px] md:h-[180px] animate-pulse bg-gray-500 border border-gray-600 rounded-md'
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className='space-y-8'>
              {dashboard.map(({ label, value }) => (
                <div className='space-y-4' key={label}>
                  <h2>{label}</h2>
                  <div className='grid grid-cols-2 gap-4 md:grid-cols-4'>
                    {value.map(({ slug, views, likes, likesByUser }) => (
                      <div
                        key={slug}
                        className='flex flex-col p-2 border border-gray-600 rounded-md'
                      >
                        <h4 className='mb-2'>{slug}</h4>
                        <p className='mt-auto'>views: {views}</p>
                        <p>likes: {likes}</p>
                        <p>userCount: {Object.keys(likesByUser).length}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </article>
      </section>
    </>
  );
}
