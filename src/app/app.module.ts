import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { AddItemPage } from '../pages/add-item/add-item';
import { HomePage } from '../pages/home/home';
import { ItemDetailPage } from '../pages/item-detail/item-detail';
import { DataService } from '../providers/data/data';

@NgModule({
	declarations: [
		AddItemPage,
		HomePage,
		ItemDetailPage,
		MyApp
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
		HomePage,
		ItemDetailPage,
		MyApp
	],
	providers: [
		StatusBar,
		SplashScreen,
		{provide: ErrorHandler, useClass: IonicErrorHandler},
    DataService
	]
})
export class AppModule {}
