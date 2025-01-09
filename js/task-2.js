const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];
const ulElement = document.querySelector('.gallery');
      ulElement.style.display = 'flex';
      ulElement.style.flexWrap = 'wrap';
      ulElement.style.justifyContent = "center";
      ulElement.style.gap = "10px 10px";
      ulElement.style.margin = "0 auto";
      ulElement.style.padding = "10px";
      ulElement.style.maxWidth = "500px";
      ulElement.style.backgroundColor = "#00FF00";
      ulElement.style.borderRadius = "20px";
            
      ulElement.style.listStyle = "none";
      const liElem = `
          <li><img src=${images[0].url} alt=${images[0].alt} width="150"></li>
          <li><img src=${images[1].url} alt=${images[1].alt} width="150"></li>
          <li><img src=${images[2].url} alt=${images[2].alt} width="150"></li>
          <li><img src=${images[3].url} alt=${images[3].alt} width="150"></li>
          <li><img src=${images[4].url} alt=${images[4].alt} width="150"></li>
          <li><img src=${images[5].url} alt=${images[5].alt} width="150"></li>
        `
      ulElement.insertAdjacentHTML('afterbegin',liElem);
