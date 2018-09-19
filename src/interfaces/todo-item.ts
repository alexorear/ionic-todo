export interface ToDoItem {
	title: string;
	description: string;
	status: Status;
}

export type Status = 'active' | 'complete';
