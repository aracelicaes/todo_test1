// GLOBAL VARIABLES

const projects = [];
let counter = 0;
const tasks = [];
window.projects = projects;
window.tasks = tasks;

//LOCALSTORAGE

const settingLocalStorage = () => {
  localStorage.setItem('projectsList', JSON.stringify(projects));
  localStorage.setItem('tasksList', JSON.stringify(tasks));
};

const gettingLocalStorage = () => {
  const projectList = JSON.parse(window.localStorage.getItem('projectsList'));
  const taskList = JSON.parse(window.localStorage.getItem('tasksList'));
  if (projectList || projectList == null) {
    projectList.forEach(e => {
      projects.push(e);
    });
    const last = projects.length - 1;
    counter = projects[last].id + 1;
  }

  if (taskList || taskList == null) {
    taskList.forEach(e => {
      tasks.push(e);
    })
  }
};


// PROJECT CLASS

class Project {
  constructor(name){
    this.name = name;
    this.id = counter;
    this.task = [];
    counter += 1;
  }

  // addTasks(){
  //   tasks.push(this.task);
  //   settingLocalStorage();
  // }
}

// const project1 = new Project('Bake Leo\'s cake');
// projects.push(project1);
// console.log(project1);


function createProject() {
  const theName= document.getElementById("projectName").value;
  const newProject = new Project(theName);
  console.log(newProject);
  projects.push(newProject);
  settingLocalStorage();
  return newProject;
}

function displayProject(project) {
  const theProject = document.querySelector(".projectName");
  theProject.innerText = project.name;
  theProject.setAttribute("id", project.id);
  console.log(theProject.id);
  console.log(projects);
  projects.forEach((project) => {
    if (project.id == theProject.id) {
      const projectDisplayContainer = document.querySelector(".projectDisplay");
      const newTaskBtn = document.createElement('button');
      newTaskBtn.setAttribute('id', project.id);
      newTaskBtn.className = 'newTask';
      newTaskBtn.innerText = 'New Task'
      projectDisplayContainer.appendChild(newTaskBtn);
    }
  })
}

function addTaskBtn(project) {
  displayProject(project)
}

const projectSubmitEvent = () => {
  const projectSubmit = document.getElementById("projectBtn");
  projectSubmit.addEventListener('click', (e) => {
    e.preventDefault;
    // createProject();
    const project = createProject();
    displayProject(project);
  });
};

projectSubmitEvent();

//TASK CLASS

class Task {
  constructor(status, name, description, dueDate, prioirty) {
    this.status = status;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.prioirty = prioirty;
    this.project = project;
  }
}

// const newTask = new Task('Hello', 'Testing Tasks Test');
// project1.task.push(newTask);
// // project1.addTask(newTask);
// console.log(newTask);

// function findProject(project) {
//   if projects[]
// }

const newTaskBtnEvent = () => {
  projects.forEach((project) => {
    const newTaskBtn = document.getElementById(project.id);
    if (project.id == newTaskBtn.id) {
    console.log(newTaskBtn);
    newTaskBtn.addEventListener('click', (e) => {
      displayTaskForm(project.id);
    });
    }
  });
}

function displayTaskForm(id) {
  const taskForm = document.querySelector(".theTaskForm");
  const taskName = document.querySelector(".taskName");
  taskName.setAttribute('id', id);
  taskForm.classList.toggle("hidden");
  console.log(taskForm);
}

newTaskBtnEvent();

function createTask() {
  const taskStatus = document.querySelector(".taskStatus").checked;
  const taskName = document.querySelector(".taskName").value;
  taskName.getAttribute("id");
  console.log(taskName);
  const taskDescription = document.querySelector(".taskDescription").value;
  const taskDate = document.querySelector(".taskDate").value;
  const taskPriority = document.querySelector(".taskPriority").selectedOptions[0].value;
  
  const newTask = new Task(taskStatus, taskName, taskDescription, taskDate, taskPriority);
  tasks.push(newTask);
  settingLocalStorage();
  console.log(newTask);
}

const taskSubmitEvent = () => {
  const taskSubmit = document.getElementById("taskBtn");
  taskSubmit.addEventListener('click', (e) => {
    e.preventDefault;
    createTask();
  });
};

taskSubmitEvent();

window.addEventListener('DOMContentLoaded', () => {
  gettingLocalStorage();
});