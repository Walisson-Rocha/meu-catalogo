// componentes/Serie.jsx
import React from 'react';

const Serie = ({ nome, ano, diretor, temporadas, capa }) => {
  return (
    <div className="serie">
      <img src={capa} alt={nome} className="capa-serie" />
      <h2>{nome}</h2>
      <p><strong>Ano de lançamento: </strong> {ano}</p>
      <p><strong>Diretor: </strong> {diretor}</p>
      <p><strong>Temporadas: </strong> {temporadas}</p>
    </div>
  );
};

export default Serie;
