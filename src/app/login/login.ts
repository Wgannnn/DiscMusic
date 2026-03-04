import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // tutaj tymczasowo akceptujemy każde dane
    this.authService.login(); // ustawia loggedIn na true
    console.log('User logged in');

    // po zalogowaniu od razu przechodzimy do playlists lub home
    this.router.navigate(['/home']);
  }
}
