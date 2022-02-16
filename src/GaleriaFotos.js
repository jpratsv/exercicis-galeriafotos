// 1.Donat un array amb URL de fotos, mostrar les fotos en graella
// 2.En clicar un foto, mostrar-la en pantalla completa (avançat)
// 3.En clicar la foto ampliada, mostrar la graella un altre cop

import "./styles.css";
import { useState } from "react";

export default function GaleriaFotos() {
  let galeria = [
    { src: "img/1.jpg", alt: "Prueba1" },
    { src: "img/2.jpg", alt: "Prueba2" },
    { src: "img/3.jpg", alt: "Prueba3" },
    { src: "img/4.jpg", alt: "Prueba4" },
    { src: "img/5.jpg", alt: "Prueba5" },
    { src: "img/6.jpg", alt: "Prueba6" },
  ];

  const [img, setImg] = useState(0);


  const visualiza = (foto) => setImg((nume) =>  nume * 10 + ); 

  return (
    <>
      <body class="Galeria">
        <div class="general">
          <header>
            <h1>Práctica Galeria de fotografias</h1>
          </header>
          <main class="detalle">
            <img
              onClick={() => visualiza(0)}
              src="img/0.jpg"
              alt="Imagen 0"
            ></img>
            <img
              onClick={() => visualiza(1)}
              src="img/1.jpg"
              alt="Imagen 1"
            ></img>
            <img
              onClick={() => visualiza(2)}
              src="img/2.jpg"
              alt="Imagen 2"
            ></img>
            <img
              onClick={() => visualiza(3)}
              src="img/3.jpg"
              alt="Imagen 3"
            ></img>
            <img
              onClick={() => visualiza(4)}
              src="img/4.jpg"
              alt="Imagen 4"
            ></img>
          </main>
        </div>
      </body>

      <footer>
        <p>Final</p>
      </footer>
    </>
  );
}
