import { Routes } from '@angular/router';

export const routes: Routes = [
    { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
    { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)},
    { path: '', redirectTo: 'auth/login', pathMatch: 'full'},
    { path: '**', redirectTo: 'auth/login'}
];
