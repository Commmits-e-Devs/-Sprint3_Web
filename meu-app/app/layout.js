import galeria from './page.js';
export default function RootLayout({ children }) {
  return (
    <html >
      <body>
        {children}
        <galeria />
      </body>
    </html>
  );
}
