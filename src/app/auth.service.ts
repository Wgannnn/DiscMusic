import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // inicjalizujemy stan logowania z localStorage
  loggedIn = signal(localStorage.getItem('loggedIn') === 'true');

  login() {
    this.loggedIn.set(true);
    localStorage.setItem('loggedIn', 'true'); // zapamiętaj na przyszłość
  }

  logout() {
    this.loggedIn.set(false);
    localStorage.removeItem('loggedIn'); // usuń po wylogowaniu
  }

  isLoggedIn(): boolean {
    return this.loggedIn();
  }
}