import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSnackBarConfig } from '@angular/material/snack-bar';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
function emailDomainValidator(control: AbstractControl): { [key: string]: any } | null {
  const email: string = control.value;
  const validEmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/i.test(email);
  
  if (!email || validEmailPattern) {
    return null; // Valid email format or empty, no error
  } else {
    return { 'invalidEmail': true }; // Invalid email format
  }
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  loginForm: FormGroup;
  passwordForm: FormGroup;
  usernameForm: FormGroup;
  confirmPasswordForm: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {
    this.usernameForm = this.fb.group({
      username: ['', Validators.required]
    });
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });

    this.passwordForm = this.fb.group({
      password: ['', Validators.required]
    });
    this.confirmPasswordForm = this.fb.group({
      confirmPassword: ['', Validators.required]
    }, { validator: this.passwordMatchValidator }); // Add the custom validator
  }

  


  ngOnInit() {
  }
  goBack() {
    console.log("back to login");
    this.router.navigate(['login']); // Use Location service to navigate back to the previous page
  }
   passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
    } else {
      formGroup.get('confirmPassword')?.setErrors(null);
    }
  }
}


  // form: FormGroup;
  // showSuccessMessage: boolean = false;
  // showErrorMsg: boolean = false;
  // constructor(private fb: FormBuilder, private router: Router, ) {
  //   this.form = this.fb.group({
  //     username: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     password: ['', Validators.required],
  //     confirmPassword: ['', Validators.required],
  //   });
  // }
  //   }, { validators: this.passwordMatchValidator });
  // }
  
//   hasError(controlName: string, errorName: string): boolean {
//     return this.form.get(controlName)?.hasError(errorName);
//   }

//   passwordMatchValidator(form: FormGroup) {
//     const password = form.get('password')?.value;
//     const confirmPassword = form.get('confirmPassword')?.value;

//     if (password !== confirmPassword) {
//       form.get('confirmPassword')?.setErrors({ passwordMismatch: true });
//     } else {
//       form.get('confirmPassword')?.setErrors(null);
//     }

//     return null;
//   }

//   onSubmit() {
//     if (this.form.valid) {
//       this.showSuccessMessage = true;
      
//       // this.showSnackBar('Registered successfully!');
//       // console.log('Registration form submitted successfully!');
//       // Add your user registration logic here

//       // Clear the form after successful registration
//       this.form.reset();
//       this.showErrorMsg = false;
//     } else {
//       console.log('Registration form is invalid!');
//       this.showErrorMsg = true;
//     }
//   }

// }


// // private showSnackBar(result: string) {
// //   this.snackBar.open(result, 'Close', {
// //     duration: 3000, // Snackbar duration in milliseconds
// //   });
// // }




