import { Component } from '@angular/core';
import { Events, ModalController, NavController } from 'ionic-angular';

import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { ToDoItem } from '../../interfaces/todo-item';

import { DataService } from '../../providers/data/data';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public items: ToDoItem[] = [];

	constructor(
		private data: DataService,
		public events: Events,
		public navCtrl: NavController,
		public modalCtrl: ModalController,
	) {
		this.events.subscribe('reload:activeItems', () => {
			this.getAllActiveToDoItems();
		});
	}

	ngOnInit() {
		this.getAllActiveToDoItems();
	}

	ngOnDestroy() {
		this.events.unsubscribe('reload:activeItems');
	}

	getAllActiveToDoItems() {
		this.data.getAllActiveToDoItems().then(() => {
			if (this.data.activeItems) {
				this.items = this.data.activeItems;
				console.log(this.items);
			}
		});
	}

	addItem() {
		let addModal = this.modalCtrl.create(AddItemPage);
		addModal.onDidDismiss((item) => {
			if (item) {
				this.saveItem(item);
			}
		})
		addModal.present();
	}

	saveItem(item) {
		this.items.push(item);
		this.data.saveToDoItem(item);
	}

	viewItem(item) {
		this.navCtrl.push(ItemDetailPage, { item: item});
	}

}
