const tasksContainer = document.querySelector('.content__tasksContainer')
const addTaskBtn = document.querySelector('.content__addTaskButton')
const taskInput = document.querySelector('.content__input')

class Task{
    constructor(taskValue, tasksContainer){
        this.taskValue = taskValue
        this.tasksContainer = tasksContainer
        this.disableTask = ()=>{
            this.taskValue.classList.toggle('content_task-disable')
        }
        this.removeTask = ()=>{
            this.tasksContainer.remove()
        }
    }
}

const addTask = ()=>{
    if(taskInput.value != ''){
        let taskWrapper = document.createElement('div')
        let taskMain = document.createElement('div')
        let taskText = document.createElement('p')
        let taskCheckbox = document.createElement('input')
        let removeTask = document.createElement('button')
        let task = new Task(taskText, taskWrapper)
        
        taskMain.classList.add('content__taskMain')
        removeTask.classList.add('btn')
        removeTask.classList.add('btn-primary')
        taskWrapper.classList.add('content__taskWrapper')
        taskText.classList.add('content__task')
        taskCheckbox.type = 'checkbox'
        taskText.innerHTML = taskInput.value
        removeTask.innerHTML = 'Remove task'
        taskMain.appendChild(taskCheckbox)
        taskMain.appendChild(taskText)
        taskWrapper.appendChild(taskMain)
        taskWrapper.appendChild(removeTask)
        tasksContainer.appendChild(taskWrapper)
        taskCheckbox.onchange = task.disableTask
        removeTask.onclick = task.removeTask
        taskInput.value = ''        
    }
    else{
        alert('Pole is emtpy')
    }
}

addTaskBtn.addEventListener('click', addTask)
