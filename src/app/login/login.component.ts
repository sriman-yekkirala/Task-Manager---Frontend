import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  onSubmit() {
      const loginPayload = {
      email: this.email,
      password: this.password 
    };
    console.log('Sending login payload:', loginPayload);

    this.http.post<{ token: string }>('https://localhost:7075/api/users/login', loginPayload)
      .subscribe({
        next: (response) => {
          alert('🎉 Login successful!');
          console.log('Login Success:', response);

          localStorage.setItem('token', response.token);

          this.router.navigate(['/tasks']);
        },
        error: (error) => {
          alert('❌ Login failed: ' + error.error);
          console.error('Login Error:', error);
        }
      });
  }
  showPassword: boolean = false;
  constructor(private http: HttpClient, private router: Router) {}

    togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

    onRegister() {
    const registerPayload = {
      name: this.name,
      email: this.email,
      password: this.password
    };

    console.log('Sending register payload:', registerPayload);

    this.http.post('https://localhost:7075/api/users/register', registerPayload)
      .subscribe({
        next: (response) => {
          alert('🎉 User registered successfully!');
          console.log('Register Success:', response);
        },
        error: (error) => {
          alert('❌ Registration failed: ' + error.error);
          console.error('Register Error:', error);
        }
      });
  }
}
