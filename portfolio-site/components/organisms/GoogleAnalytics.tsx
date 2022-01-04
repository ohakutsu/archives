import React from 'react'

export const GoogleAnalytics = () => {
  const gaId = 'G-6QWPHW1KQ4'

  return (
    <>
      {/* Global site tag (gtag.js) - Google Analytics */}
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', '${gaId}');
      `,
        }}
      />
    </>
  )
}
