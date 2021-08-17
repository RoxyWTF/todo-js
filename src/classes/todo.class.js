export class ToDo{

    static fromJSON({ id, task, completed, created }){

        const tempToDo = new ToDo( task );

        tempToDo.id         = id;
        tempToDo.created    = created;
        tempToDo.completed  = completed;

        return tempToDo;
    }

    constructor ( task ) {
        this.task       = task;
        this.id         = new Date().getTime();
        this.completed  = false;
        this.created    = new Date();     
    }
}