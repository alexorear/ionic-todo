import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { ToDoItem } from '../../interfaces/todo-item';

@Injectable()
export class DataService{
	activeItems: ToDoItem[] = [];
	completedItems: ToDoItem[] = [];

	constructor(private storage: Storage) {

	}

	getAllActiveToDoItems() {
		return this.storage.forEach((value, key, index) => {
			if (key.split('_')[0] === 'todo' && value.status === 'active') {
				this.activeItems.push(value);
			}
		});
	}

	getAllCompletedToDoItems() {
		return this.storage.forEach((value, key, index) => {
			if (key.split('_')[0] === 'todo') {
				this.activeItems.push(value);
			}
		});
	}

	saveToDoItem(data) {
		const id = Date.now();
		return this.storage.set(`todo_${id}`, data);
	}
}
