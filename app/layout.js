import "./globals.css";
import ReduxProvider from "@/store/providers";
import { ToastContainer, toast } from 'react-toastify';
import {Albert_Sans} from 'next/font/google'


const albert_sans = Albert_Sans({
  subsets: ['latin'],
})


export const metadata = {
  title: "Razinsoft",
  description: "A cutting edge digital solution",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${albert_sans.className}`}
      >
        <ReduxProvider>
          <ToastContainer />
            {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
