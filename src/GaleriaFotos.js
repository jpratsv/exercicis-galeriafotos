// 1.Donat un array amb URL de fotos, mostrar les fotos en graella
// 2.En clicar un foto, mostrar-la en pantalla completa (avançat)
// 3.En clicar la foto ampliada, mostrar la graella un altre cop

import "./styles.css";
import { useState } from "react";

export default function GaleriaFotos() {
  let galeria = [
    { src: "img/0.jpg", alt: "Prueba0" },
    { src: "img/1.jpg", alt: "Prueba1" },
    { src: "img/2.jpg", alt: "Prueba2" },
    { src: "img/3.jpg", alt: "Prueba3" },
    { src: "img/4.jpg", alt: "Prueba4" },
    { src: "img/5.jpg", alt: "Prueba5" },
  ];

  const [indexFotoActual, setIndexFotoActual] = useState(0);

  const visualiza = (foto) => setIndexFotoActual(foto);

  if (indexFotoActual) {
    return (
      <img
        id="ampliada"
        src={"img/" + indexFotoActual + ".jpg"}
        onClick={() => visualiza(0)}
      ></img>
    );
  }
  return (
    <>
      <body class="Galeria">
        <div class="general">
          <header>
            <h1>Práctica Galeria de fotografias</h1>
          </header>
          <main class="detalle">
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
            <img
              onClick={() => visualiza(5)}
              src="img/5.jpg"
              alt="Imagen 5"
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
