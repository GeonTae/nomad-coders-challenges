const colors = [
  '#ef5777',
  '#575fcf',
  '#4bcffa',
  '#34e7e4',
  '#0be881',
  '#f53b57',
  '#3c40c6',
  '#0fbcf9',
  '#00d8d6',
  '#05c46b',
  '#ffc048',
  '#ffdd59',
  '#ff5e57',
  '#d2dae2',
  '#485460',
  '#ffa801',
  '#ffd32a',
  '#ff3f34',
];

const colorBtn = document.querySelector('.button');
const body = document.body;

function handleClickBtn(event) {
  event.preventDefault();
  const chosenFirstColor = colors[Math.floor(Math.random() * colors.length)];
  console.log(chosenFirstColor);

  const remainedColors = colors.filter(color => color !== chosenFirstColor);
  console.log(remainedColors);

  const chosenSecondColor = remainedColors[Math.floor(Math.random() * colors.length)];
  console.log(chosenSecondColor);
  // colorBtn.innerText = "hihi"

  body.style.background = `linear-gradient(${chosenFirstColor}, ${chosenSecondColor})`;
  document.body.style.background = `linear-gradient(to right, ${chosenFirstColor}, ${chosenSecondColor})`;
}

colorBtn.addEventListener('click', handleClickBtn);
