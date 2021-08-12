const tasksContainer = document.querySelector('.content__tasksContainer')
const addTaskBtn = document.querySelector('.content__addTaskButton')
const taskInput = document.querySelector('.content__input')

class Task{
    constructor(taskValue){
        this.taskValue = taskValue
        this.disableTask = ()=>{
            this.taskValue.classList.toggle('content_task-disable')
        }
    }
}

const addTask = ()=>{
    if(taskInput.value != ''){
        let taskWrapper = document.createElement('div')
        let taskText = document.createElement('p')
        let taskCheckbox = document.createElement('input')
        let task = new Task(taskText)
    
        taskWrapper.classList.add('content__taskWrapper')
        taskText.classList.add('content__task')
        taskCheckbox.type = 'checkbox'
        taskText.innerHTML = taskInput.value
        taskWrapper.appendChild(taskCheckbox)
        taskWrapper.appendChild(taskText)
        tasksContainer.appendChild(taskWrapper)
        taskCheckbox.onchange = task.disableTask
        taskInput.value = ''        
    }
    else{
        alert('Pole is emtpy')
    }
}

addTaskBtn.addEventListener('click', addTask)
