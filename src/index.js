import './styles.css';

import { ToDo, TaskList } from './classes';
import { createToDoHtml } from './js/componentes';


export const taskList = new TaskList();

taskList.tasks.forEach( createToDoHtml ); //En versión completa sería: taskList.tasks.forEach( task => createToDoHtml( task ) ); --> Se pueden ambas formas
                                            //Pero cuando el argumento del forEach coincide con el argumento que se le envia a la función no hace falta especificarlo