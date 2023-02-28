import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todos: any[] = [];
  todo: any;

  constructor(
    private _http: HttpClient
  ){
    
  }


  getAll(){
    this._http.get<any>("https://jsonplaceholder.typicode.com/todos").subscribe(res=>{
      this.todos = res;
    })
  }

  getBy(){
    this._http.get<any>("https://jsonplaceholder.typicode.com/todos/1").subscribe(res=>{
      this.todo = res;
    })
  }
}
