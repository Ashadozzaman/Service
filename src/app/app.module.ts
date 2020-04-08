import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
// import { AccountComponent } from './account/account.component';
// import { NewAccountComponent } from './new-account/new-account.component';
// import { AccountsService } from './accounts.service';
// import { LoggingService } from './logging.service';
// import { InactiveUsersComponent } from './inactive-users/inactive-users.component';
// import { ActiveUsersComponent } from './active-users/active-users.component';
// import { CounterService } from './counter.service';




// observable start here
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    // AccountComponent,
    // NewAccountComponent,
    // InactiveUsersComponent,
    // ActiveUsersComponent,
    HomeComponent,
    UserComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    // AccountsService, LoggingService, CounterService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
