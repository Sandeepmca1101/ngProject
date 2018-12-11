import { TodoDataService } from './../service/data/todo-data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


export class Todo{
  constructor(
    public id:number,
    public description:string,
    public done:boolean,
    public targetDate :Date
  ){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {
  ///*todos=[
  //  new Todo(1,'Learn to dance',false,new Date()),
  //  new Todo(2,'Angular Expert',false,new Date()),
  //  new Todo(3,'Devloper',false,new Date()),
  //  ]* vid 58*/
    todos:Todo[]
    message:String

  constructor(private todoService:TodoDataService ,private router:Router) { }

  ngOnInit() {
    this.refreshTodo();
  }
  refreshTodo(){
    //logoc from ngOnInit moved here to refresh the list after modifications
    this.todoService.getAllTodos('sandeep').subscribe(
        response=>{
        console.log("RESPONSE===>"+response);
        this.todos=response;
      }
    )
  }
  updateTodo(id){
    console.log(`Update Button Id=${id}`);
    this.router.navigate(['todos',id]);
  }
  deleteTodo(id){
    console.log(`DELETE TODO ${id}`);
    this.todoService.deleteTodo("Sandeep",id).subscribe(
      response=>{
        console.log(response);
        this.message=`${id} TODO Delete Successfully`;
        this.refreshTodo();
      }
    )
  }
  addTodo(){
    console.log(`ADD Button Id=`);
    this.router.navigate(['todos',-1]);

   // this.todoService.addTodo("Sandeep");
  }

}
