import { IconContext } from 'react-icons/lib';
import { SiNextDotJs, SiReact, SiTailwindcss, SiNodeDotJs } from 'react-icons/si';
import { IoLogoVercel } from 'react-icons/io5';
import Tippy from '@tippyjs/react';
import CustomLink from './CustomLink';

export default function TechStack() {
    return (
        <div className='flex mt-2 space-x-4'>
            <IconContext.Provider
                value={{ className: 'text-black dark:text-green hover:text-accent-200 w-12 h-12' }}
            >
                <Tippy
                    animation='scale-subtle'
                    interactive={true}
                    content={
                        <span className='inline-block p-2 bg-white rounded-md shadow-md border-thin'>
                            <CustomLink href='https://nextjs.org'>Next.js</CustomLink>, currently my
                            go-to framework because of the static generation, dynamic paths, and
                            built-in api.
                        </span>
                    }
                >
                    <div>
                        <SiNextDotJs />
                    </div>
                </Tippy>
                <Tippy
                    animation='scale-subtle'
                    interactive={true}
                    content={
                        <span className='inline-block p-2 bg-white rounded-md shadow-md border-thin'>
                            <CustomLink href='https://reactjs.org/'>Create React App</CustomLink>,
                            first frontend framework that I learned, great if you are making an
                            authenticated website.
                        </span>
                    }
                >
                    <div>
                        <SiReact />
                    </div>
                </Tippy>
                <Tippy
                    animation='scale-subtle'
                    interactive={true}
                    content={
                        <span className='inline-block p-2 bg-white rounded-md shadow-md border-thin'>
                            <CustomLink href='https://tailwindcss.com/'>Tailwindcss</CustomLink>, I
                            recently converted my styling from SCSS to tailwindcss, a great
                            decision. Make sure you get the{' '}
                            <CustomLink href='https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss'>
                                extension
                            </CustomLink>
                            .
                        </span>
                    }
                >
                    <div>
                        <SiTailwindcss />
                    </div>
                </Tippy>
                <Tippy
                    animation='scale-subtle'
                    interactive={true}
                    content={
                        <span className='inline-block p-2 bg-white rounded-md shadow-md border-thin'>
                            <CustomLink href='https://swr.vercel.app/'>SWR by Vercel</CustomLink>,
                            great react hooks for data fetching and caching, the{' '}
                            <CustomLink href='https://swr.vercel.app/docs/revalidation#revalidate-on-focus'>
                                revalidate on focus
                            </CustomLink>{' '}
                            is unreal. react-query is also a great alternative to this.
                        </span>
                    }
                >
                    <div>
                        <IoLogoVercel />
                    </div>
                </Tippy>
                <Tippy
                    animation='scale-subtle'
                    interactive={true}
                    content={
                        <span className='inline-block p-2 bg-white rounded-md shadow-md border-thin'>
                            <CustomLink href='https://nodejs.org/'>Node.js</CustomLink>, simple
                            backend language so you don't need to learn another language. Not using
                            this too often because Next.js already has a backend built-in.
                        </span>
                    }
                >
                    <div>
                        <SiNodeDotJs />
                    </div>
                </Tippy>
            </IconContext.Provider>
        </div>
    );
}
