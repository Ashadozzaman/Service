import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';

// import { AccountsService } from './accounts.service';
// import { UserService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [UserService]
})
export class AppComponent implements OnInit, OnDestroy {
  accounts: {name: string, status: string}[] = [];
  userActivated = false;
  private activatedSub : Subscription;
  constructor(
    // private accountsService: AccountsService //active-in user project
    private userService : UserService
    ) {}

  ngOnInit() {
    // this.accounts = this.accountsService.accounts; //active-in user project
    this.userService.activatedEmitter.subscribe( didActivate => {
      this.userActivated = didActivate;
    });
  }
  ngOnDestroy(){
    this.activatedSub.unsubscribe();
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
