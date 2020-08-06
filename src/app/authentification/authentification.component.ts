import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder ,Validators } from '@angular/forms'

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {

  loginForm: FormGroup;
  submitted=false;
  username:String='';
  password:String='';
  role:String='';

constructor(private formBuilder:FormBuilder) { }
ngOnInit() {
    this.loginForm=this.formBuilder.group({
      username:['',Validators.required],
      password:['',Validators.required],
      role:['',Validators.required],
       })
       }
  get f(){
    return this.loginForm.controls;
}
  onSubmit(){
    this.submitted=true;
 if(this.loginForm.invalid){
      return;

}

   this.username=this.f.username.value;
   this.password=this.f.password.value;
   const user={

    "username":this.username,
    "password":this.password,

   }
  }
}
