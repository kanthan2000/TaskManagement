import { create } from 'zustand';
import { Task } from '../types';
import * as TaskService from '../database/taskService';

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
  loadTasks: () => Promise<void>;
  addTask: (task: Task) => Promise<void>;
  editTask: (task: Task) => Promise<void>;
  removeTask: (id: string) => Promise<void>;
  toggleTaskCompletion: (id: string, completed: boolean) => Promise<void>;
}

export const useTaskStore = create<TaskState>((set, get) => ({
  tasks: [],
  loading: false,
  error: null,
  
  loadTasks: async () => {
    set({ loading: true, error: null });
    try {
      const fetchedTasks = await TaskService.getTasks();
      set({ tasks: fetchedTasks, loading: false });
    } catch (error: any) {
      set({ error: error.message || 'Failed to load tasks', loading: false });
    }
  },
  
  addTask: async (task: Task) => {
    try {
      await TaskService.insertTask(task);
      set((state) => ({ tasks: [task, ...state.tasks] })); // prepend to list
    } catch (error: any) {
      set({ error: error.message || 'Failed to add task' });
    }
  },
  
  editTask: async (task: Task) => {
    try {
      await TaskService.updateTask(task);
      set((state) => ({
        tasks: state.tasks.map((t) => (t.id === task.id ? task : t)),
      }));
    } catch (error: any) {
      set({ error: error.message || 'Failed to edit task' });
    }
  },
  
  removeTask: async (id: string) => {
    try {
      await TaskService.deleteTask(id);
      set((state) => ({
        tasks: state.tasks.filter((t) => t.id !== id),
      }));
    } catch (error: any) {
      set({ error: error.message || 'Failed to remove task' });
    }
  },
  
  toggleTaskCompletion: async (id: string, completed: boolean) => {
    try {
      await TaskService.toggleTaskCompleted(id, completed);
      set((state) => ({
        tasks: state.tasks.map((t) => (t.id === id ? { ...t, completed } : t)),
      }));
    } catch (error: any) {
      set({ error: error.message || 'Failed to toggle task completion' });
    }
  },
}));
