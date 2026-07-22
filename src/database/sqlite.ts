import SQLite, { SQLiteDatabase } from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

const DATABASE_NAME = 'TaskFlowDB.db';

export const getDBConnection = async (): Promise<SQLiteDatabase> => {
  return SQLite.openDatabase({ name: DATABASE_NAME, location: 'default' });
};

export const createTables = async (db: SQLiteDatabase) => {
  const query = `
    CREATE TABLE IF NOT EXISTS tasks (
      id TEXT PRIMARY KEY,
      title TEXT NOT NULL,
      description TEXT,
      category TEXT,
      priority TEXT,
      date TEXT,
      time TEXT,
      remindMe INTEGER,
      repeat TEXT,
      completed INTEGER,
      createdAt TEXT
    );
  `;
  
  try {
    await db.executeSql(query);
    console.log('[DB] Table tasks initialized');
  } catch (error) {
    console.error('[DB] Failed to create tables:', error);
  }
};
