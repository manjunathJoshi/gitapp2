import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GitAppService } from '../../providers/services/gitapp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  getUser: FormGroup;
  public uname :string = '';
 public userDetails :Object;
  constructor(public GitAppService: GitAppService, public formBuilder: FormBuilder,public router:Router) {
    this.getUser = formBuilder.group({
      'UNAME': [null, Validators.required]
    });
  }

  ngOnInit() {
  }

  onGo(){
    this.uname = this.getUser.controls['UNAME'].value;
    this.getdetails();
  }

  getdetails() {
    this.GitAppService.makeRequest(this.uname)
      .subscribe(
        data => {
          if (data) {
            if(data.items.length === 0){
              alert("No user found, Please try again");
             }
             else{
            this.GitAppService.setDetails(data.items);
            this.router.navigate(['users']);
             }
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
