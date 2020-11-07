import { Component, OnInit } from '@angular/core';
import { JsonService } from '../json.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users : any = [];
  constructor(private jsonservice: JsonService) { }

  ngOnInit(): void {
    this.jsonservice.getUsers().subscribe((response) => {
      this.users = response;
    })
  }

}
