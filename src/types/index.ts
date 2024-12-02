export interface Department {
  id: string;
  name: string;
  projects: string[];
}

export interface Project {
  id: string;
  name: string;
  description: string;
  departmentId: string;
  columns: string[];
}

export interface Column {
  id: string;
  title: string;
  position: number;
  projectId: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  ownerId: string;
  projectId: string;
  columnId: string;
  status: "pending" | "inProgress" | "completed";
  position: number;
  responsibleId: string;
  completionDate: string;
  dependencies: string[];
  comments: string[];
}

export interface User {
  id: string;
  name: string;
  email: string;
  assignedTasks: string[];
}

export interface Comment {
  id: string;
  content: string;
  taskId: string;
  userId: string;
  createdAt: Date;
  likes: number;
  attachments: string[];
}
