export interface Task {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: 'Low' | 'Medium' | 'High';
  date: string; // ISO date string (YYYY-MM-DD)
  time: string; // Time string (HH:MM AM/PM)
  remindMe: boolean;
  repeat: string; // 'None', 'Daily', 'Weekly', 'Monthly'
  completed: boolean;
  createdAt: string; // ISO string
}
