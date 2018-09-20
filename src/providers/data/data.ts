import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';

import { ToDoItem } from '../../interfaces/todo-item';

@Injectable()
export class DataService{
	activeItems: ToDoItem[] = [];
	completedItems: ToDoItem[] = [];

	constructor(private storage: Storage) {

	}

	deleteToDoItem(id: string) {
		return this.storage.remove(`todo_${id}`).then(() => {
				return this.getAllActiveToDoItems().then(() => {
					return this.getAllCompletedToDoItems();
				});
		});
	}

	getAllActiveToDoItems() {
		this.activeItems = [];
		return this.storage.forEach((value, key, index) => {
			if (key.split('_')[0] === 'todo' && value.status === 'active') {
				this.activeItems.push(value);
			}
		});
	}

	getAllCompletedToDoItems() {
		this.completedItems = [];
		return this.storage.forEach((value, key, index) => {
			if (key.split('_')[0] === 'todo' && value.status === 'complete') {
				this.completedItems.push(value);
			}
		});
	}

	saveToDoItem(data) {
		return this.storage.set(`todo_${data.id}`, data);
	}
}
