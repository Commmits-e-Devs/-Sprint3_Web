'use client'; // Necessário no Next.js para usar Hooks de estado

import React, { useState } from 'react';
import styles from './page.module.css';

function Galeria() {
  const fotosIniciais = [
    { id: 1, url: 'https://picsum.photos/id/1018/400/300', titulo: 'Natureza' },
    { id: 2, url: 'https://picsum.photos/id/1015/400/300', titulo: 'Rio' },
    { id: 3, url: 'https://picsum.photos/id/1019/400/300', titulo: 'Paisagem' },
    { id: 4, url: 'https://picsum.photos/id/1016/400/300', titulo: 'Montanhas' },
    { id: 5, url: 'https://picsum.photos/id/1022/400/300', titulo: 'Céu' },
    { id: 6, url: 'https://picsum.photos/id/1023/400/300', titulo: 'Aventura' }
  ];

  // Estado para guardar o status de cada foto pelo ID
  const [statusFotos, setStatusFotos] = useState({});

  // Função para alternar entre ligado/desligado
  const alternarStatus = (id) => {
    setStatusFotos((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div className={styles.container}>
      <h2>Minha Galeria de Fotos</h2>
      
      <div className={styles.grid}>
        {fotosIniciais.map((foto) => {
          const estaLigado = !!statusFotos[foto.id];

          return (
            <div key={foto.id} className={styles.card}>
              <div className={styles.item}>
                <img src={foto.url} alt={foto.titulo} />
              </div>

              {/* Área do Botão Liga/Desliga */}
              <div className={styles.controle}>
                <span>{estaLigado ? 'Privado' : 'Público'}</span>
                
                <label className={styles.switch}>
                  <input
                    type="checkbox"
                    checked={estaLigado}
                    onChange={() => alternarStatus(foto.id)}
                  />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Galeria;