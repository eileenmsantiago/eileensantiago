import Head from 'next/head';
import { fonts } from 'theme';

const HeadTag = ({
    title,
    description,
    keywords,
    canonicalLink,
    og
}) => {
    const domain = "https://www.vallo.ca";
    const absUrl = `${domain}${canonicalLink ? canonicalLink : ""}`;
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords.join(",")}/>
            <link rel="canonical" href={absUrl}/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, shrink-to-fit=no"/>

            <meta property="og:type" content="website"/>
            <meta property="og:title" content={og.title} />
            <meta property="og:url" content={absUrl} />
            <meta property="og:description" content={og.description} />
            <meta property="og:image" content={domain + og.image} /> 

            <meta name="twitter:title" content={og.title} />
            <meta name="twitter:url" content={absUrl} />
            <meta name="twitter:description" content={og.description} />
            <meta name="twitter:card" content={og.description} />
            <meta name="twitter:image" content={domain + og.twitterImg} /> 

            <link rel="preload" href="/fonts/HelveticaNeueLTPro-Roman.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
          <link rel="preload" href="/fonts/HelveticaNeueLTPro-Md.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
          <link rel="preload" href="/fonts/HelveticaNeueLTPro-Bd.woff2" as="font" type="font/woff2" crossorigin="anonymous"/>
          <link rel="preload" href="/fonts/HelveticaNeueLTPro-Roman.woff" as="font" type="font/woff" crossorigin="anonymous"/>
          <link rel="preload" href="/fonts/HelveticaNeueLTPro-Md.woff" as="font" type="font/woff" crossorigin="anonymous"/>
          <link rel="preload" href="/fonts/HelveticaNeueLTPro-Bd.woff" as="font" type="font/woff" crossorigin="anonymous"/>
          <link rel="preload" href="/fonts/HelveticaNeueLTPro-Roman.ttf" as="font" type="font/ttf" crossorigin="anonymous"/>
          <link rel="preload" href="/fonts/HelveticaNeueLTPro-Md.ttf" as="font" type="font/ttf" crossorigin="anonymous"/>
          <link rel="preload" href="/fonts/HelveticaNeueLTPro-Bd.ttf" as="font" type="font/ttf" crossorigin="anonymous"/>
        </Head>
    )
}

export default HeadTag