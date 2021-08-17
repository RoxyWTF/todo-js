import { ToDo } from "../classes";
import { taskList } from "../index";

//Referencias en el HTML
const divToDoList  = document.querySelector('.todo-list');
const txtInput     = document.querySelector('.new-todo'); 
const btnDelete    = document.querySelector('.clear-completed'); 
const ulFilters    = document.querySelector('.filters');
const anchorFilters = document.querySelectorAll('.filtro');

export const createToDoHtml = (toDo) => {
    
    const htmlToDo = `
    <li class="${ ( toDo.completed ) ? 'completed' : '' }" data-id="${ toDo.id }">
    <div class="view">
        <input class="toggle" type="checkbox" ${ ( toDo.completed ) ? 'checked' : '' }>
        <label>${ toDo.task }</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">
</li> `

const div = document.createElement('div');
div.innerHTML = htmlToDo;

divToDoList.append( div.firstElementChild );

return div.firstElementChild;


}

//Eventos
txtInput.addEventListener('keyup', ( event )  => {
    if ( event.keyCode === 13 && txtInput.value.length > 0 ){
        
        const newToDo = new ToDo( txtInput.value );
        taskList.newTask( newToDo );

        createToDoHtml( newToDo );
        txtInput.value = '';
    }
    
    
});

divToDoList.addEventListener('click', ( event )  => {

    const elementName = event.target.localName; //un input, un label o un button
    const toDoElement = event.target.parentElement.parentElement;
    const toDoId      = toDoElement.getAttribute('data-id');

    if( elementName.includes('input') ){ //click en el check
        taskList.setCompleted( toDoId );
        toDoElement.classList.toggle('completed');
    } else if  ( elementName.includes('button') ) {
        taskList.removeCompleted( toDoId );
        divToDoList.removeChild( toDoElement );
    } 
        
    
});

btnDelete.addEventListener('click', ()  => {
    taskList.deleteCompleted();

    for( let i = divToDoList.children.length-1; i >= 0; i-- ){
        const element = divToDoList.children[i];

        if (element.classList.contains('completed') ){
            divToDoList.removeChild(element);
        }
    }
});

ulFilters.addEventListener('click', ( event ) => {

    const filter = event.target.text;

    if (!filter) { return; } 

    anchorFilters.forEach( elem => elem.classList.remove('selected'));
    event.target.classList.add('selected');

    for ( const element of divToDoList.children ) {
        element.classList.remove('hidden');
        const completed = element.classList.contains('completed');

        switch ( filter ) {
            case 'Pendientes':
                if ( completed ) { element.classList.add('hidden'); }
                break;
            
            case 'Completados':
                if ( !completed ) { element.classList.add('hidden'); }
                break;
        }
        
    }
});