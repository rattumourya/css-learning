import { Routes } from '@angular/router';
import { PackagesComponent } from './packages/packages.component';
import { HomepageComponent } from './homepage/homepage.component';

export const routes: Routes = [
    {path:'',component:HomepageComponent},
    {path:'packages',component:PackagesComponent}
];
