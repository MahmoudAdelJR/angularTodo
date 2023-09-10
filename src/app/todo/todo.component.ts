import { Component, OnInit } from '@angular/core';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: [
  ]
})
export class TodoComponent implements OnInit{
  /**
   *
   */
  todos:any[] = [];
  constructor(private todoService:TodoService) {

  }
  ngOnInit(): void {
    this.todoService.Todos.valueChanges({idField:'id'})
    .subscribe(item=>{
      this.todos = item.sort((a:any, b:any)=>a.isDone-b.isDone);
    })
  }
add(title:HTMLInputElement){
  if(title.value)
  {
    this.todoService.addTodo(title.value);
    title.value = "";
  }
}
changeStatus(id:string, status:boolean){
  this.todoService.changeStatus(id, status);
}
delete(id:string){
  this.todoService.deleteTodo(id);
}
}
