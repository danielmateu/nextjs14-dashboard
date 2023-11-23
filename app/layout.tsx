import { lusitana, montserrat } from './ui/fonts';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        {children}
        <footer className='text-center'>
          Made with ❤️ by <a href="https://daniel-mateu.vercel.app/" target='_blank'>Daniel Mateu</a>
        </footer>
      </body>
    </html >
  );
}
