// componentes/Filme.jsx
import React from 'react';

const Filme = ({ nome, ano, diretor, tipo, capa }) => {
  return (
    <div className="filme">
      <img src={capa} alt={nome} className="capa-filme" />
      <h2>{nome}</h2>
      <p><strong>Ano de lançamento:</strong> {ano}</p>
      <p><strong>Diretor:</strong> {diretor}</p>
      <p><strong>Gênero:</strong> {tipo}</p>
    </div>
  );
};

export default Filme;
