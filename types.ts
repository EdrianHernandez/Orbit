export type Priority = 'Low' | 'Medium' | 'High';
export type Status = 'To Do' | 'In Progress' | 'Done';

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  priority: Priority;
  status: Status;
  assignees: User[];
  commentsCount: number;
  attachmentsCount: number;
  dueDate?: string;
}

export interface Activity {
  id: string;
  user: User;
  action: string;
  target: string;
  timestamp: string;
}

export interface ColumnData {
  id: Status;
  title: string;
  tasks: Task[];
}