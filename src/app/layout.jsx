"use client";

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <title>Мармеладыч</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link rel="preload" as="image" href="/media/bg.png" />
        <link rel="preload" as="image" href="/media/clock.svg" />
        <link rel="preload" as="image" href="/media/ispeople.png" />
        <link rel="preload" as="image" href="/media/ispeople-2.png" />
        <link rel="preload" as="image" href="/media/loader.png" />
        <link rel="preload" as="image" href="/media/maskLoader.png" />
      </head>
      <body>
        <div className="max_container">{children}</div>
      </body>
    </html>
  );
}
