import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  error: string | null;
  registerForm: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder, private fireAuth: AuthService) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      username: [
        '',
        Validators.compose([
          Validators.required,
          Validators.minLength(4),
          Validators.email,
        ]),
      ],
      password: ['', Validators.required],
    });
  }
  submit() {
    if (this.registerForm.valid) {
      this.fireAuth
        .registerUser(
          this.registerFormControls.username.value,
          this.registerFormControls.password.value
        )
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          console.log(error, 'errrrr');
          this.error = 'Invalid username or password';
        });
    }
  }

  get registerFormControls() {
    return this.registerForm.controls;
  }
}
