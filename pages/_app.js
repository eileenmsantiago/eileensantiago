import {useEffect} from 'react';
import { App } from 'reviga-ui';
import 'tailwindcss/tailwind.css';
import '../styles/tailwind.css';
import '../styles/main.scss';
import aos from 'aos/dist/aos.js';

export default function MyApp({ Component, pageProps }) {
  useEffect(() => {
    aos.init({
      duration: 600,
      easing: 'ease-in',
      delay: 200,
    });
  }, [])
  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}
