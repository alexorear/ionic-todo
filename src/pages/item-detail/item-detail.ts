import { Component } from '@angular/core';
import { AlertController, Events, NavController, NavParams } from 'ionic-angular';

import { DataService } from '../../providers/data/data';
import { ToDoItem, Status } from '../../interfaces/todo-item';

@Component({
	selector: 'page-item-detail',
	templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
	public description: string;
	public title: string;
	public completeStatus: boolean = false;
	private id: string;
	private status: Status;

	constructor(
		private alertCrtl: AlertController,
		private data: DataService,
		public events: Events,
		public navCtrl: NavController,
		public navParams: NavParams
	) {
	}

	ionViewDidLoad() {
		this.id = this.navParams.get('item').id;
		this.description = this.navParams.get('item').description;
		this.title = this.navParams.get('item').title;
		this.status = this.navParams.get('item').status;
		if (status === 'active') {
			this.completeStatus = true;
		} else {
			this.completeStatus = false;
		}
	}

	confirmItemDelete() {
		let alert = this.alertCrtl.create({
			title: 'Confirm Deletetion',
			subTitle: 'This will perminately remove this item from your todo list.',
			buttons: [
				{
					text: 'Cancel',
					role: 'canel',
				},
				{
					text: 'Confirm',
					handler: () => {
						this.itemDelete();
					}
				}
			]
		});
		alert.present();
	}

	itemDelete() {
		this.data.deleteToDoItem(this.id).then(() => {
			this.events.publish('reload:activeItems');
			this.navCtrl.pop();
		});
	}

	saveItem() {
		if (this.completeStatus) {
			this.status = 'complete'
		}
		const updatedItem: ToDoItem = {
			id: this.id,
			title: this.title,
			description: this.description,
			status: this.status
		}
		this.data.saveToDoItem(updatedItem).then(() => {
			this.events.publish('reload:activeItems');
			this.navCtrl.pop();
		})
	}
}
