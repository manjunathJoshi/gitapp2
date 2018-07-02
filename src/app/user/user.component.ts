import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GitAppService } from '../../providers/services/gitapp.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public userDetails : Object = {};
  public length :any;
  public currentUser:any;
  public followerscount;
  public subscriptionscount;
  public reposcount;
  public repodetails: Array<Object> = [];
  public orgscount;

  constructor(public GitAppService: GitAppService, public formBuilder: FormBuilder,public router:Router) { }

  ngOnInit() {
    this.getUserDetail();
    this.getfollwers();
    this.getsubscriptions();
    this.getrepos();
    this.getorgs();
  }

  getUserDetail(){
    let userlogin = this.GitAppService.getUser() || {};
    this.userDetails = this.GitAppService.getUserDetails() || {};
    let userDetails = this.userDetails || {};
    for(var key in this.userDetails){
      if(userDetails.hasOwnProperty(key)){
        var val = userDetails[key];
        if(val.login === userlogin){
          this.currentUser = val;
        }
      }
    }
  }

  backtohome(){
    this.router.navigate(['home']);

  }
  backtolist(){
    this.router.navigate(['users']);

  }

  // Seperate get data function because assynchronous behavious of http request.Data arrives paralelly.So no common function created.
// To get followers data
  getfollwers(){
    let url = this.currentUser.followers_url || '';
    this.GitAppService.makeRequestwithurl(url)
    .subscribe(
      data => {
        if (data) {
         console.log(data.length);
         this.followerscount = data.length;
        } else {
          alert("No data received");
        }
      },
      error => {
        alert("No data received");
      }
    );
  }
  // To get subsciption  data
  getsubscriptions(){
    let url = this.currentUser.subscriptions_url || '';
    this.GitAppService.makeRequestwithurl(url)
    .subscribe(
      data => {
        if (data) {
          this.subscriptionscount = data.length;
          if(data.length === 0){this.subscriptionscount = 0}
           
        } else {
          alert("No data received");
        }
      },
      error => {
        alert("No data received");
      }
    );
  }

  // To get repository data
  getrepos(){
    let url = this.currentUser.repos_url || '';
    this.GitAppService.makeRequestwithurl(url)
    .subscribe(
      data => {
        if (data) {
          this.repodetails = data || [];
          this.reposcount = data.length;
          if(data.length === 0){this.reposcount = 0}
        } else {
          alert("No data received");
        }
      },
      error => {
        alert("No data received");
      }
    );
  }

    // To get subsciption  data
    getorgs(){
      let url = this.currentUser.organizations_url || '';
      this.GitAppService.makeRequestwithurl(url)
      .subscribe(
        data => {
          if (data) {
            this.orgscount = data.length;
            if(data.length === 0){this.orgscount = 0}
             
          } else {
            alert("No data received");
          }
        },
        error => {
          alert("No data received");
        }
      );
    }

}
