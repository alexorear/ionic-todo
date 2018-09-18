import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';

import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';
import { ToDoItem } from '../../interfaces/todo-item';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	public items: ToDoItem[];

	constructor(
		public navCtrl: NavController,
		public modalCtrl: ModalController
	) {

	}

	ngOnInit() {
		this.items = [
			{title: 'test1', description: 'First test item'},
			{title: 'test2', description: 'Second test item'},
			{title: 'test3', description: 'Third test item'},
			{title: 'test4', description: 'Fourth test item'}
		]
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
	}

	viewItem(item) {
		this.navCtrl.push(ItemDetailPage, { item: item});
	}

}
