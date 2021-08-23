import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import css from './Layout.module.scss';
import siteData from '../../data/site';
import Footer from '../Footer';

const Layout = props => {

  const { pageTitle, children, transparentNav, isDark, navBgColor } = props;
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
        <Navbar isDark={isDark}/>
        {transparentNav ? (
          <>
            <div style={{backgroundColor: navBgColor}}>
              <div className={css.transparentSection}>
                {transparentNav()}
              </div>
            </div>
            {children}
          </>
        ) : (
          <div className={css.transparentSection}>
            {children}
           </div>
        )}
      </main>
      <Footer/>
    </>
  )
}

export default Layout
