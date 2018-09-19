import { Component } from '@angular/core';
import { Events, NavParams } from 'ionic-angular';

import { ToDoItem, Status } from '../../interfaces/todo-item';
@Component({
	selector: 'page-item-detail',
	templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
	public description: string;
	public title: string;
	public completeStatus: boolean = false;
	private status: Status;

	constructor(public events: Events, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		this.description = this.navParams.get('item').description;
		this.title = this.navParams.get('item').title;
		this.status = this.navParams.get('item').status;
		if (status === 'active') {
			this.completeStatus = true;
		} else {
			this.completeStatus = false;
		}
	}

	saveItem() {
		if (this.completeStatus) {
			this.status = 'complete'
		}
		const updatedItem: ToDoItem = {
			title: this.title,
			description: this.description,
			status: this.status
		}
		this.events.publish('updateItem', (updatedItem));
	}
}
