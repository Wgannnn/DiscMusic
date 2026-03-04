import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Playlists } from './playlists/playlists';
import { Login } from './login/login';
import { AuthGuard } from './auth.guard'; // <-- importujemy guard
import { Profile } from './profile/profile';
import { Settings } from './settings/settings';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'playlists', component: Playlists, canActivate: [AuthGuard] }, // <-- dodajemy guard
    { path: 'login', component: Login },
    { path: 'profile', component: Profile, canActivate: [AuthGuard] },
    { path: 'settings', component: Settings, canActivate: [AuthGuard] },
    { path: '**', redirectTo: '' }
];