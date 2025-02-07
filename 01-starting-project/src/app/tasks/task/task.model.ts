export interface Task{
    id: string;
    userId: String;
    title: string;
    summary: string;
    dueDate: string;
  }

  export interface NewTaskData{
    titel: string;
    summary: string; 
    date: string;
  }