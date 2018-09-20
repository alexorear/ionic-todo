import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ToDoItem } from '../../interfaces/todo-item';

import { DataService } from '../../providers/data/data';

@Component({
	selector: 'page-completed',
	templateUrl: 'completed.html',
})
export class CompletedPage {

	public items: ToDoItem[] = [];

	constructor(
		private data: DataService,
		public navCtrl: NavController,
		public navParams: NavParams
	) { }

	ngOnInit() {
		this.data.getAllCompletedToDoItems().then(() => {
			if (this.data.completedItems) {
				this.items = this.data.completedItems;
				console.log(this.items);
			}
		});
	}

}
