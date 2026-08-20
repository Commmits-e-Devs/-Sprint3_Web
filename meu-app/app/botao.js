'use client'; // Necessário no Next.js para usar Hooks de estado

import React, { useState } from 'react';
import styles from './page.module.css';

// criei tipo um json com as fotos iniciais, cada foto tem um id, uma url e um titulo 
const fotosIniciais = [
  { id: 1, url: 'https://picsum.photos/id/1018/400/300', titulo: 'Natureza' },
  { id: 2, url: 'https://picsum.photos/id/1015/400/300', titulo: 'Rio' },
  { id: 3, url: 'https://picsum.photos/id/1019/400/300', titulo: 'Paisagem' },
  { id: 4, url: 'https://picsum.photos/id/1016/400/300', titulo: 'Montanhas' },
  { id: 5, url: 'https://picsum.photos/id/1022/400/300', titulo: 'Céu' },
  { id: 6, url: 'https://picsum.photos/id/1023/400/300', titulo: 'Aventura' }
];

function Galeria() {
  const [statusFotos, setStatusFotos] = useState({});

  const alternarStatus = (id) => {
    setStatusFotos((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const fotosPublicas = fotosIniciais.filter((foto) => !statusFotos[foto.id]);
  const fotosPrivadas = fotosIniciais.filter((foto) => statusFotos[foto.id]);

  const renderFoto = (foto) => {
    const estaLigado = !!statusFotos[foto.id];

    // o css muda se for privado ou publico
    return (
      <div 
        key={foto.id} 
        className={`${styles.card} ${estaLigado ? styles.cardPrivado : ''}`}
      >
        <div className={styles.item}>
          <img src={foto.url} alt={foto.titulo} />
        </div>

        <div className={styles.controle}>
          <span>{estaLigado ? 'Privado' : 'Público'}</span>
          
          {/* Botão com a correção de clique */}
          <label className={styles.switch} onClick={(e) => {
            e.preventDefault();
            alternarStatus(foto.id);
          }}>
            <input type="checkbox" checked={estaLigado} readOnly />
            <span className={styles.slider}></span>
          </label>
        </div>
      </div>
    );
  };

  return (
    // parte da galeria pública
    <div className={styles.container}>
      <h2>Minha Galeria de Fotos | Você tem {fotosPublicas.length} fotos públicas</h2>
      
      <div className={styles.grid}>
        {fotosPublicas.map(renderFoto)}
      </div>

      {/* parte da galeria privada */}
      {fotosPrivadas.length > 0 && (
        <>
          <h2 style={{ marginTop: '2rem' }}>Galeria de Fotos Privadas | Você tem {fotosPrivadas.length === 1 ? 'uma foto privada' : `${fotosPrivadas.length} fotos privadas`}</h2>
          
          <div className={styles.grid}>
            {fotosPrivadas.map(renderFoto)}
          </div>
        </>
      )}
    </div>
  );
}

export default Galeria;