import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'inicio', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)},
    {path: 'profissional', loadChildren: () => import('./pages/professionals/professionals.module').then(m => m.ProfessionalsModule)},
    {path: 'estudantes', loadChildren: () => import('./pages/students/students.module').then(m => m.StudentsModule)},
    {path: 'usuarios', loadChildren: () => import('./pages/users/users.module').then(m => m.UsersModule)},
    { path: '**', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) }
];
