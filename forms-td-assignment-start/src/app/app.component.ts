import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') signupForm:NgForm;

  submitted = false;

  formData = {
    email:'',
    sub:'',
    password:''
  };

  onSubmit(){
    this.submitted = true;
    console.log(this.signupForm);
    this.formData.email = this.signupForm.value.email;
    this.formData.sub = this.signupForm.value.sub;
    this.formData.password = this.signupForm.value.password;
    this.signupForm.reset();
  }

}
