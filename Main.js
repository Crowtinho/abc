const letras = {
  a: { palabra: "águila", imagen: "https://payload.cargocollective.com/1/6/194016/12196792/1_AGUILA_RGB_1000.jpg", width: 250, height: 200 },
  b: { palabra: "ballena", imagen: "https://i.pinimg.com/originals/24/29/72/242972fa41149ba5632fae85eb6c12d7.jpg", width: 300, height: 200 },
  c: { palabra: "cocodrilo", imagen: "https://tse3.mm.bing.net/th/id/OIP.ciZFxZr_vknf3laUo6IlDwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", width: 200, height: 200 },
  d: { palabra: "delfin", imagen: "https://i2.wp.com/www.imageneseducativas.com/wp-content/uploads/2017/03/Ficha-letra-d-delfin_c.gif?ssl=1", width: 180, height: 180 },
  e: { palabra: "elefante", imagen: "https://tse3.mm.bing.net/th/id/OIP.-Wsb5fe9X4oxZKOgy9d3YAHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3", width: 300, height: 200 },
  f: { palabra: "foca", imagen: "https://1.bp.blogspot.com/-R-A-oliDNFU/YA79hvdr6NI/AAAAAAAA8IU/RhH7V0OCI9cOsDkcX8ZRl0i8Cth0u8DtgCLcBGAsYHQ/s1040/Diapositiva7.JPG", width: 220, height: 160 },
  g: { palabra: "gato", imagen: "https://i.pinimg.com/originals/4c/8c/90/4c8c90cc7b19b1bbf49f3f8a6e4317ce.jpg", width: 250, height: 200 },
  h: { palabra: "hormiga", imagen: "https://tse3.mm.bing.net/th/id/OIP.tdLlKUhJixfI3pLtm9BmUwAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", width: 200, height: 220 },
  i: { palabra: "iguana", imagen: "https://i.pinimg.com/736x/62/90/a2/6290a2f74f2e8c6c0f2b713d20896ef3--primers-mobiles.jpg", width: 220, height: 200 },
  j: { palabra: "jirafa", imagen: "https://tse4.mm.bing.net/th/id/OIP.-VOy1dRyMInvuP5dusUkbQHaJ4?rs=1&pid=ImgDetMain&o=7&rm=3", width: 200, height: 250 },
  k: { palabra: "koala", imagen: "https://tse2.mm.bing.net/th/id/OIP.jBDyUcAfVWyHTWf1qXOfnwHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", width: 200, height: 200 },
  l: { palabra: "león", imagen: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg4OTe-SzKv6MI-ugRWk2Wr2gMIBUzLIYzy-mvK9a24ySRUFQNr4EB7Xb4V02-MJuiu8md9R4WpAKDNwdjqKg5ynqgP6dq1O5o59X2O4prBxGpG0bhzCBlnWrmsZGe0lETTrUBk_03RJl2E3GOy0vqFb3lmNCEO3oQdZcFVmdIVN_8ziGjvJZZnrUt9/s2200/Leon%20Letra_1.jpg", width: 180, height: 180 },
  m: { palabra: "mono", imagen: "https://tse2.mm.bing.net/th/id/OIP.rNN90tg7HmnnxRsP7aWaiQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", width: 250, height: 200 },
  n: { palabra: "nutria", imagen: "https://tse2.mm.bing.net/th/id/OIP.SbY7OCkC5K2rZ0_6PzOAxgHaHa?rs=1&pid=ImgDetMain&o=7&rm=3", width: 180, height: 180 },
  ñ: { palabra: "ñandú", imagen: "https://i.pinimg.com/originals/4e/7f/ca/4e7fca00be470632ddc6d4fab2134dce.jpg", width: 180, height: 180 },
  o: { palabra: "oso", imagen: "https://i.pinimg.com/736x/4c/6f/9c/4c6f9c225e1ddf8e6344c012404fa286.jpg", width: 180, height: 180 },
  p: { palabra: "panda", imagen: "https://img.freepik.com/vector-gratis/dibujado-mano-alfabeto-letra-p-panda-ilustracion-vector_74440-2951.jpg?w=2000", width: 180, height: 180 },
  q: { palabra: "queso", imagen: "https://i.pinimg.com/originals/4c/fd/ee/4cfdee6877e2a95bc02c87002b27cc46.jpg", width: 180, height: 180 },
  r: { palabra: "ratón", imagen: "https://i.pinimg.com/originals/9f/68/4b/9f684b75ceab50b2faa29f4b22e8080a.jpg", width: 200, height: 180 },
  s: { palabra: "serpiente", imagen: "https://thumbs.dreamstime.com/b/el-parque-zool%C3%B3gico-lindo-de-la-historieta-ilustr%C3%B3-alfabeto-con-los-animales-divertidos-espa%C3%B1ol-s-para-serpiente-118457207.jpg", width: 180, height: 180 },
  t: { palabra: "tortuga", imagen: "https://tse1.mm.bing.net/th/id/OIP.XsVUxwGemBSz5r-cN0bYxAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3", width: 250, height: 150 },
  u: { palabra: "unicornio", imagen: "https://th.bing.com/th/id/R.f03c4ced3c7fd69a58e1625f8276995a?rik=r1lh3V4c4DX1OQ&riu=http%3a%2f%2fwww.mundoprimaria.com%2fwp-content%2fuploads%2f2015%2f06%2f1_Lecto-10.jpg&ehk=J01WrdgQESQL637X9i0IQYaLnLmnQrnAH7RzVjr1BLA%3d&risl=&pid=ImgRaw&r=0", width: 180, height: 180 },
  v: { palabra: "vaca", imagen: "https://i.pinimg.com/originals/e1/32/06/e132064b8397fe6a7cf2b9f707ddc089.jpg", width: 250, height: 200 },
  w: { palabra: "windsurf", imagen: "https://static.guiainfantil.com/pictures/1907-letra-w-fichas-con-el-abecedario-para-ninos.jpg", width: 180, height: 180 },
  x: { palabra: "xilófono", imagen: "https://static.guiainfantil.com/pictures/1909-4-letra-x-fichas-con-el-abecedario-para-ninos.jpg", width: 200, height: 180 },
  y: { palabra: "yogurt", imagen: "https://static.guiainfantil.com/pictures/1910-letra-y-fichas-con-el-abecedario-para-ninos.jpg", width: 180, height: 180 },
  z: { palabra: "zorro", imagen: "https://i.pinimg.com/originals/58/e4/4e/58e44ea114dbd789333866e658f35fe9.jpg", width: 250, height: 200 },
};

Object.keys(letras).forEach(letra => {
  const btn = document.getElementById(letra);
  if (btn) {
    btn.addEventListener("click", () => {

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