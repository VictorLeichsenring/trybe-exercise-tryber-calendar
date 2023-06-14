const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// Escreva seu código abaixo.

//Exercício 1 – Crie um calendário dinamicamente
function createDaysOfMonth() {
  const daysList = document.querySelector('#days');
  for (let i = 0; i < decemberDaysList.length; i += 1) {
    let day = document.createElement('li');
    day.className = 'day';
    if (decemberDaysList[i] === 24 || decemberDaysList[i] === 25 || decemberDaysList[i] === 31) {
      day.classList.add ('holiday');
    }
    if (decemberDaysList[i] === 4 || decemberDaysList[i] === 11 || decemberDaysList[i] === 18 || decemberDaysList[i] === 25) {
      day.classList.add ('friday');
    }
    day.innerText = decemberDaysList[i];
    daysList.appendChild(day);
  }
}
createDaysOfMonth();


//Exercício 2 – Implemente uma função que muda a cor de fundo dos dias que possuem a classe "holiday"
const buttomHolidays = document.getElementById('btn-holiday');
buttomHolidays.addEventListener('click', btnHolidays);
function btnHolidays() {
  let holidays = document.getElementsByClassName('holiday');
  for (let i = 0; i < holidays.length; i += 1) {
    let element= holidays[i];
    let backgroundColor = getComputedStyle(element).backgroundColor;
    if (backgroundColor == 'rgb(231, 196, 61)') {
      element.style.backgroundColor = 'rgb(238,238,238)';
    } else {
      element.style.backgroundColor = 'rgb(231, 196, 61)';
    }
  }
}

//Exercício 3 – Implemente uma função que modifica o texto exibido nos dias que são sextas-feiras
const buttomFridays = document.getElementById('btn-friday');
const fridayListDays = [4, 11, 18, 25];
const fridayElementsList = document.getElementsByClassName('friday');
buttomFridays.addEventListener('click', btnFridays);

function btnFridays() {
  for (let i = 0; i < fridayElementsList.length; i += 1) {
    let element = fridayElementsList[i];
    if (element.innerText === 'Sextou') {
      element.innerText = fridayListDays[i];
    } else {
      element.innerText =['Sextou'];
    }
  }
}


