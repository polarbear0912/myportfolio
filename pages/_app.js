import '@/styles/globals.css';
import '@/styles/dracula.css';
// for tippy js animation
import 'tippy.js/animations/scale-subtle.css';
import { ThemeProvider } from 'next-themes';
import { DefaultSeo } from 'next-seo';
import SEO from '@/next-seo.config';

function MyApp({ Component, pageProps }) {
    console.log(`██   ██ ███████ ██      ██       ██████      ██████  ███████ ██    ██ ███████ ██       ██████  ██████  ███████ ██████  ██ 
██   ██ ██      ██      ██      ██    ██     ██   ██ ██      ██    ██ ██      ██      ██    ██ ██   ██ ██      ██   ██ ██ 
███████ █████   ██      ██      ██    ██     ██   ██ █████   ██    ██ █████   ██      ██    ██ ██████  █████   ██████  ██ 
██   ██ ██      ██      ██      ██    ██     ██   ██ ██       ██  ██  ██      ██      ██    ██ ██      ██      ██   ██    
██   ██ ███████ ███████ ███████  ██████      ██████  ███████   ████   ███████ ███████  ██████  ██      ███████ ██   ██ ██ `);
    console.log(
        'Welcome to my page! Also feel free to contact me via email at theodorusclarence@gmail.com 🙌'
    );
    return (
        <ThemeProvider attribute='class' defaultTheme='dark'>
            <DefaultSeo {...SEO} />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
