import { ToDo } from "./todo.class";

export class TaskList {

    constructor (){
       // this.tasks = [];
       this.loadLocalStorage();
    }

    newTask ( task ){
        this.tasks.push( task );
        this.saveLocalStorage();
    }

    removeTask ( id ){
        this.tasks = this.tasks.filter( task => task.id != id );
        this.saveLocalStorage();

    }

    setCompleted( id ){
        for (const task of this.tasks ){
            if (task.id == id ){
                task.completed = !task.completed;
                this.saveLocalStorage();
                break;
            }
        }
    }

    deleteCompleted(){
        this.tasks = this.tasks.filter( task => !task.completed );
        this.saveLocalStorage();
    }

    saveLocalStorage(){
        localStorage.setItem('task', JSON.stringify(this.tasks));
    }

    loadLocalStorage(){
        //ternary IF, si existe la lista en el localStorage la obtengo, 

        this.tasks = (localStorage.getItem('task')) 
                    ? JSON.parse( localStorage.getItem('task') ) 
                    : [];

        this.tasks = this.tasks.map( ToDo.fromJSON );
    }
    
}