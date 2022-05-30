import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ProfileComponent } from './profile/profile.component';

export const routes: Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent,
                data: {
                    page: 'one',
                    meta: {
                        title: 'Dashboard',
                        'theme-color': '#ffffff'
                    }
                }
            },
            {
                path: 'cards',
                component: PortfolioComponent,
                data: {
                    page: 'cards',
                    meta: {
                        title: 'Cards',
                        'theme-color': '#ffffff'
                    }
                }
            },
            {
                path: 'about',
                component: AboutComponent,
                data: {
                    page: 'three',
                    meta: {
                        title: 'About',
                        'theme-color': '#ffffff'
                    }
                }
            },
            {
                path: 'contact',
                component: ContactComponent,
                data: {
                    page: 'four',
                    meta: {
                        title: 'Contact',
                        'theme-color': '#ffffff'
                    }
                }
            },
            {
                path: 'profile',
                component: ProfileComponent,
                data: {
                    page: 'profile',
                    meta: {
                        title: 'Profile',
                        'theme-color': '#3f51b5'
                    }
                }
            }
        ]
    }];



@NgModule({
    imports: [
        RouterModule.forRoot(
            routes
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
