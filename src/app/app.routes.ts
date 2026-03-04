import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Playlists } from './playlists/playlists';
import { Login } from './login/login';
import { AuthGuard } from './auth.guard'; // <-- importujemy guard

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'playlists', component: Playlists, canActivate: [AuthGuard] }, // <-- dodajemy guard
    { path: 'login', component: Login },
    { path: '**', redirectTo: '' }
];