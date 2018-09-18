import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
	selector: 'page-item-detail',
	templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
	public description;
	public title;

	constructor(public navParams: NavParams) {
	}

	ionViewDidLoad() {
		this.description = this.navParams.get('item').description;
		this.title = this.navParams.get('item').title;
	}

}
