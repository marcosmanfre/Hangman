import React, { useState } from "react";
import './index.css';
import reportWebVitals from './reportWebVitals';
import LetrasUsadas from "./LetrasUsadas";
import './App.css';



function Jogoforca() {
  const [palavraSecreta, setPalavraSecreta] = useState('');
  const [letrasUsadas, setLetrasUsadas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [tentativasRestantes, setTentativasRestantes] = React.useState(10);


  const PalavraSecreta = (event) => {
    setPalavraSecreta(event.target.value.toUpperCase());
  };

  const Letra = (event) => {
    const letra = event.target.value.toUpperCase();

    
    if (letrasUsadas.includes(letra) || letrasErradas.includes(letra)) {
      alert(`A letra "${letra}" já foi usada!`);
      event.target.value = '';
      return;
    }


    if (palavraSecreta.includes(letra)) {
      setLetrasUsadas([...letrasUsadas, letra]);
    } else {
      setLetrasErradas([...letrasErradas, letra]);
      setTentativasRestantes(tentativasRestantes - 1);
      if (tentativasRestantes === 0) {
        alert('Você perdeu o jogo');
        return;
      }
    }

    
  };
  
  const PalavraCompleta = (event) => {
    const palavraCompleta = event.target.value.toUpperCase();

    if (palavraCompleta === palavraSecreta) {
      alert('Parabéns, você ganhou! a palavra-chave é '+ palavraSecreta);
    }   
           
  };

  const renderPalavraSecreta = () => {
    const letras = palavraSecreta.split('');

    return (
      <div className="palavra-secreta">
       {letras.map((letra, index) => (
    <span key={index} style={{ marginRight: "0.5em" }}>
      {letrasUsadas.includes(letra) ? letra : "___"}
    </span>
  ))}
</div>
    );
  };

  return (
    <div className="App">
      <div>
        <form>
        <label htmlFor="palavra-secreta-input">Digite a palavra secreta:</label>
        <input id="palavra-secreta-input" type="text" onChange={PalavraSecreta} />   

        </form>
      </div>
      {palavraSecreta && (
        <>
          <h2>Palavra Secreta</h2>
          {renderPalavraSecreta()}
          <div>
            Você tem {tentativasRestantes} tentativas restantes!
          </div>
          <div>
            <LetrasUsadas letrasErradas={letrasErradas} />
          </div>
          <div>
            <label htmlFor="letra-input">Tente acertar a palavra-chave! Informe uma letra: </label>
            <input id="letra-input" type="text" maxLength={1} onChange={Letra}  />
          </div>
          <div>
            Ou tente adivinhar a palavra completa!
          </div>
          <div>
            <label htmlFor="palavra-completa-input">Informe a palavra completa:</label>
            <input id="palavra-completa-input" type="text" onChange={PalavraCompleta} />
          </div>
         
          
        </>
      )}
    </div>
  );
}

export default Jogoforca;
reportWebVitals();