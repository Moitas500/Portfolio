import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./home/home.component')
    },
    {
        path: 'profile',
        loadComponent: () => import('./profile/profile.component')
    },
    {
        path: 'portfolio',
        loadComponent: () => import('./portfolio/portfolio.component')
    },
    {
        path: 'contact',
        loadComponent: () => import('./contact/contact.component')
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
