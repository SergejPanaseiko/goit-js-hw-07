//Возвтрат случайного цвета для фона
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const obj = [
  {inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 30px; height: 30px">1</div>`,},
  {inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 40px; height: 40px">2</div>`, },  
  {inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 50px; height: 50px">3</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 60px; height: 60px">4</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 70px; height: 70px">5</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 80px; height: 80px">6</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 90px; height: 90px">7</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 100px; height: 100px">8</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 110px; height: 110px">9</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 120px; height: 120px">10</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 130px; height: 130px">11</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 140px; height: 140px">12</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 150px; height: 150px">13</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 160px; height: 160px">14</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 170px; height: 170px">15</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 180px; height: 180px">16</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 190px; height: 190px">17</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 200px; height: 200px">18</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 210px; height: 210px">19</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 220px; height: 220px">20</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 230px; height: 230px">21</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 240px; height: 240px">22</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 250px; height: 250px">23</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 260px; height: 260px">24</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 270px; height: 270px">25</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 280px; height: 280px">26</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 290px; height: 290px">27</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 300px; height: 300px">28</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 310px; height: 310px">29</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 320px; height: 320px">30</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 330px; height: 330px">31</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 340px; height: 340px">32</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 350px; height: 350px">33</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 360px; height: 360px">34</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 370px; height: 370px">35</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 380px; height: 380px">36</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 390px; height: 390px">37</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 400px; height: 400px">38</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 410px; height: 410px">39</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 420px; height: 420px">40</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 430px; height: 430px">41</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 440px; height: 440px">42</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 450px; height: 450px">43</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 460px; height: 460px">44</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 470px; height: 470px">45</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 480px; height: 480px">46</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 490px; height: 490px">47</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 500px; height: 500px">48</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 510px; height: 510px">49</div>`, },
  { inerHTML: `<div style="background-color: ${getRandomHexColor()}; width: 520px; height: 520px">50</div>`, },  
]

const boxes = document.getElementById("boxes");  
const clickButtonCreate = document.querySelector('button[data-create]');
//Событие, вызывающее функцию для создания определенного количества элементов
clickButtonCreate.addEventListener('click', () => {
  boxes.innerHTML = '';
  const getInput = document.querySelector('input');
  let valueInput = getInput.value.trim();
  if (valueInput < 1 || valueInput > 100) {return;}
  createBoxes(valueInput); 
  getInput.value = '';
});

//Событие, связанное с очисткой div c id='boxes' от новосозданных элементов <div>
const clickButtonDestroy = document.querySelector('button[data-destroy]');
  clickButtonDestroy.addEventListener('click', () => {
  boxes.innerHTML = '';
  })

//Выделенная функция, создающая div-элементы
function createBoxes(amount) {
  const firstTen = obj.slice(0, amount);
  const array = firstTen.map(item => item.inerHTML);
  const array2=array.join('');
  boxes.insertAdjacentHTML('beforeend', array2);
}

