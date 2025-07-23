const letras = {
  a: { palabra: "águila", imagen: "https://payload.cargocollective.com/1/6/194016/12196792/1_AGUILA_RGB_1000.jpg", width: 250, height: 200 },
  b: { palabra: "ballena", imagen: "https://i.pinimg.com/originals/24/29/72/242972fa41149ba5632fae85eb6c12d7.jpg", width: 300, height: 200 },
  c: { palabra: "cocodrilo", imagen: "https://tse3.mm.bing.net/th/id/OIP.ciZFxZr_vknf3laUo6IlDwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", width: 200, height: 200 },
  d: { palabra: "dado", imagen: "https://cdn.pixabay.com/photo/2012/04/18/13/22/dice-37047_1280.png", width: 180, height: 180 },
  e: { palabra: "elefante", imagen: "https://cdn.pixabay.com/photo/2012/04/01/16/49/elephant-23612_1280.png", width: 300, height: 200 },
  f: { palabra: "foca", imagen: "https://cdn.pixabay.com/photo/2021/12/11/13/24/seal-6862100_1280.png", width: 220, height: 160 },
  g: { palabra: "gato", imagen: "https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg", width: 250, height: 200 },
  h: { palabra: "helado", imagen: "https://cdn.pixabay.com/photo/2017/08/30/09/08/ice-cream-2691674_1280.jpg", width: 200, height: 220 },
  i: { palabra: "iglesia", imagen: "https://cdn.pixabay.com/photo/2016/01/19/15/05/church-1141215_1280.jpg", width: 220, height: 200 },
  j: { palabra: "jirafa", imagen: "https://cdn.pixabay.com/photo/2020/01/14/16/25/giraffe-4763503_1280.jpg", width: 200, height: 250 },
  k: { palabra: "koala", imagen: "https://cdn.pixabay.com/photo/2014/06/03/19/39/koala-361208_1280.jpg", width: 200, height: 200 },
  l: { palabra: "luna", imagen: "https://cdn.pixabay.com/photo/2012/04/10/23/57/moon-26896_1280.png", width: 180, height: 180 },
  m: { palabra: "mariposa", imagen: "https://cdn.pixabay.com/photo/2017/03/10/21/16/butterfly-2136008_1280.jpg", width: 250, height: 200 },
  n: { palabra: "nido", imagen: "https://cdn.pixabay.com/photo/2018/03/18/15/00/nest-3237970_1280.jpg", width: 180, height: 180 },
  o: { palabra: "oso", imagen: "https://cdn.pixabay.com/photo/2017/07/23/18/07/bear-2535886_1280.jpg", width: 250, height: 200 },
  p: { palabra: "pelota", imagen: "https://cdn.pixabay.com/photo/2012/04/24/12/31/ball-40433_1280.png", width: 180, height: 180 },
  q: { palabra: "queso", imagen: "https://cdn.pixabay.com/photo/2014/12/21/23/28/cheese-576546_1280.png", width: 180, height: 180 },
  r: { palabra: "ratón", imagen: "https://cdn.pixabay.com/photo/2017/01/19/11/51/rat-1992477_1280.jpg", width: 200, height: 180 },
  s: { palabra: "sol", imagen: "https://cdn.pixabay.com/photo/2012/04/13/00/11/sun-31213_1280.png", width: 180, height: 180 },
  t: { palabra: "tren", imagen: "https://cdn.pixabay.com/photo/2016/02/25/16/36/train-1220100_1280.png", width: 250, height: 150 },
  u: { palabra: "uva", imagen: "https://cdn.pixabay.com/photo/2014/10/19/20/59/grapes-494759_1280.jpg", width: 180, height: 180 },
  v: { palabra: "vaca", imagen: "https://cdn.pixabay.com/photo/2016/04/01/10/10/cow-1299980_1280.png", width: 250, height: 200 },
  w: { palabra: "wifi", imagen: "https://cdn.pixabay.com/photo/2016/03/31/19/16/wifi-1293545_1280.png", width: 180, height: 180 },
  x: { palabra: "xilófono", imagen: "https://cdn.pixabay.com/photo/2013/07/12/19/22/xylophone-154732_1280.png", width: 200, height: 180 },
  y: { palabra: "yoyo", imagen: "https://cdn.pixabay.com/photo/2012/04/12/19/20/yoyo-30665_1280.png", width: 180, height: 180 },
  z: { palabra: "zorro", imagen: "https://cdn.pixabay.com/photo/2021/01/04/18/01/fox-5887904_1280.jpg", width: 250, height: 200 },
};

Object.keys(letras).forEach(letra => {
  const btn = document.getElementById(letra);
  if (btn) {
    btn.addEventListener("click", () => {
      const sonido = new Audio("sonidos/bubble-pop-06-351337.mp3");

      sonido.play().catch((error) => {
        console.error("Error al reproducir el sonido:", error);
      });

      const { palabra, imagen, width, height } = letras[letra];

      Swal.fire({
        title: `${letra.toUpperCase()} de ${palabra}`,
        imageUrl: imagen,
        imageWidth: width,
        imageHeight: height,
        confirmButtonText: '¡Siguiente letra!'
      });
    });
  }
});
