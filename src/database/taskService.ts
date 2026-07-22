import { getDBConnection, createTables } from './sqlite';
import { Task } from '../types';

export const initDB = async () => {
  const db = await getDBConnection();
  await createTables(db);
  return db;
};

export const getTasks = async (): Promise<Task[]> => {
  try {
    const db = await getDBConnection();
    const [results] = await db.executeSql('SELECT * FROM tasks ORDER BY createdAt DESC');
    const tasks: Task[] = [];
    
    for (let i = 0; i < results.rows.length; i++) {
      const row = results.rows.item(i);
      tasks.push({
        id: row.id,
        title: row.title,
        description: row.description,
        category: row.category,
        priority: row.priority,
        date: row.date,
        time: row.time,
        remindMe: Boolean(row.remindMe),
        repeat: row.repeat,
        completed: Boolean(row.completed),
        createdAt: row.createdAt,
      });
    }
    return tasks;
  } catch (error) {
    console.error('[DB] Failed to fetch tasks:', error);
    return [];
  }
};

export const insertTask = async (task: Task): Promise<void> => {
  try {
    const db = await getDBConnection();
    const query = `
      INSERT INTO tasks (id, title, description, category, priority, date, time, remindMe, repeat, completed, createdAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [
      task.id,
      task.title,
      task.description,
      task.category,
      task.priority,
      task.date,
      task.time,
      task.remindMe ? 1 : 0,
      task.repeat,
      task.completed ? 1 : 0,
      task.createdAt,
    ];
    await db.executeSql(query, params);
  } catch (error) {
    console.error('[DB] Failed to insert task:', error);
    throw error;
  }
};

export const updateTask = async (task: Task): Promise<void> => {
  try {
    const db = await getDBConnection();
    const query = `
      UPDATE tasks 
      SET title = ?, description = ?, category = ?, priority = ?, date = ?, time = ?, remindMe = ?, repeat = ?, completed = ?
      WHERE id = ?
    `;
    const params = [
      task.title,
      task.description,
      task.category,
      task.priority,
      task.date,
      task.time,
      task.remindMe ? 1 : 0,
      task.repeat,
      task.completed ? 1 : 0,
      task.id,
    ];
    await db.executeSql(query, params);
  } catch (error) {
    console.error('[DB] Failed to update task:', error);
    throw error;
  }
};

export const toggleTaskCompleted = async (id: string, completed: boolean): Promise<void> => {
  try {
    const db = await getDBConnection();
    await db.executeSql('UPDATE tasks SET completed = ? WHERE id = ?', [completed ? 1 : 0, id]);
  } catch (error) {
    console.error('[DB] Failed to toggle task completion:', error);
    throw error;
  }
};

export const deleteTask = async (id: string): Promise<void> => {
  try {
    const db = await getDBConnection();
    await db.executeSql('DELETE FROM tasks WHERE id = ?', [id]);
  } catch (error) {
    console.error('[DB] Failed to delete task:', error);
    throw error;
  }
};
