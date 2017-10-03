import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AuthComponent }  from './auth/auth.component';
import { BaseComponent }  from './base/base.component';
import { HomeComponent }  from './home/home.component';
import { AboutComponent }  from './about/about.component';

export const appRoutes: Routes  = [
    {
        path: '',
        redirectTo: '/auth',
        pathMatch: 'full'
    },
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: 'home',
        component: BaseComponent,
        children: [
            { path: '', component: HomeComponent }
        ]
    },

    {
        path: 'about',
        component: AboutComponent
    },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);