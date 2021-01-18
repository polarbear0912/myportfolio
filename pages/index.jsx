import CustomLink from '../components/CustomLink';
import Nav from '../components/Nav';
import PostCard from '../components/PostCard';
import ProjectCard from '../components/ProjectCard';
import Seo from '../components/Seo';
import TechStack from '../components/TechStack';
import Button from '../components/Button';

export default function Home() {
    return (
        <>
            <Seo pageTitle='NextJS Tailwind Starter' />
            <Nav />
            <section className='py-6 mt-4'>
                <main className='layout'>
                    <h1 className=''>
                        Hi!
                        <br />
                        You can call me <span className='accent'>Clarence</span>
                    </h1>
                    <p className='prose'>
                        I'm a fast learner and hardworking Informatics Student at Institut Teknologi
                        Sepuluh Nopember. I'm currently really interested in Frontend Development.{' '}
                        <CustomLink href='/about'>Reach me out</CustomLink> to talk more about
                        frontend works!
                    </p>
                </main>
            </section>

            <section className='py-6'>
                <main className='layout'>
                    <h2 className='mb-2'>Current Favorite Tech Stack</h2>
                    <TechStack />
                </main>
            </section>

            <section className='py-6'>
                <main className='layout'>
                    <h2 className='mb-4'>Featured Projects</h2>
                    <div className='flex flex-col justify-between mb-4 space-y-4 md:space-y-0 md:flex-row'>
                        <ProjectCard />
                        <ProjectCard />
                    </div>
                    <Button href='/projects'>See More</Button>
                </main>
            </section>

            <section className='py-6'>
                <main className='layout'>
                    <h2 className='mb-4'>Featured Posts</h2>
                    <div className='mb-4 space-y-4'>
                        <PostCard />
                        <PostCard />
                    </div>
                    <Button href='/blog'>See More</Button>
                </main>
            </section>
        </>
    );
}
