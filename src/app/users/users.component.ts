import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { GitAppService } from '../../providers/services/gitapp.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public userDetails : Object = {};
  public length :any;

  constructor(public GitAppService: GitAppService, public formBuilder: FormBuilder,public router:Router) { }

  ngOnInit() {
    this.userDetails = this.GitAppService.getUserDetails();
    this.length =  Object.keys(this.userDetails).length;
  }
  backtosearch(){
    this.router.navigate(['home']);
  }

  gotoUser(Uname){
    this.GitAppService.setUser(Uname);
    this.router.navigate(['user']);
  }

}
