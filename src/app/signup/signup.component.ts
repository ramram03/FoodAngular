// // signup.component.ts

// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatSnackBar } from '@angular/material/snack-bar';
// import {MatSelectModule} from '@angular/material/select'

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {
//   registrationForm: FormGroup;

//   constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
//     this.registrationForm = this.fb.group({
//       shopId: ['', Validators.required],
//       name: ['', Validators.required],
//       contactNumber: ['', Validators.compose([Validators.required, Validators.pattern('[0-9]{10}')])],
//       email: ['', Validators.compose([Validators.required, Validators.email])],
//       gender: ['', Validators.required],
//       shopName: ['', Validators.required],
//       password: ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{6,}$')])],
//       confirmPassword: ['', Validators.required],
//       vegNonveg: ['', Validators.required],
//       halal: [false],
//       likes: ['']
//     }, {
//       validator: this.passwordMatchValidator
//     });
//   }

//   passwordMatchValidator(group: FormGroup) {
//     const password = group.get('password').value;
//     const confirmPassword = group.get('confirmPassword').value;

//     if (password === confirmPassword) {
//       return null;
//     } else {
//       group.get('confirmPassword').setErrors({ passwordMismatch: true });
//     }
//   }

//   onSubmit() {
//     if (this.registrationForm.valid) {
//       // Handle form submission and display success message
//       this.snackBar.open('Registration successful!', 'Close', {
//         duration: 3000,
//         horizontalPosition: 'center',
//         verticalPosition: 'top',
//       });
//     } else {
//       // Display an error message for invalid form
//       this.snackBar.open('Please fix the errors in the form.', 'Close', {
//         duration: 5000,
//         horizontalPosition: 'center',
//         verticalPosition: 'top',
//       });
//     }
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registrationForm: FormGroup;

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      contactNumber: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern('[0-9]{10}'), // Validates a 10-digit number
        ])
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.email, // Validates the email format
        ])
      ],
      password: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(6), // Password must be at least 6 characters long
          Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!%*#?&]{6,}$'), // Password pattern
        ])
      ],
      confirmPassword: [
        '',
        Validators.compose([
          Validators.required,
        ])
      ],
      gender: ['', Validators.required],
      vegNonveg: ['', Validators.required],
      // ... other fields
    }, {
      validator: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(group: FormGroup) {
    const password = group.get('password').value;
    const confirmPassword = group.get('confirmPassword').value;

    if (password === confirmPassword) {
      return null;
    } else {
      group.get('confirmPassword').setErrors({ passwordMismatch: true });
    }
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      // Handle form submission and display success message
      this.snackBar.open('Registration successful!', 'Close', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    } else {
      // Display an error message for invalid form
      this.snackBar.open('Please fix the errors in the form.', 'Close', {
        duration: 5000,
        horizontalPosition: 'center',
        verticalPosition: 'top',
      });
    }
  }
}


