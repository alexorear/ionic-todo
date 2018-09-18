import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService{

	constructor(private storage: Storage) {

	}

	getToDoItems() {
		this.storage.get('todos');
	}

	save(data) {
		this.storage.set('todos', data);
	}
}
