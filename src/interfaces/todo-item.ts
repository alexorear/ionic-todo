export interface ToDoItem {
	id: string;
	title: string;
	description: string;
	status: Status;
}

export type Status = 'active' | 'complete';
