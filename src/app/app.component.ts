import { Component, OnInit } from '@angular/core';

import { AccountsService } from './accounts.service';
import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountsService: AccountsService) {}

  ngOnInit() {
    this.accounts = this.accountsService.accounts;
  }


  // assignment sample solution
  // activeUsers =['kamal', 'Rahim'];
  // inactiveUsers = ['Karim', 'Rhaman'];

  // onSetToInactive(id: number){
  //   this.inactiveUsers.push(this.activeUsers[id]);
  //   this.activeUsers.splice(id, 1);
  // }
  // onSetToActive(id: number){
  //   this.activeUsers.push(this.inactiveUsers[id]);
  //   this.inactiveUsers.splice(id, 1);
  // }

}
