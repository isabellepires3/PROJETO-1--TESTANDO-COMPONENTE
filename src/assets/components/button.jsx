import React, { useState } from 'react';

function BotaoContador() {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  return (
    <button onClick={handleClick}>
      Contador: {contador}
    </button>
  );
}

export default BotaoContador;