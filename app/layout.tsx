import { lusitana, montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <title>Nextjs 14 first contact</title>
        <meta name="description" content="Next.js + TypeScript" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className='text-center'>
          Made with ❤️ by <a href="https://daniel-mateu.vercel.app/" target='_blank'>Daniel Mateu</a>
        </footer>
      </body>
    </html >
  );
}
