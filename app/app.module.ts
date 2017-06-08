import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component'
import { routes } from './app.routes';

@NgModule({
	imports : [
		BrowserModule, 
		FormsModule,
		RouterModule.forRoot(routes)

	],
	declarations : [
		AppComponent, 
		NavbarComponent, 
		JumbotronComponent, 
		HomeComponent, 
		AboutComponent
		
	],
	bootstrap : [AppComponent]
})

export class AppModule {

}

