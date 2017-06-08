import { Routes } from '@angular/router'
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component'


export const routes : Routes  = [
	{path : 'home', component : HomeComponent},
	{path : '' , redirectTo : 'home', pathMatch: 'full'},
	{path : 'about', component: AboutComponent}

];

