import './globals.css'; // Mantenha essa linha se você tiver estilos globais

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {/* A propriedade 'children' é onde o seu page.js (e a sua Galeria) será encaixado */}
        {children}
      </body>
    </html>
  );
}