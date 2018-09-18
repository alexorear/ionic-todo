import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CompletedPage } from '../completed/completed';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';

@Component({
	selector: 'page-tabs',
	templateUrl: 'tabs.html',
})
export class TabsPage {
	public completedPage = CompletedPage;
	public profilePage = ProfilePage;
	public todoPage = HomePage;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
	}

}
