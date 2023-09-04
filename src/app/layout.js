// Components
import Navbar from '@/components/Navbar';

import './globals.css';
import { Montserrat, Open_Sans } from "next/font/google";

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
})
 
const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-openSans',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}> 
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
