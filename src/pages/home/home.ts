import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ToDoItem } from '../../interfaces/todo-item';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public items: ToDoItem[];

	constructor(public navCtrl: NavController) {

	}

	ngOnInit() {
		this.items = [
			{title: 'test1', description: 'First test item'},
			{title: 'test2', description: 'Second test item'},
			{title: 'test3', description: 'Third test item'},
			{title: 'test4', description: 'Fourth test item'}
		]
	}

	addItem() {}

	viewItem() {}

}
