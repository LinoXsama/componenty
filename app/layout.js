import { Roboto } from 'next/font/google';
import "./globals.css";


const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const metadata = {
  title: "Componenty",
  description: "Componenty la bibliothèque ultime de composants Next JS !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${roboto.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
