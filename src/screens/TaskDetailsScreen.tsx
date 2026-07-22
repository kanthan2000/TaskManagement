import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { useTaskStore } from '../store/useTaskStore';

export const TaskDetailsScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const { taskId } = route.params || {};

  const tasks = useTaskStore(state => state.tasks);
  const toggleTaskCompletion = useTaskStore(state => state.toggleTaskCompletion);
  const removeTask = useTaskStore(state => state.removeTask);

  const task = tasks.find(t => t.id === taskId);

  if (!task) {
    return (
      <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background, justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: theme.colors.onSurface }}>Task not found</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
          <Text style={{ color: theme.colors.primary }}>Go Back</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  const handleToggleComplete = async () => {
    await toggleTaskCompletion(task.id, !task.completed);
    navigation.goBack();
  };

  const handleDelete = async () => {
    await removeTask(task.id);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Header */}
      <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.iconText, { color: theme.colors.onSurface }]}>←</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.editButton, { backgroundColor: theme.colors.surfaceContainer }]}
          onPress={() => navigation.navigate('EditTask', { taskId: task.id })}
        >
          <Text style={[styles.editIcon, { color: theme.colors.primary }]}>✎</Text>
          <Text style={[styles.editText, { color: theme.colors.primary }]}>Edit</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={[styles.title, { color: theme.colors.onSurface }, task.completed && { textDecorationLine: 'line-through', opacity: 0.6 }]}>{task.title}</Text>
          {!!task.description && (
            <Text style={[styles.description, { color: theme.colors.onSurfaceVariant }]}>
              {task.description}
            </Text>
          )}
        </View>

        {/* Status & Categorization */}
        <View style={styles.chipsSection}>
          <View style={[styles.chip, { backgroundColor: theme.colors.surfaceContainerHigh }]}>
            <View style={[styles.dot, { backgroundColor: task.completed ? theme.colors.primary : theme.colors.outline }]} />
            <Text style={[styles.chipText, { color: theme.colors.onSurfaceVariant }]}>{task.completed ? 'Completed' : 'Pending'}</Text>
          </View>
          <View style={[styles.chip, { backgroundColor: task.priority === 'High' ? theme.colors.errorContainer : task.priority === 'Low' ? theme.colors.tertiaryContainer : theme.colors.secondaryContainer }]}>
            <Text style={[styles.chipIcon, { color: task.priority === 'High' ? theme.colors.onErrorContainer : task.priority === 'Low' ? theme.colors.onTertiaryContainer : theme.colors.onSecondaryContainer }]}>!</Text>
            <Text style={[styles.chipText, { color: task.priority === 'High' ? theme.colors.onErrorContainer : task.priority === 'Low' ? theme.colors.onTertiaryContainer : theme.colors.onSecondaryContainer }]}>{task.priority} Priority</Text>
          </View>
          <View style={[styles.chip, { backgroundColor: theme.colors.primaryContainer }]}>
            <Text style={[styles.chipIcon, { color: theme.colors.onPrimaryContainer }]}>💼</Text>
            <Text style={[styles.chipText, { color: theme.colors.onPrimaryContainer }]}>{task.category}</Text>
          </View>
        </View>

        {/* Task Metadata Bento Grid */}
        <View style={styles.bentoGrid}>
          {/* Schedule Card */}
          <View style={[styles.bentoCard, { backgroundColor: theme.colors.surfaceContainerLow, borderColor: theme.colors.outlineVariant }]}>
            <View style={[styles.bentoIconBg, { backgroundColor: 'rgba(36, 56, 156, 0.1)' }]}>
              <Text style={[styles.bentoIcon, { color: theme.colors.primary }]}>📅</Text>
            </View>
            <View style={styles.bentoContent}>
              <Text style={[styles.bentoLabel, { color: theme.colors.outline }]}>DATE & TIME</Text>
              <Text style={[styles.bentoValue, { color: theme.colors.onSurface }]}>{task.date}</Text>
              <Text style={[styles.bentoSubValue, { color: theme.colors.onSurfaceVariant }]}>at {task.time}</Text>
            </View>
          </View>

          {/* Reminder Card */}
          <View style={[styles.bentoCard, { backgroundColor: theme.colors.surfaceContainerLow, borderColor: theme.colors.outlineVariant }]}>
            <View style={[styles.bentoIconBg, { backgroundColor: 'rgba(0, 97, 164, 0.1)' }]}>
              <Text style={[styles.bentoIcon, { color: theme.colors.secondary }]}>🔔</Text>
            </View>
            <View style={styles.bentoContent}>
              <Text style={[styles.bentoLabel, { color: theme.colors.outline }]}>REMINDER</Text>
              <Text style={[styles.bentoValue, { color: theme.colors.onSurface }]}>{task.remindMe ? 'Enabled' : 'Disabled'}</Text>
              <View style={styles.repeatRow}>
                <Text style={[styles.repeatIcon, { color: theme.colors.onSurfaceVariant }]}>↻</Text>
                <Text style={[styles.repeatText, { color: theme.colors.onSurfaceVariant }]}>{task.repeat}</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Checklist Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionIcon, { color: theme.colors.primary }]}>✓</Text>
            <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>Checklist</Text>
          </View>
          <View style={styles.checklistItem}>
            <TouchableOpacity style={[styles.checkbox, { borderColor: theme.colors.outline }]} />
            <Text style={[styles.checklistText, { color: theme.colors.onSurface }]}>Update revenue rows</Text>
          </View>
          <View style={styles.checklistItem}>
            <TouchableOpacity style={[styles.checkbox, { borderColor: theme.colors.outline }]} />
            <Text style={[styles.checklistText, { color: theme.colors.onSurface }]}>Check tax calculations</Text>
          </View>
        </View>

        {/* Attachments Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionIcon, { color: theme.colors.primary }]}>📎</Text>
            <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>Attachments</Text>
          </View>
          <View style={styles.attachmentsGrid}>
            <View style={[styles.attachmentCard, { backgroundColor: theme.colors.surfaceContainerHigh, borderColor: theme.colors.outlineVariant }]}>
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6-bCoVWZuU1v7IjxikIaEhEhrMCckzw3QuVZ1OmF3vnmmrVJ_pnThCOO21M2UY4AvpD9drK4zrSE4z4P98K8SUJd-qAz2LzwIeMKsN_tuxeUQQlZrnXCOZ-hawGE0lfJ-eMNqAp0rxZWPLUJ-IvHxvU9nG2uF1vbA_unHL8Luf7yLGa-EAHd6h14Md2C3fFKN6RLcaUkp5Ygar2ulEpacJsqUtKv8IBMDyIpApCCV_l2xSmWd2N7iQzoQ1cxohYGK0ZrZG3lLmXM' }} 
                style={styles.attachmentBg} 
              />
              <Text style={[styles.attachmentIcon, { color: theme.colors.onSurfaceVariant }]}>📄</Text>
              <Text style={[styles.attachmentName, { color: theme.colors.onSurfaceVariant }]}>quarterly_v2.pdf</Text>
            </View>
            <View style={[styles.addAttachmentCard, { backgroundColor: theme.colors.surfaceContainerHigh, borderColor: theme.colors.outlineVariant }]}>
              <Text style={[styles.addIcon, { color: theme.colors.onSurfaceVariant }]}>+</Text>
              <Text style={[styles.addText, { color: theme.colors.onSurfaceVariant }]}>Add new</Text>
            </View>
          </View>
        </View>

        {/* Activity Timeline */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionIcon, { color: theme.colors.primary }]}>🕒</Text>
            <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>Activity</Text>
          </View>
          <View style={[styles.timeline, { borderLeftColor: theme.colors.outlineVariant }]}>
            <View style={styles.timelineItem}>
              <View style={[styles.timelineDot, { backgroundColor: theme.colors.primary, borderColor: theme.colors.surface }]} />
              <View style={styles.timelineContent}>
                <Text style={[styles.timelineText, { color: theme.colors.onSurface }]}>Created by <Text style={{ fontWeight: 'bold' }}>Kanthan</Text></Text>
                <Text style={[styles.timelineTime, { color: theme.colors.outline }]}>Yesterday, 4:30 PM</Text>
              </View>
            </View>
            <View style={styles.timelineItem}>
              <View style={[styles.timelineDot, { backgroundColor: theme.colors.secondary, borderColor: theme.colors.surface }]} />
              <View style={styles.timelineContent}>
                <Text style={[styles.timelineText, { color: theme.colors.onSurface }]}>Priority updated</Text>
                <Text style={[styles.timelineTime, { color: theme.colors.outline }]}>Today, 9:15 AM</Text>
              </View>
            </View>
          </View>
        </View>

      </ScrollView>

      {/* Footer Controls */}
      <View style={[styles.footer, { backgroundColor: 'rgba(255, 255, 255, 0.95)', borderTopColor: 'rgba(0,0,0,0.05)' }]}>
        <TouchableOpacity 
          style={[styles.completeButton, { backgroundColor: task.completed ? theme.colors.surfaceVariant : theme.colors.primary }]}
          onPress={handleToggleComplete}
        >
          <Text style={[styles.completeIcon, { color: task.completed ? theme.colors.onSurfaceVariant : theme.colors.onPrimary }]}>✓</Text>
          <Text style={[styles.completeText, { color: task.completed ? theme.colors.onSurfaceVariant : theme.colors.onPrimary }]}>{task.completed ? 'Mark Undone' : 'Complete Task'}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.deleteButton, { borderColor: 'rgba(186,26,26,0.2)' }]}
          onPress={handleDelete}
        >
          <Text style={[styles.deleteIcon, { color: theme.colors.error }]}>🗑</Text>
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
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 4,
  },
  editIcon: {
    fontSize: 16,
  },
  editText: {
    fontSize: 14,
    fontWeight: '600',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 120,
    gap: 24,
  },
  heroSection: {
    gap: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  chipsSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    gap: 6,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  chipIcon: {
    fontSize: 12,
  },
  chipText: {
    fontSize: 12,
    fontWeight: '500',
  },
  bentoGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  bentoCard: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    borderRadius: 20,
    borderWidth: 1,
    gap: 12,
    alignItems: 'flex-start',
  },
  bentoIconBg: {
    padding: 8,
    borderRadius: 12,
  },
  bentoIcon: {
    fontSize: 18,
  },
  bentoContent: {
    flex: 1,
  },
  bentoLabel: {
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
    marginBottom: 4,
  },
  bentoValue: {
    fontSize: 16,
    fontWeight: '600',
  },
  bentoSubValue: {
    fontSize: 14,
  },
  repeatRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 4,
  },
  repeatIcon: {
    fontSize: 12,
  },
  repeatText: {
    fontSize: 14,
    fontWeight: '500',
  },
  section: {
    gap: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 8,
  },
  sectionIcon: {
    fontSize: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.05)',
    backgroundColor: '#fff',
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 6,
    borderWidth: 2,
    marginRight: 16,
  },
  checklistText: {
    fontSize: 16,
  },
  attachmentsGrid: {
    flexDirection: 'row',
    gap: 16,
  },
  attachmentCard: {
    flex: 1,
    aspectRatio: 16/9,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
    overflow: 'hidden',
  },
  attachmentBg: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    opacity: 0.2,
  },
  attachmentIcon: {
    fontSize: 32,
    zIndex: 1,
  },
  attachmentName: {
    fontSize: 14,
    fontWeight: '500',
    zIndex: 1,
  },
  addAttachmentCard: {
    flex: 1,
    aspectRatio: 16/9,
    borderRadius: 20,
    borderWidth: 2,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  addIcon: {
    fontSize: 24,
  },
  addText: {
    fontSize: 14,
    fontWeight: '500',
  },
  timeline: {
    paddingLeft: 8,
    borderLeftWidth: 2,
    marginLeft: 8,
    gap: 24,
    paddingTop: 8,
    paddingBottom: 8,
  },
  timelineItem: {
    position: 'relative',
    paddingLeft: 24,
  },
  timelineDot: {
    position: 'absolute',
    left: -17, // -8 (padding) - 1 (border) - 8 (radius) = -17 to center
    top: 4,
    width: 16,
    height: 16,
    borderRadius: 8,
    borderWidth: 4,
  },
  timelineContent: {
    gap: 2,
  },
  timelineText: {
    fontSize: 14,
  },
  timelineTime: {
    fontSize: 12,
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
  completeButton: {
    flex: 1,
    height: 56,
    borderRadius: 20,
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
  completeIcon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  completeText: {
    fontSize: 18,
    fontWeight: '600',
  },
  deleteButton: {
    width: 56,
    height: 56,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteIcon: {
    fontSize: 24,
  }
});
