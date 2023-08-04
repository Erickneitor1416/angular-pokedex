import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SignUpComponent } from './sign-up/sign-up.component';
import { VerifyUserComponent } from './verify-user/verify-user.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, VerifyUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    AngularFireAuthModule,
    MatIconModule,
    RouterModule.forChild([
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'sign-up',
        component: SignUpComponent,
      },
      {
        path: 'verify-user',
        component: VerifyUserComponent,
      },
    ]),
  ],
})
export class SecurityModule {}
