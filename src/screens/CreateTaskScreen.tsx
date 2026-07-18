import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, Switch, SafeAreaView, KeyboardAvoidingView, Platform } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

const CATEGORIES = ['Work', 'Personal', 'Creative', 'Health', 'Shopping'];
const PRIORITIES = ['Low', 'Medium', 'High'];

export const CreateTaskScreen = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('Work');
  const [selectedPriority, setSelectedPriority] = useState('Medium');
  const [remindMe, setRemindMe] = useState(true);

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.surface }]}>
      {/* TopAppBar */}
      <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <TouchableOpacity style={[styles.closeButton, { backgroundColor: theme.colors.surfaceContainerLow }]}>
          <Text style={[styles.closeIcon, { color: theme.colors.onSurface }]}>✕</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.colors.onSurface }]}>Add Task</Text>
        <View style={{ width: 40 }} />
      </View>

      <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
          {/* Task Form Canvas */}
          <View style={styles.formSection}>
            <View style={styles.inputGroup}>
              <Text style={[styles.label, { color: theme.colors.onSurfaceVariant }]}>Task Title</Text>
              <TextInput 
                style={[styles.titleInput, { 
                  backgroundColor: theme.colors.surfaceContainerLowest, 
                  borderColor: theme.colors.outlineVariant,
                  color: theme.colors.onSurface
                }]} 
                placeholder="What needs to be done?"
                placeholderTextColor={theme.colors.outline}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={[styles.label, { color: theme.colors.onSurfaceVariant }]}>Description</Text>
              <TextInput 
                style={[styles.descInput, { 
                  backgroundColor: theme.colors.surfaceContainerLowest, 
                  borderColor: theme.colors.outlineVariant,
                  color: theme.colors.onSurface
                }]} 
                placeholder="Add more details..."
                placeholderTextColor={theme.colors.outline}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </View>
          </View>

          {/* Category Selector */}
          <View style={styles.section}>
            <Text style={[styles.label, { color: theme.colors.onSurfaceVariant }]}>Category</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chipScroll}>
              {CATEGORIES.map(category => {
                const isActive = selectedCategory === category;
                return (
                  <TouchableOpacity 
                    key={category}
                    style={[styles.chip, { 
                      backgroundColor: isActive ? theme.colors.primaryContainer : theme.colors.surfaceContainerLowest,
                      borderColor: isActive ? theme.colors.primary : theme.colors.outlineVariant,
                    }]}
                    onPress={() => setSelectedCategory(category)}
                  >
                    <Text style={[styles.chipText, { color: isActive ? theme.colors.onPrimaryContainer : theme.colors.onSurface }]}>
                      {category}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>

          {/* Priority Selector */}
          <View style={styles.section}>
            <Text style={[styles.label, { color: theme.colors.onSurfaceVariant }]}>Priority</Text>
            <View style={[styles.priorityContainer, { backgroundColor: theme.colors.surfaceContainerHigh }]}>
              {PRIORITIES.map(priority => {
                const isActive = selectedPriority === priority;
                return (
                  <TouchableOpacity 
                    key={priority}
                    style={[styles.priorityBtn, isActive && { backgroundColor: theme.colors.surfaceContainerLowest }]}
                    onPress={() => setSelectedPriority(priority)}
                  >
                    <Text style={[styles.priorityText, { color: isActive ? theme.colors.primary : theme.colors.onSurfaceVariant, fontWeight: isActive ? 'bold' : 'normal' }]}>
                      {priority}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>

          {/* Schedule Section */}
          <View style={styles.scheduleRow}>
            <View style={[styles.scheduleBox, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
              <View style={[styles.iconContainer, { backgroundColor: theme.colors.primaryContainer }]}>
                <Text style={[styles.iconText, { color: theme.colors.onPrimaryContainer }]}>📅</Text>
              </View>
              <View style={styles.scheduleInputContainer}>
                <Text style={[styles.scheduleLabel, { color: theme.colors.onSurfaceVariant }]}>Date</Text>
                <TextInput style={[styles.scheduleInput, { color: theme.colors.onSurface }]} value="Today" />
              </View>
            </View>
            <View style={[styles.scheduleBox, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
              <View style={[styles.iconContainer, { backgroundColor: theme.colors.secondaryContainer }]}>
                <Text style={[styles.iconText, { color: theme.colors.onSecondaryContainer }]}>⏱</Text>
              </View>
              <View style={styles.scheduleInputContainer}>
                <Text style={[styles.scheduleLabel, { color: theme.colors.onSurfaceVariant }]}>Time</Text>
                <TextInput style={[styles.scheduleInput, { color: theme.colors.onSurface }]} value="10:00 AM" />
              </View>
            </View>
          </View>

          {/* Options Section */}
          <View style={[styles.optionsSection, { backgroundColor: theme.colors.surfaceContainerLow }]}>
            <View style={styles.optionRow}>
              <View style={styles.optionTextContainer}>
                <Text style={[styles.optionTitle, { color: theme.colors.onSurface }]}>Remind me</Text>
                <Text style={[styles.optionSubtitle, { color: theme.colors.onSurfaceVariant }]}>Send a push notification</Text>
              </View>
              <Switch 
                value={remindMe} 
                onValueChange={setRemindMe} 
                trackColor={{ false: theme.colors.outlineVariant, true: theme.colors.primary }}
                thumbColor="#fff"
              />
            </View>
            <View style={[styles.divider, { backgroundColor: theme.colors.outlineVariant }]} />
            <View style={styles.optionRow}>
              <Text style={[styles.optionTitle, { color: theme.colors.onSurface }]}>Repeat</Text>
              <Text style={[styles.optionValue, { color: theme.colors.primary }]}>None ▼</Text>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      {/* Bottom Action Buttons */}
      <View style={[styles.footer, { backgroundColor: 'rgba(255, 255, 255, 0.9)' }]}>
        <TouchableOpacity style={[styles.cancelButton, { borderColor: theme.colors.outlineVariant }]}>
          <Text style={[styles.cancelText, { color: theme.colors.onSurfaceVariant }]}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.saveButton, { backgroundColor: theme.colors.primary }]}>
          <Text style={[styles.saveIcon, { color: theme.colors.onPrimary }]}>✓</Text>
          <Text style={[styles.saveText, { color: theme.colors.onPrimary }]}>Save Task</Text>
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
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  closeIcon: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '600',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 120,
  },
  formSection: {
    gap: 16,
    marginBottom: 24,
  },
  inputGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
  },
  titleInput: {
    height: 56,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    fontSize: 18,
  },
  descInput: {
    height: 120,
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingTop: 16,
    fontSize: 16,
  },
  section: {
    gap: 8,
    marginBottom: 24,
  },
  chipScroll: {
    flexDirection: 'row',
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 20,
    borderWidth: 1,
    marginRight: 8,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500',
  },
  priorityContainer: {
    flexDirection: 'row',
    padding: 4,
    borderRadius: 20,
  },
  priorityBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
  },
  priorityText: {
    fontSize: 14,
  },
  scheduleRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  scheduleBox: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 18,
  },
  scheduleInputContainer: {
    flex: 1,
  },
  scheduleLabel: {
    fontSize: 12,
  },
  scheduleInput: {
    fontSize: 16,
    padding: 0,
    margin: 0,
    height: 24,
  },
  optionsSection: {
    borderRadius: 16,
    padding: 16,
    gap: 16,
  },
  optionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionTextContainer: {
    gap: 4,
  },
  optionTitle: {
    fontSize: 16,
  },
  optionSubtitle: {
    fontSize: 12,
  },
  optionValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  divider: {
    height: 1,
    opacity: 0.3,
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
    borderTopColor: 'rgba(0,0,0,0.05)',
  },
  cancelButton: {
    flex: 1,
    height: 56,
    borderRadius: 16,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cancelText: {
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
    fontWeight: 'bold',
  },
  saveText: {
    fontSize: 16,
    fontWeight: '600',
  }
});
