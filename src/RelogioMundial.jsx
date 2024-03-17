import React, { useState, useEffect } from 'react';

function RelogioMundial({ fusoHorario, cidade }) {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setHora(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatoHora = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: false,
    timeZone: fusoHorario,
  };

  return (
    <div className="relogio">
      <h2>{cidade}</h2>
      <p>{hora.toLocaleTimeString('pt-BR', formatoHora)}</p>
    </div>
  );
}

export default RelogioMundial;
