//Возвтрат случайного цвета для фона
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

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
    let count = 20;
    for (let i = 1; i <= amount; i++) {
    count += 10;
    const div = document.createElement('div');
    div.textContent = i;
    div.style.width = (count + "px"); div.style.height = (count + "px");
    div.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(div);
  }
}

