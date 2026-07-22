import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { useTaskStore } from '../store/useTaskStore';

export const HomeScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<any>();
  const tasks = useTaskStore(state => state.tasks);

  const today = new Date().toISOString().split('T')[0];
  const todayTasks = tasks.filter(t => t.date === today);
  const completedTodayTasks = todayTasks.filter(t => t.completed);
  
  const allCompletedCount = tasks.filter(t => t.completed).length;
  const overdueCount = tasks.filter(t => !t.completed && t.date < today).length;
  
  const progressPercent = todayTasks.length > 0 ? Math.round((completedTodayTasks.length / todayTasks.length) * 100) : 0;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Top AppBar */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <TouchableOpacity 
              style={[styles.avatarContainer, { backgroundColor: theme.colors.primaryContainer }]}
              onPress={() => navigation.navigate('Profile')}
            >
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZoPBN96Uetpv6XhlgLiWGG3l0J52P_EgBc_hzVmNLXb0qoXln0brm6Oj-yVa2Jr_p0lqSo0BC7MWbBWHaTbRvH5iItpDsJs0g8FmiAEPiZw1G2MkBBtr4LtIWZuaPSzv8OHimgOE2cMnoI1qp9YrK3arfk18CZJOw5trt71DVWFKa3lSjxkQ7p4zUgWq84YlvfDu-G4GtrZ8iqqdW-DvgZtIUQCqGMsFQOZy-PwHXuLMBlhy4mjezIH6gYaeMbi2ozvFDDSVgsOY' }} 
                style={styles.avatar} 
              />
            </TouchableOpacity>
            <View>
              <Text style={[styles.appTitle, { color: theme.colors.primary }]}>TaskFlow</Text>
              <Text style={[styles.dateText, { color: theme.colors.onSurfaceVariant }]}>Monday, Oct 23</Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.iconButton}>
              <Text style={[styles.iconText, { color: theme.colors.primary }]}>🔍</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.iconButton}
              onPress={() => navigation.navigate('Notifications')}
            >
              <Text style={[styles.iconText, { color: theme.colors.primary }]}>🔔</Text>
              <View style={[styles.notificationBadge, { backgroundColor: theme.colors.error }]} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Welcome Section */}
        <View style={styles.section}>
          <Text style={[styles.greetingTitle, { color: theme.colors.onBackground }]}>Good Morning, Kanthan</Text>
          <Text style={[styles.greetingSubtitle, { color: theme.colors.onSurfaceVariant }]}>You have {todayTasks.length} tasks scheduled for today.</Text>
        </View>

        {/* Progress Bento Grid */}
        <View style={styles.bentoGrid}>
          {/* Main Progress Card */}
          <View style={[styles.progressCard, { backgroundColor: theme.colors.surface, borderColor: theme.colors.outlineVariant }]}>
            <View style={styles.progressCardText}>
              <Text style={[styles.progressTitle, { color: theme.colors.primary }]}>Today's Progress</Text>
              <Text style={[styles.progressSubtitle, { color: theme.colors.onSurfaceVariant }]}>{completedTodayTasks.length} of {todayTasks.length} tasks completed</Text>
              <View style={[styles.badgeContainer, { backgroundColor: theme.colors.tertiaryContainer, marginTop: 12 }]}>
                <Text style={[styles.badgeText, { color: theme.colors.onTertiaryContainer }]}>
                  {progressPercent === 100 ? 'All Done!' : 'Keep Going!'}
                </Text>
              </View>
            </View>
            
            {/* Circular Progress Placeholder */}
            <View style={styles.circularProgressContainer}>
              <View style={[styles.circleBg, { borderColor: theme.colors.surfaceVariant }]} />
              <View style={[styles.circleFg, { borderTopColor: theme.colors.primary, borderRightColor: theme.colors.primary, transform: [{ rotate: `${(progressPercent / 100) * 360 - 45}deg` }] }]} />
              <Text style={[styles.progressPercent, { color: theme.colors.primary }]}>{progressPercent}%</Text>
            </View>
          </View>

          {/* Mini Cards */}
          <View style={styles.miniCardsRow}>
            <View style={[styles.miniCard, { backgroundColor: theme.colors.secondaryContainer }]}>
              <Text style={[styles.miniCardIcon, { color: theme.colors.onSecondaryContainer }]}>✓</Text>
              <Text style={[styles.miniCardNumber, { color: theme.colors.onSurface }]}>{allCompletedCount}</Text>
              <Text style={[styles.miniCardLabel, { color: theme.colors.onSurfaceVariant }]}>COMPLETED</Text>
            </View>
            
            <View style={[styles.miniCard, { backgroundColor: theme.colors.errorContainer }]}>
              <Text style={[styles.miniCardIcon, { color: theme.colors.error }]}>!</Text>
              <Text style={[styles.miniCardNumber, { color: theme.colors.onErrorContainer }]}>{overdueCount}</Text>
              <Text style={[styles.miniCardLabel, { color: theme.colors.onErrorContainer }]}>OVERDUE</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>Quick Actions</Text>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickActionsScroll}>
            <TouchableOpacity 
              style={[styles.quickActionBtn, { backgroundColor: theme.colors.primaryContainer }]}
              onPress={() => navigation.navigate('CreateTask')}
            >
              <Text style={[styles.quickActionIcon, { color: theme.colors.onPrimaryContainer }]}>+</Text>
              <Text style={[styles.quickActionText, { color: theme.colors.onPrimaryContainer }]}>New Task</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.quickActionBtn, { backgroundColor: theme.colors.surfaceVariant }]}
              onPress={() => navigation.navigate('Calendar')}
            >
              <Text style={[styles.quickActionIcon, { color: theme.colors.onSurfaceVariant }]}>📅</Text>
              <Text style={[styles.quickActionText, { color: theme.colors.onSurfaceVariant }]}>Calendar</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={[styles.quickActionBtn, { backgroundColor: theme.colors.surfaceVariant }]}
              onPress={() => navigation.navigate('Analytics')}
            >
              <Text style={[styles.quickActionIcon, { color: theme.colors.onSurfaceVariant }]}>📊</Text>
              <Text style={[styles.quickActionText, { color: theme.colors.onSurfaceVariant }]}>Stats</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Tasks Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={[styles.sectionTitle, { color: theme.colors.onBackground }]}>Today's Tasks</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Tasks')}>
              <Text style={[styles.viewAllText, { color: theme.colors.primary }]}>View All</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.tasksList}>
            {todayTasks.length === 0 ? (
              <Text style={{ color: theme.colors.onSurfaceVariant, textAlign: 'center', marginTop: 20 }}>No tasks scheduled for today!</Text>
            ) : (
              todayTasks.slice(0, 3).map(task => (
                <TouchableOpacity 
                  key={task.id}
                  style={[styles.taskCard, { backgroundColor: theme.colors.surface, borderLeftColor: task.priority === 'High' ? theme.colors.error : task.priority === 'Low' ? theme.colors.tertiary : theme.colors.primary }]}
                  onPress={() => navigation.navigate('TaskDetails', { taskId: task.id })}
                >
                  <View style={[styles.checkbox, { borderColor: theme.colors.outline }, task.completed && { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary }]} />
                  <View style={styles.taskInfo}>
                    <Text style={[styles.taskTitle, { color: theme.colors.onSurface }, task.completed && { textDecorationLine: 'line-through', opacity: 0.6 }]}>{task.title}</Text>
                    {!!task.description && (
                      <Text style={[styles.taskDesc, { color: theme.colors.onSurfaceVariant }]} numberOfLines={1}>{task.description}</Text>
                    )}
                    <View style={styles.taskMeta}>
                      <View style={[styles.badgeContainer, { backgroundColor: task.priority === 'High' ? theme.colors.errorContainer : theme.colors.primaryContainer }]}>
                        <Text style={[styles.badgeText, { color: task.priority === 'High' ? theme.colors.onErrorContainer : theme.colors.onPrimaryContainer }]}>{task.category}</Text>
                      </View>
                      <Text style={[styles.timeText, { color: theme.colors.onSurfaceVariant }]}>⏱ {task.time}</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              ))
            )}
          </View>
        </View>

      </ScrollView>

      {/* FAB */}
      <TouchableOpacity 
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        onPress={() => navigation.navigate('CreateTask')}
      >
        <Text style={[styles.fabIcon, { color: theme.colors.onPrimary }]}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  appTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  dateText: {
    fontSize: 12,
    fontWeight: '500',
  },
  headerRight: {
    flexDirection: 'row',
    gap: 8,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 18,
  },
  notificationBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  section: {
    marginBottom: 32,
  },
  greetingTitle: {
    fontSize: 24,
    fontWeight: '700',
    marginBottom: 4,
  },
  greetingSubtitle: {
    fontSize: 14,
  },
  bentoGrid: {
    marginBottom: 32,
  },
  progressCard: {
    flexDirection: 'row',
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressCardText: {
    flex: 1,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  progressSubtitle: {
    fontSize: 14,
  },
  badgeContainer: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '600',
  },
  circularProgressContainer: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  circleBg: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 8,
  },
  circleFg: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 8,
    borderLeftColor: 'transparent',
    borderBottomColor: 'transparent',
    transform: [{ rotate: '45deg' }]
  },
  progressPercent: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  miniCardsRow: {
    flexDirection: 'row',
    gap: 16,
  },
  miniCard: {
    flex: 1,
    padding: 16,
    borderRadius: 20,
    gap: 4,
  },
  miniCardIcon: {
    fontSize: 20,
    marginBottom: 4,
  },
  miniCardNumber: {
    fontSize: 24,
    fontWeight: '700',
  },
  miniCardLabel: {
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  quickActionsScroll: {
    overflow: 'visible',
  },
  quickActionBtn: {
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
    minWidth: 100,
  },
  quickActionIcon: {
    fontSize: 24,
    marginBottom: 8,
  },
  quickActionText: {
    fontSize: 14,
    fontWeight: '600',
  },
  viewAllText: {
    fontSize: 14,
    fontWeight: '600',
  },
  tasksList: {
    gap: 16,
  },
  taskCard: {
    flexDirection: 'row',
    padding: 16,
    borderRadius: 20,
    borderLeftWidth: 4,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 6,
    borderWidth: 2,
    marginRight: 16,
    marginTop: 4,
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  taskDesc: {
    fontSize: 14,
    marginBottom: 12,
  },
  taskMeta: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  timeText: {
    fontSize: 12,
  },
  fab: {
    position: 'absolute',
    bottom: 32,
    right: 20,
    width: 64,
    height: 64,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  fabIcon: {
    fontSize: 32,
    fontWeight: '300',
  }
});
