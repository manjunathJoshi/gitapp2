import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule, RequestOptions, XHRBackend} from '@angular/http';
import {HttpClientModule} from '@angular/common/http' 

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import {GitAppService} from '../providers/services/gitapp.service';
import { KeyValuesPipe } from './keyvalues.pipe';
import { UsersComponent } from './users/users.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    KeyValuesPipe,
    UsersComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule
    ],

  providers: [GitAppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
