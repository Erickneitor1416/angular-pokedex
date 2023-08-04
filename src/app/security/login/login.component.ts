import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: string | null;
  loginForm: FormGroup;
  hide = true;
  constructor(private fb: FormBuilder, private fireAuth: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
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
    if (this.loginForm.valid) {
      this.fireAuth
        .loginWithEmailAndPassword(
          this.loginFormControls.username.value,
          this.loginFormControls.password.value
        )
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          console.log(error, 'errrrr');
          this.error = 'Invalid username or password';
        });
    } else {
    }
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }
}
