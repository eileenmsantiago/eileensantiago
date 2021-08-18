import Head from 'next/head';
import Navbar, { NAV_HEIGHT } from '../Navbar/Navbar';
import css from './Layout.module.scss';
import siteData from '../../data/site';
import Footer from '../Footer';

const Layout = props => {

  const { pageTitle, children, transparentNav } = props;
  let title = `Eileen Santiago`;

  if(pageTitle) {
    title = `${pageTitle} | ${title}`
  }

  return (
    <>
      <Head>
        <title>{siteData.title}</title>
        <meta name="description" content={siteData.description}></meta>
        <meta name="keywords" content={siteData.keywords.join(',')}></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={css.container}>
        <Navbar />
        {transparentNav ? children : (
          <div style={{paddingTop: NAV_HEIGHT}}>
            {children}
          </div>
        )}
      </main>
      <Footer/>
    </>
  )
}

export default Layout
