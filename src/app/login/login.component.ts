// import { Component, OnInit } from '@angular/core';
// import {FormControl, Validators, FormsModule,FormGroupDirective,
//   ReactiveFormsModule,NgForm, FormGroup} from '@angular/forms';
// import {NgIf} from '@angular/common';
// import {Router} from '@angular/router';
// import {MatDialog} from '@angular/material/dialog';
// import {ErrorStateMatcher} from '@angular/material/core';
// import { FormBuilder } from '@angular/forms';
// import { MatGridListModule } from '@angular/material/grid-list';
// import { ActivatedRoute } from '@angular/router';

// @Component({
//   selector:'app-login',
//   templateUrl: 'login.component.html',
//   styleUrls: ['login.component.css']
// })
// export class LoginComponent  {
//     form: FormGroup;

//     constructor(private fb: FormBuilder , private router: Router
//       ) {
        
//       this.form = this.fb.group({
//         email: ['', [Validators.required, Validators.email]],
//         password: ['', Validators.required],
      
       
//       });
//     }
//     // Helper function to check for specific errors
//     hasError(controlName: string, errorName: string): boolean {
//       return this.form.get(controlName)?.hasError(errorName);
//       this.form.reset();
//     }
//     onSubmit() {
//       if (this.form.valid) {
//         console.log('Form submitted successfully!');
//         // Add your form submission logic here
//         this.router.navigate(['/shops']);
//         this.form.reset();
//         this.form.reset();

//       } else {
//         console.log('Form is invalid!');
//       }
//     }
//     onSignUp() {
//         console.log('Sign Up button clicked');
//         this.router.navigate(['/user']);
//       }
//     }
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {
  form: FormGroup;
  showEmptyFieldError = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Helper function to check for specific errors
  hasError(controlName: string, errorName: string): boolean {
    return this.form.get(controlName)?.hasError(errorName);
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form submitted successfully!');
      this.router.navigate(['/shops']);
      this.form.reset();
    } else {
      // Check if both email and password are empty
      if (!this.form.get('email').value && !this.form.get('password').value) {
        console.log('Please enter the email and password.');
      } else {
        console.log('Form is invalid!');
      }
    }
  }

  onSignUp() {
    console.log('Sign Up button clicked');
    this.router.navigate(['/user']);
  }
}

  