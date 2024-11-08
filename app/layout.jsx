import localFont from "next/font/local";
import "./globals.css";
import Image from "next/image";
import bgimg from './public/uvcebg.jpg'
import NavBar from "./components/NavBar";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "UVCE - time table",
  description: "team D-django",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.className} antialiased`}
      >
        <div className=''>
          <Image className='w-[100%] h-[100vh] object-cover relative -z-50 ' src={bgimg} alt="" />
          <div className='bg-[#000000aa] absolute top-0 left-0 w-[100%] h-[100vh] -z-30 '></div>
        </div>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
