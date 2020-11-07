import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todos: any = [];
  constructor(private jsonservice: JsonService) { }

  ngOnInit(): void {
    this.jsonservice.getTodos().subscribe((response) => {
      this.todos = response;
    });
  }

}
