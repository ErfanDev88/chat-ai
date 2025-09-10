import { Poppins } from 'next/font/google';
import "./globals.css";
import Sidebar from '@/components/layout/Sidebar';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ["latin"],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata = {
  title: "ChatAi | Free Ai Assistant",
  description: "Your free ai Assistant. you can chat, ask, or even make code with ChatAi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} antialiased`}>
      <body
        className={`w-full h-screen flex bg-[url('../public/Background.png')] bg-cover bg-no-repeat bg-[#DFD0B8] ${poppins.variable} antialiased`}
      >
        
        {children}
      </body>
    </html>
  );
}
