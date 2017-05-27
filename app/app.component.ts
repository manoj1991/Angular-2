import { Component } from '@angular/core';

@Component({
	selecctoy: 'my-app',
	template: `
	<div class="jumbotron">
		<h1>Welcome to our app!</h1>
	</div>
	`,
	styles: [`
		.jumbotron { box-shadow: 0 2px 0 rgba(0, 0, 0, 0.2); background: red; }
	`]
})
export class AppComponent {}