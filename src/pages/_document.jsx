import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Secular+One&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Berkshire+Swash&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body className="text-gray-900 bg-gray-50">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
