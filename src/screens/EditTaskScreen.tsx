import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Switch, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { useTaskStore } from '../store/useTaskStore';
import { Task } from '../types';

const CATEGORIES = ['Work', 'Personal', 'Health', 'Finance'];
const PRIORITIES = [
  { id: 'High', icon: '!!' },
  { id: 'Medium', icon: '=' },
  { id: 'Low', icon: 'v' }
];

export const EditTaskScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { taskId } = route.params || {};
  
  const tasks = useTaskStore(state => state.tasks);
  const editTask = useTaskStore(state => state.editTask);
  const removeTask = useTaskStore(state => state.removeTask);
  
  const taskToEdit = tasks.find(t => t.id === taskId);

  const [selectedCategory, setSelectedCategory] = useState(taskToEdit?.category || 'Work');
  const [selectedPriority, setSelectedPriority] = useState<'Low'|'Medium'|'High'>((taskToEdit?.priority as any) || 'Medium');
  const [remindMe, setRemindMe] = useState(taskToEdit?.remindMe || false);
  const [title, setTitle] = useState(taskToEdit?.title || '');
  const [description, setDescription] = useState(taskToEdit?.description || '');

  const handleSave = async () => {
    if (!taskToEdit || !title.trim()) return;
    const updatedTask: Task = {
      ...taskToEdit,
      title,
      description,
      category: selectedCategory,
      priority: selectedPriority,
      remindMe
    };
    await editTask(updatedTask);
    navigation.goBack();
  };

  const handleDelete = async () => {
    if (taskToEdit) {
      await removeTask(taskToEdit.id);
      navigation.navigate('MainTabs');
    }
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Top App Bar */}
      <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerLeft}>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.iconText, { color: theme.colors.primary }]}>←</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.colors.primary }]}>Edit Task</Text>
        </View>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={handleDelete}
        >
          <Text style={[styles.iconText, { color: theme.colors.error }]}>🗑</Text>
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          
          {/* Main Input Group */}
          <View style={[styles.card, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
            <Text style={[styles.label, { color: theme.colors.onSurfaceVariant }]}>Task Title</Text>
            <TextInput 
              style={[styles.titleInput, { color: theme.colors.primary }]} 
              value={title}
              onChangeText={setTitle}
              placeholder="What needs to be done?"
              placeholderTextColor={theme.colors.outlineVariant}
            />
            <View style={[styles.divider, { backgroundColor: theme.colors.outlineVariant }]} />
            <Text style={[styles.label, { color: theme.colors.onSurfaceVariant, marginTop: 12 }]}>Description</Text>
            <TextInput 
              style={[styles.descInput, { color: theme.colors.onSurfaceVariant }]} 
              value={description}
              onChangeText={setDescription}
              placeholder="Add more details..."
              placeholderTextColor={theme.colors.outlineVariant}
              multiline
            />
          </View>

          {/* Bento Grid */}
          <View style={styles.bentoGrid}>
            {/* Date & Time */}
            <View style={[styles.bentoCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
              <View style={styles.bentoHeader}>
                <Text style={[styles.bentoIcon, { color: theme.colors.primary }]}>📅</Text>
                <Text style={[styles.bentoTitle, { color: theme.colors.onSurfaceVariant }]}>SCHEDULE</Text>
              </View>
              <View style={styles.bentoItems}>
                <View style={[styles.bentoItem, { backgroundColor: theme.colors.surfaceContainer }]}>
                  <Text style={[styles.bentoItemText, { color: theme.colors.onSurface }]}>{taskToEdit?.date || 'Today'}</Text>
                  <Text style={[styles.bentoItemIcon, { color: theme.colors.outline }]}>✎</Text>
                </View>
                <View style={[styles.bentoItem, { backgroundColor: theme.colors.surfaceContainer }]}>
                  <Text style={[styles.bentoItemText, { color: theme.colors.onSurface }]}>{taskToEdit?.time || '10:00 AM'}</Text>
                  <Text style={[styles.bentoItemIcon, { color: theme.colors.outline }]}>⏱</Text>
                </View>
              </View>
            </View>

            {/* Repeat & Reminders */}
            <View style={[styles.bentoCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
              <View style={styles.bentoHeader}>
                <Text style={[styles.bentoIcon, { color: theme.colors.primary }]}>🔔</Text>
                <Text style={[styles.bentoTitle, { color: theme.colors.onSurfaceVariant }]}>ALERTS</Text>
              </View>
              <View style={styles.bentoItems}>
                <View style={styles.alertItem}>
                  <Text style={[styles.alertItemText, { color: theme.colors.onSurface }]}>Remind me</Text>
                  <Switch 
                    value={remindMe} 
                    onValueChange={setRemindMe}
                    trackColor={{ false: theme.colors.outlineVariant, true: theme.colors.primary }}
                    thumbColor="#fff"
                  />
                </View>
                <View style={[styles.divider, { backgroundColor: theme.colors.outlineVariant, opacity: 0.2 }]} />
                <View style={styles.alertItem}>
                  <Text style={[styles.alertItemText, { color: theme.colors.onSurface }]}>Repeat</Text>
                  <Text style={[styles.alertValue, { color: theme.colors.primary }]}>{taskToEdit?.repeat || 'None'} ▼</Text>
                </View>
              </View>
            </View>
          </View>

          {/* Priority Selector */}
          <View style={[styles.card, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
            <Text style={[styles.bentoTitle, { color: theme.colors.onSurfaceVariant, marginBottom: 12 }]}>PRIORITY</Text>
            <View style={styles.priorityList}>
              {PRIORITIES.map(priority => {
                const isActive = selectedPriority === priority.id;
                let activeStyle = {};
                if (isActive) {
                  if (priority.id === 'High') activeStyle = { backgroundColor: theme.colors.errorContainer, borderColor: theme.colors.error };
                  else if (priority.id === 'Medium') activeStyle = { backgroundColor: theme.colors.secondaryContainer, borderColor: theme.colors.secondary };
                  else activeStyle = { backgroundColor: theme.colors.tertiaryContainer, borderColor: theme.colors.tertiary };
                }
                
                return (
                  <TouchableOpacity 
                    key={priority.id}
                    style={[
                      styles.priorityListItem, 
                      { borderColor: theme.colors.outlineVariant },
                      isActive && activeStyle
                    ]}
                    onPress={() => setSelectedPriority(priority.id as any)}
                  >
                    <View style={styles.priorityListLeft}>
                      <Text style={[styles.priorityListIcon, { color: isActive ? (priority.id === 'High' ? theme.colors.onErrorContainer : theme.colors.onSurface) : theme.colors.onSurfaceVariant }]}>{priority.icon}</Text>
                      <Text style={[styles.priorityListText, { 
                        color: isActive ? (priority.id === 'High' ? theme.colors.onErrorContainer : theme.colors.onSurface) : theme.colors.onSurfaceVariant,
                        fontWeight: isActive ? 'bold' : 'normal'
                      }]}>
                        {priority.id}
                      </Text>
                    </View>
                    {isActive && <Text style={[styles.priorityListCheck, { color: priority.id === 'High' ? theme.colors.onErrorContainer : theme.colors.onSurface }]}>✓</Text>}
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Category Chips */}
          <View style={[styles.card, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
            <Text style={[styles.bentoTitle, { color: theme.colors.onSurfaceVariant, marginBottom: 12 }]}>CATEGORY</Text>
            <View style={styles.chipContainer}>
              {CATEGORIES.map(category => {
                const isActive = selectedCategory === category;
                return (
                  <TouchableOpacity 
                    key={category}
                    style={[
                      styles.chip, 
                      { backgroundColor: isActive ? theme.colors.primary : theme.colors.surfaceContainerHigh }
                    ]}
                    onPress={() => setSelectedCategory(category)}
                  >
                    <Text style={[styles.chipText, { color: isActive ? theme.colors.onPrimary : theme.colors.onSurfaceVariant }]}>
                      {category}
                    </Text>
                  </TouchableOpacity>
                );
              })}
              <TouchableOpacity style={[styles.chipNew, { borderColor: theme.colors.outlineVariant }]}>
                <Text style={[styles.chipNewText, { color: theme.colors.onSurfaceVariant }]}>+ New</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Progress Context */}
          <View style={[styles.progressCard, { backgroundColor: theme.colors.primaryContainer }]}>
            <View style={styles.progressHeader}>
              <Text style={[styles.progressTitle, { color: theme.colors.onPrimaryContainer }]}>TASK STATUS</Text>
              <Text style={[styles.progressValue, { color: theme.colors.onPrimaryContainer }]}>In Progress</Text>
            </View>
            <View style={[styles.progressBarBg, { backgroundColor: 'rgba(255,255,255,0.2)' }]}>
              <View style={[styles.progressBarFg, { backgroundColor: theme.colors.onPrimaryContainer, width: '45%' }]} />
            </View>
            <Text style={[styles.progressDesc, { color: theme.colors.onPrimaryContainer }]}>45% of budget review sub-tasks completed.</Text>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>

      {/* Bottom Actions Layer */}
      <View style={[styles.footer, { backgroundColor: 'rgba(255, 255, 255, 0.9)', borderTopColor: 'rgba(0,0,0,0.1)' }]}>
        <TouchableOpacity 
          style={[styles.deleteButton, { borderColor: theme.colors.error }]}
          onPress={handleDelete}
        >
          <Text style={[styles.deleteIcon, { color: theme.colors.error }]}>🗑</Text>
          <Text style={[styles.deleteText, { color: theme.colors.error }]}>Delete Task</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.saveButton, { backgroundColor: theme.colors.primary }]}
          onPress={handleSave}
        >
          <Text style={[styles.saveIcon, { color: theme.colors.onPrimary }]}>💾</Text>
          <Text style={[styles.saveText, { color: theme.colors.onPrimary }]}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 12,
    zIndex: 10,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '500',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 120,
    gap: 24,
  },
  card: {
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
  },
  titleInput: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 0,
    margin: 0,
  },
  divider: {
    height: 1,
    opacity: 0.3,
    marginVertical: 12,
  },
  descInput: {
    fontSize: 16,
    padding: 0,
    margin: 0,
    lineHeight: 24,
  },
  bentoGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  bentoCard: {
    flex: 1,
    borderRadius: 20,
    padding: 16,
    borderWidth: 1,
  },
  bentoHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  bentoIcon: {
    fontSize: 18,
  },
  bentoTitle: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
  },
  bentoItems: {
    gap: 8,
  },
  bentoItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  bentoItemText: {
    fontSize: 14,
  },
  bentoItemIcon: {
    fontSize: 14,
  },
  alertItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  alertItemText: {
    fontSize: 14,
  },
  alertValue: {
    fontSize: 14,
    fontWeight: '500',
  },
  priorityList: {
    gap: 8,
  },
  priorityListItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  priorityListLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  priorityListIcon: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  priorityListText: {
    fontSize: 14,
  },
  priorityListCheck: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500',
  },
  chipNew: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderStyle: 'dashed',
    flexDirection: 'row',
    alignItems: 'center',
  },
  chipNewText: {
    fontSize: 14,
    fontWeight: '500',
  },
  progressCard: {
    borderRadius: 20,
    padding: 24,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  progressTitle: {
    fontSize: 12,
    fontWeight: '600',
    letterSpacing: 1,
    opacity: 0.8,
  },
  progressValue: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  progressBarBg: {
    height: 8,
    borderRadius: 4,
    marginBottom: 16,
    overflow: 'hidden',
  },
  progressBarFg: {
    height: '100%',
    borderRadius: 4,
  },
  progressDesc: {
    fontSize: 12,
    opacity: 0.8,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 16,
    gap: 16,
    borderTopWidth: 1,
  },
  deleteButton: {
    flex: 1,
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  deleteIcon: {
    fontSize: 18,
  },
  deleteText: {
    fontSize: 16,
    fontWeight: '600',
  },
  saveButton: {
    flex: 2,
    height: 56,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  saveIcon: {
    fontSize: 18,
  },
  saveText: {
    fontSize: 16,
    fontWeight: '600',
  }
});
