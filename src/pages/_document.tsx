import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&family=Roboto+Flex:opsz,wght@8..144,100..1000&display=swap"
          rel="stylesheet"
        />
        <>
          <title>
            Zahrady VIVA – Profesionální návrh, realizace a údržba zahrad
          </title>
          <meta
            name="description"
            content="Komplexní služby v oblasti zahradní architektury. Zahrady VIVA nabízí návrh, realizaci i celoroční údržbu zahrad na míru."
          />

          <link rel="canonical" href="https://zahradyviva.cz/" />

          {/* Open Graph */}
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Zahrady VIVA – Profesionální návrh, realizace a údržba zahrad"
          />
          <meta
            property="og:description"
            content="Komplexní služby v oblasti zahradní architektury. Zahrady VIVA nabízí návrh, realizaci i celoroční údržbu zahrad na míru."
          />
          <meta property="og:url" content="https://zahradyviva.cz/" />
          <meta property="og:site_name" content="Zahrady VIVA" />
          <meta
            property="og:image"
            content="https://zahradyviva.cz/img/zelen/dřeviny/jpeg-optimizer_IMG_0710.jpeg"
          />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="Zahrady VIVA – Profesionální návrh, realizace a údržba zahrad"
          />
          <meta
            name="twitter:description"
            content="Komplexní služby v oblasti zahradní architektury. Zahrady VIVA nabízí návrh, realizaci i celoroční údržbu zahrad na míru."
          />
          <meta
            name="twitter:image"
            content="https://zahradyviva.cz/img/zelen/dřeviny/jpeg-optimizer_IMG_0710.jpeg"
          />

          {/* JSON-LD Structured Data */}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Zahrady VIVA",
              url: "https://zahradyviva.cz/",
              image:
                "https://zahradyviva.cz/img/zelen/dřeviny/jpeg-optimizer_IMG_0710.jpeg",
              description:
                "Komplexní služby v oblasti zahradní architektury: návrh, realizace a údržba zahrad na míru.",
              priceRange: "CZK",
            })}
          </script>
        </>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
