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
		const newItem: ToDoItem = {
			title: this.title,
			description: this.description,
			status: 'active'
		}
		this.view.dismiss(newItem);
	}

	close() {
		this.view.dismiss();
	}

}
