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

//Exercício 4 – Implemente duas funções que criem um efeito de "zoom"
let daysListElemnt = document.getElementsByClassName('day');
for (let i = 0; i < daysListElemnt.length; i += 1) {
  let element = daysListElemnt[i];
  element.addEventListener('mouseover', dayZoomIn);
  element.addEventListener('mouseout', dayZoomOut);
}
function dayZoomIn (event) {
  let element = event.target;
  element.style.fontSize = '30px';
}
function dayZoomOut(event) {
  let element = event.target;
  element.style.fontSize = '20px';
}

//Exercício 5 - Implemente uma função que seleciona uma tarefa e atribua a cor da tarefa ao dia do calendário
let taskClassList = document.getElementsByClassName('task');
let divProjeto = taskClassList[0];
let divExercicios = taskClassList[1];
divProjeto.addEventListener('click', selectTaskProjeto);
divExercicios.addEventListener('click', selectTaskExercicio);
let tasksStatus= '';
let projectDaysElements = [];
let exerciseDaysElements = [];

function selectTaskProjeto(event) {
  if (tasksStatus === 'project') {
    tasksStatus = '';
    event.target.classList.remove('selected');
    divExercicios.classList.remove('selected');
  } else {
    tasksStatus = 'project';
    event.target.classList.add('selected');
  }
}
function selectTaskExercicio(event) {
  if (tasksStatus === 'exercise') {
    tasksStatus = '';
    event.target.classList.remove('selected');
    divProjeto.classList.remove('selected');
  } else {
    tasksStatus = 'exercise';
    event.target.classList.add('selected');
  }
}

for (let i = 0; i < daysListElemnt.length; i += 1) {
  let element = daysListElemnt[i];
  element.addEventListener('click', dayClick);
}

function dayClick(event) {
  if (tasksStatus === 'project') {
    assignProject(event.target);
  } else if ( tasksStatus === 'exercise') {
    assignExercise(event.target);
  }
}

function assignProject(element) {
  if (projectDaysElements.includes(element)) {
    projectDaysElements = projectDaysElements.filter(item => item !== element);
  } else {
    if (exerciseDaysElements.includes(element)) {
      exerciseDaysElements = exerciseDaysElements.filter(item => item !== element);
    }
    projectDaysElements.push(element);
    }
  colored();
}

function assignExercise(element) {
  if (exerciseDaysElements.includes(element)) {
    exerciseDaysElements = exerciseDaysElements.filter(item => item !== element);
  } else {
    if (projectDaysElements.includes(element)) {
      projectDaysElements = projectDaysElements.filter(item => item !== element);
    }
    exerciseDaysElements.push(element);
    }
  colored();
}

function colored() {  
  for (let i = 0; i < daysListElemnt.length; i += 1) {
    let element = daysListElemnt[i];
    if (projectDaysElements.includes(element)) {
      element.style.color = 'rgb(0, 128, 0)';
    }
    else if (exerciseDaysElements.includes(element)) {
      element.style.color = 'rgb(255, 0, 0)';
    } else {
      element.style.color = 'rgb(119,119,119)';
    }
  }   
}

//Exercício 6 – Adicionando compromissos a seu calendário
const btnAdd = document.getElementById('btn-add');
btnAdd.addEventListener('click', createEvent);

document.addEventListener('keydown', function(event) {
  if (event.key === 'Enter' && event.target.id === 'task-input') {
    event.preventDefault(); // Evita o comportamento padrão do Enter em um campo de input dentro de um formulário
    createEvent();
  }
});

function createEvent() {
  const eventInput = document.getElementById('task-input');
  const taskList = document.getElementById('task-list');
  const element = document.createElement('li');
  if (eventInput.value.trim()!== '') {
    element.innerText = eventInput.value;
    taskList.appendChild(element);
    eventInput.value = '';
  } else {
    alert('Por favor, insira uma tarefa.');
  }
}
