import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore"
@Injectable({
  providedIn: 'root'
})
export class TodoService {
  Todos:AngularFirestoreCollection;
  constructor(private fireStore:AngularFirestore) {
    this.Todos = fireStore.collection('todos');
   }
   addTodo(title:string){
    this.Todos.add({
      title,
      isDone:false
    });
   }

   changeStatus(id:string, status:boolean){
    this.Todos.doc(id).update({isDone:status});
   }
   deleteTodo(id:string){
    this.Todos.doc(id).delete();
   }
}
