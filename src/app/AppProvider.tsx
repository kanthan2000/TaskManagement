import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { StyleSheet } from 'react-native';
import { ThemeProvider } from '../theme/ThemeProvider';
import { initDB } from '../database/taskService';
import { useTaskStore } from '../store/useTaskStore';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  React.useEffect(() => {
    const setupApp = async () => {
      try {
        await initDB();
        await useTaskStore.getState().loadTasks();
      } catch (error) {
        console.error('Failed to initialize app', error);
      }
    };
    setupApp();
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <SafeAreaProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
