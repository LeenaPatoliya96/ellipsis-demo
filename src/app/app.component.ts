import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public projects: string[];
  projectName = new FormControl('I am the craziest project name that you have ever seen in your whole life - no one does this!');

	constructor() {

		this.projects = [
			"/Users/najmal.jamal/Documents/Projects/testProject/node_modules/typed-assert/build/index.js.map",
			"src/app/ellipsis-component/ellipsis-component.component.scss",
			"/Users/najmal.jamal/Documents/Projects/testProject/node_modules/typed-assert/build/index.js",
			"/Users/najmal.jamal/Documents/Projects/testProject/node_modules/typed-assert/typedoc.json",
			"/Users/najmal.jamal/Documents/Projects/testProject/node_modules/unicode-property-aliases-ecmascriptunicode-property-aliases-ecmascriptunicode-property-aliases-ecmascript",
			"/Users/najmal.jamal/Documents/Projects/testProject/node_modules/typed-assert/README.md"
		];

	}

}
