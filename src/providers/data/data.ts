import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

@Injectable()
export class DataService{

	constructor(private storage: Storage) {

	}

	getToDoItems() {
		return this.storage.get('todos');
	}

	save(data) {
		return this.storage.set('todos', data);
	}
}
