import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found/not-found.component';

export const routes: Routes = [
    {path: 'inicio', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
    {path: 'profissional', loadChildren: () => import('./pages/professionals/professionals.module').then(m => m.ProfessionalsModule)},
    {path: 'estudantes', loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule)},
    {path: 'usuarios', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)},
    { path: 'entrar', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule)},
    { path: '', redirectTo: '/entrar', pathMatch: 'full'},
    { path: '**', component: NotFoundComponent },
];

