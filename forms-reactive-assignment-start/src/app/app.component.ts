import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  ngOnInit(){
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName]),
      'email': new FormControl(null, [Validators.email]),
      'status': new FormControl('stable', [Validators.required])
    });

  }

  // forbiddenName(control:FormControl): {[s:string]:boolean}{
  //   if(control.value === 'Test'){
  //     return {'nameIsForbidden':true};
  //   }
  //   return null;
  // }

  forbiddenName(control:FormControl): Promise<any> | Observable<any>{
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(()=>{
        if(control.value==='Test'){
          resolve({'nameIsForbidden':true})
        } else{
          resolve(null);
        }
      }, 1500)
    });
    return promise;
  }

  onSubmit(){
    console.log(this.signupForm.value);
  }
}
