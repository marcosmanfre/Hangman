import React from 'react';

const LetrasUsadas = ({ letrasErradas }) => {
  return (
    <div className="letras-usadas">
      <p>Letras incorretas já informadas: {letrasErradas.join(', ')}</p>
    </div>
  );
};

export default LetrasUsadas;
