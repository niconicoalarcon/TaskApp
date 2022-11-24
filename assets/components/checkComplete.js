const checkComplete = ()=>{
    const i = document.createElement('i');
    i.classList.add('far');
    i.classList.add('fa-check-square');
    i.classList.add('icon');
    i.addEventListener('click',completeTask);
    return i;

}

const completeTask = (evento)=>{
    const event = evento.target
    event.classList.toggle('fas')
    event.classList.toggle('completeIcon')
    event.classList.toggle('far')
}

export default checkComplete;