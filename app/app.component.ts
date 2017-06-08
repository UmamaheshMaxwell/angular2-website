import { Component } from '@angular/core';
import { NavbarComponent} from './components/navbar/navbar.component'
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { RouterModule, RouterLink } from '@angular/router'

@Component({
	selector : 'my-app',
	template : `<div>					
					<navbar></navbar>
					<jumbotron></jumbotron>
					<div class="container">
						<router-outlet></router-outlet>
					</div>
				</div>`

})

export class AppComponent {

}