import { useState, useRef } from "react";

function Home() {
  const suabixaRef = useRef(null);
  const risadaRef = useRef(null);
  const correndoRef = useRef(null);
  const concretoRef = useRef(null);
  const smileRef = useRef(null);

  const [stageState, setStageState] = useState(0);

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async function start() {
    // Estágio 1: Sua Bixa Jumpscare
    setStageState(1);
    suabixaRef.current.volume = 0.3;
    suabixaRef.current.play();

    await sleep(1000);

    // Estágio 2: Correndo e Rindo
    setStageState(2);
    risadaRef.current.play();
    correndoRef.current.play();

    await sleep(4000);

    // Estágio 3: Concreto 😼👍️
    setStageState(3);
    concretoRef.current.play();

    await sleep(4000);
    concretoRef.current.pause();

    // Estágio 4: final 🥹
    setStageState(4);
    smileRef.current.volume = 0.3;
    smileRef.current.play();
  }

  return (
    <div className="button-screen">
      <div hidden={stageState !== 0}>
        <button onClick={start}>Cliq aq se vc e amigo deste cara 😎👇️</button>
        <br></br>
        <br></br>
        <img className="eu" src="/images/eu.jpeg"></img>
      </div>

      <div hidden={stageState !== 1}>
        <img className="rosto" src="/images/chaves-rosto.jpg"></img>
      </div>

      <div hidden={stageState !== 2}>
        <img className="correndo" src="/images/chaves-correndo.jpg"></img>
      </div>

      <div hidden={stageState < 3}>
        <img className="gato-joia" src="/images/gato-joia.jpg"></img>
      </div>

      <div hidden={stageState !== 4}>
        <div className="clarao"></div>
        <p>Obrigado por ainda estar comigo aí qnd eu preciso🥹👍️</p>
        <p className="discreto">
          (agr quem é macho de rachar um fatal model cos parsero?)
        </p>

        <div className="esqueletos-dancantes">
          <img className="" src="/images/dancing1.gif"></img>
          <img className="" src="/images/dancing2.gif"></img>
          <img className="" src="/images/dancing3.gif"></img>
          <img className="" src="/images/dancing4.gif"></img>
        </div>
      </div>

      {/* Áudios */}
      <audio ref={suabixaRef} src="/audio/suabixa.mp3" />
      <audio ref={risadaRef} src="/audio/risada.mp3" />
      <audio ref={correndoRef} src="/audio/correndo.mp3" />
      <audio ref={concretoRef} src="/audio/concreto.mp3" />
      <audio ref={smileRef} src="/audio/smile.mp3" loop={true} />
    </div>
  );
}

export default Home;
