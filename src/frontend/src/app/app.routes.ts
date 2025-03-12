import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
    {path: 'professional', loadChildren: () => import('./pages/professionals/professionals.module').then(m => m.ProfessionalsModule)},
    {path: 'students', loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule)},
    {path: 'users', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)}
];
