import checkComplete from "./components/checkComplete.js";
import deletBtn from "./components/deleteIcons.js";



const btnSubmit = document.querySelector('[data-btn-form]');
console.log(btnSubmit);

const inputTask = (evento)=>{
    evento.preventDefault();
    const inputTarea = document.querySelector('[data-input-form]');
    const tarea = inputTarea.value;
    const list = document.querySelector('[data-list]');
    const task = document.createElement('li');
    task.classList.add('card');
    inputTarea.value = '';

    const taskContent = document.createElement('div');
    taskContent.appendChild(checkComplete());
    
    const taskTitle = document.createElement('span');
    taskTitle.classList.add('task');
    taskTitle.innerText = tarea;
    taskContent.appendChild(taskTitle);
    

    
    // agrega el contenido al li
    //task.innerHTML = content;
    
    task.appendChild(taskContent);
    task.appendChild(deletBtn());
    //agrega la tarea a la lista
    list.appendChild(task);
    
}

btnSubmit.addEventListener('click',inputTask );
