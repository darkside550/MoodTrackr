import { Fugaz_One, Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });
const fugaz = Fugaz_One({ subsets: ["latin"], weight: ["400"] });

export const metadata = {
  title: "MoodTrackr",
  description: "Track your daily Moods",
};

export default function RootLayout({ children }) {
  const header = (
    <header className='p-4 sm:p-8 flex items-center justify-between gap-4'>
      <h1 className={"text-base sm:text-lg textGradient " + fugaz.className}>MoodTrackr</h1>
    </header>
  );
  const footer = (
    <footer className='p-4 sm:p-8 grid place-items-center'>
      <p className={"text-indigo-400 " + fugaz.className}>Powered by Next JS and Firebase</p>
    </footer>
  );

  return (
    <html lang='en'>
      <body
        className={
          "w-full max-w-[1000px] mx-auto text-sm sm:text-base min-h-screen flex flex-col text-slate-800 " +
          openSans.className
        }>
        {header}
        {children}
        {footer}
      </body>
    </html>
  );
}
