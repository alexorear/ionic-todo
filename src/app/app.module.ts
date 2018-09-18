import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { AddItemPage } from '../pages/add-item/add-item';
import { CompletedPage } from '../pages/completed/completed';
import { HomePage } from '../pages/home/home';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

import { DataService } from '../providers/data/data';

@NgModule({
	declarations: [
		AddItemPage,
		CompletedPage,
		HomePage,
		ItemDetailPage,
		MyApp,
		ProfilePage,
		TabsPage,
	],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		IonicStorageModule.forRoot({name: '__ToDos',
			driverOrder: ['sqlite', 'indexeddb', 'websql']
		})
	],
	bootstrap: [IonicApp],
	entryComponents: [
		AddItemPage,
		CompletedPage,
		HomePage,
		ItemDetailPage,
		MyApp,
		ProfilePage,
		TabsPage
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService
	]
})
export class AppModule {}
