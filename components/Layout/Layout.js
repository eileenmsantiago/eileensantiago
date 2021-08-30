import Head from 'next/head';
import Navbar from '../Navbar/Navbar';
import css from './Layout.module.scss';
import siteData from '../../data/site';
import Footer from '../Footer';
import site from '../../data/site';

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
        <meta name="author" content={siteData.author}></meta>
        <meta name="description" content={siteData.description}></meta>
        <meta name="keywords" content={siteData.keywords.join(' ,')}></meta>
        <meta name="copyright" content={site.year}></meta>
        <link rel="icon" href="favicon/favicon.ico" />
        <link rel="authors" content={siteData.author} href={siteData.url}/>
        <link rel="icon" href="favicon/favicon.ico" type="image/x-icon"/>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png"/>
        <link rel="manifest" href="favicon/site.webmanifest"/>
        <link rel="mask-icon" href="favicon/safari-pinned-tab.svg" color="#5bbad5"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="theme-color" content="#ffffff"/>

        <meta property="og:title" content={siteData.titleDescription} />
        <meta property="og:url" content={siteData.url} />
        <meta property="og:type" content={siteData.url} />
        <meta property="og:description" content={siteData.description} />
        <meta property="og:image" content="https://eileensantiago.com/assets/profile/eileen.jpg" /> 

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content={siteData.twitterHandle} />
        <meta name="twitter:title" content={siteData.titleDescription} />
        <meta name="twitter:description" content={siteData.description} />
        <meta name="twitter:url" content={siteData.url} />
        <meta name="twitter:image" content="https://eileensantiago.com/assets/profile/eileen.jpg" /> 
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
