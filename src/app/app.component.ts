import { Component } from '@angular/core';
import { FormBuilder,FormGroup,FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

constructor(public router:Router){
}

ngOnInit(){

  this.router.navigate(['home']);
}

}

