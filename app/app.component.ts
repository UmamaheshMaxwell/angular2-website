import { Component } from '@angular/core';
import { NavbarComponent} from './components/navbar/navbar.component'
import { JumbotronComponent } from './components/jumbotron/jumbotron.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';

@Component({
	selector : 'my-app',
	template : `<div>					
					<navbar></navbar>
					<jumbotron></jumbotron>
					<div class="container">
						<home></home>
					</div>
				</div>`

})

export class AppComponent {

}