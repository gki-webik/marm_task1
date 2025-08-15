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
      </head>
      <body>
        <div className="max_container">{children}</div>
      </body>
    </html>
  );
}
