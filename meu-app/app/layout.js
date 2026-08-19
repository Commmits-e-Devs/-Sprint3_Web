import Galeria from './page.js';
import './globals.css';
export default function RootLayout({ children }) {
  return (
    <html >
      <body>
        {children}
        <Galeria />
      </body>
    </html>
  );
}
