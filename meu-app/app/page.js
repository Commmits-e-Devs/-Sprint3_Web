import React from 'react';
import './page.module.css'; // Importando o arquivo de estilos

function galeria() {
  // Array com os dados das fotos
  const fotos = [
    { id: 1, url: 'https://picsum.photos/id/1018/400/300', titulo: 'Natureza' },
    { id: 2, url: 'https://picsum.photos/id/1015/400/300', titulo: 'Rio' },
    { id: 3, url: 'https://picsum.photos/id/1019/400/300', titulo: 'Paisagem' },
    { id: 4, url: 'https://picsum.photos/id/1016/400/300', titulo: 'Montanhas' },
    { id: 5, url: 'https://picsum.photos/id/1022/400/300', titulo: 'Céu' },
    { id: 6, url: 'https://picsum.photos/id/1023/400/300', titulo: 'Aventura' }
  ];

  return (
    <div className="galeria-container">
      <h2>Minha Galeria de Fotos</h2>
      
      <div className="galeria-grid">
        {/* O .map percorre o array e renderiza uma tag <img> para cada item */}
        {fotos.map((foto) => (
          <div key={foto.id} className="galeria-item">
            <img src={foto.url} alt={foto.titulo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default galeria;