//Возвтрат случайного цвета для фона
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function generatorArray(count) {
  let arrayTags = [];
  let sum = 1;
  for (let i = 0; i < count;i++){
    arrayTags.push(`<div style="background-color: ${getRandomHexColor()}; width: ${sum * 10 + 20}px; height: ${sum * 10 + 20}px">${sum}</div>`);
    sum++;
  }
  return arrayTags;
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

// //Выделенная функция, создающая div-элементы
function createBoxes(amount) {
  const arrayObject = generatorArray(amount);
  const blocks = arrayObject.join('');
  boxes.insertAdjacentHTML('beforeend', blocks);
}

