import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

import { ToDoItem } from '../../interfaces/todo-item';

@Component({
	selector: 'page-add-item',
	templateUrl: 'add-item.html',
})
export class AddItemPage {
	title: string;
	description: string;

	constructor(
		public navCtrl: NavController,
		public view: ViewController
	) {
	}

	saveItem() {
		let newItem: ToDoItem = {
			title: this.title,
			description: this.description
		}
	}

	close() {
		this.view.dismiss;
	}

}
