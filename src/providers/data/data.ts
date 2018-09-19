import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { ToDoItem } from '../../interfaces/todo-item';

@Injectable()
export class DataService{
	activeItems: ToDoItem[] = [];
	completedItems: ToDoItem[] = [];

	constructor(private storage: Storage) {
		this.getAllToDoItems();
	}

	getAllToDoItems() {
		return this.storage.forEach((value, key) => {
			if (key.split('_')[0] === 'todo') {
				debugger;
				this.activeItems.push(value);
			}
		});
	}

	saveToDoItem(data) {
		const id = Date.now();
		return this.storage.set(`todo_${id}`, data);
	}
}
