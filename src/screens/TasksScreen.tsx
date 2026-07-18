import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export const TasksScreen = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* TopAppBar */}
      <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerLeft}>
          <View style={[styles.avatarContainer, { backgroundColor: theme.colors.surfaceVariant, borderColor: theme.colors.outlineVariant }]}>
             <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDxSEqnUED-nVCe4HKRygEEZk74Jc0GSCz43Wkqi_vRPDRxv2D-SX7tVvJ7sVHFjZyUmZ8l3ncsUVu03aMt4FXs6a_z-tye8EWP6EBjYxaCadhMEySsndavdad0IuDipD3dtcNisI0uCnFDmlEcXs8FKYnBBDf2NMwxTy3-x5AUgSOy4142v-5LD0ghhPvZDy5XmKqwoP0Il6wIhcs4lKHW9Pjju1RX47s0GtmHi7uJjNHA8hP97b2-n69t9l3ZKabJJZFNLOY5wdA' }} 
                style={styles.avatar} 
              />
          </View>
          <Text style={[styles.appTitle, { color: theme.colors.primary }]}>TaskFlow</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={[styles.iconText, { color: theme.colors.onSurfaceVariant }]}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Search & Filters */}
        <View style={styles.searchSection}>
          <View style={styles.searchRow}>
            <View style={[styles.searchInputContainer, { backgroundColor: theme.colors.surface, borderColor: theme.colors.outlineVariant }]}>
              <Text style={[styles.searchIcon, { color: theme.colors.outline }]}>🔍</Text>
              <TextInput 
                style={[styles.searchInput, { color: theme.colors.onSurface }]} 
                placeholder="Search tasks..." 
                placeholderTextColor={theme.colors.outline}
              />
            </View>
            <TouchableOpacity style={[styles.filterButton, { backgroundColor: theme.colors.surface, borderColor: theme.colors.outlineVariant }]}>
              <Text style={[styles.filterIcon, { color: theme.colors.onSurfaceVariant }]}>≡</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.filterButton, { backgroundColor: theme.colors.surface, borderColor: theme.colors.outlineVariant }]}>
              <Text style={[styles.filterIcon, { color: theme.colors.onSurfaceVariant }]}>⇅</Text>
            </TouchableOpacity>
          </View>

          {/* Tab Navigation */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabNav}>
            <TouchableOpacity style={[styles.tabButton, { backgroundColor: theme.colors.primary }]}>
              <Text style={[styles.tabText, { color: theme.colors.onPrimary }]}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabButton]}>
              <Text style={[styles.tabText, { color: theme.colors.onSurfaceVariant }]}>Pending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabButton]}>
              <Text style={[styles.tabText, { color: theme.colors.onSurfaceVariant }]}>Completed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabButton]}>
              <Text style={[styles.tabText, { color: theme.colors.onSurfaceVariant }]}>Daily</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.tabButton]}>
              <Text style={[styles.tabText, { color: theme.colors.onSurfaceVariant }]}>Scheduled</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>

        {/* Task List */}
        <View style={styles.listSection}>
          <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>Today's Focus</Text>

          {/* Task Card 1: High Priority */}
          <View style={[styles.taskCard, { backgroundColor: theme.colors.surface, borderLeftColor: theme.colors.error }]}>
            <TouchableOpacity style={[styles.checkbox, { borderColor: theme.colors.outlineVariant }]} />
            <View style={styles.taskInfo}>
              <View style={styles.taskHeader}>
                <Text style={[styles.taskTitle, { color: theme.colors.onSurface }]}>Review Quarterly Budget</Text>
                <View style={[styles.badgeContainer, { backgroundColor: theme.colors.errorContainer }]}>
                  <Text style={[styles.badgeText, { color: theme.colors.onErrorContainer }]}>High</Text>
                </View>
              </View>
              <View style={styles.taskMetaRow}>
                <View style={[styles.badgeContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
                  <Text style={[styles.badgeText, { color: theme.colors.onSurfaceVariant }]}>Work</Text>
                </View>
                <Text style={[styles.timeText, { color: theme.colors.onSurfaceVariant }]}>⏱ 10:00 AM</Text>
              </View>
            </View>
          </View>

          {/* Task Card 2: Medium Priority */}
          <View style={[styles.taskCard, { backgroundColor: theme.colors.surface, borderLeftColor: theme.colors.secondary }]}>
            <TouchableOpacity style={[styles.checkbox, { borderColor: theme.colors.outlineVariant }]} />
            <View style={styles.taskInfo}>
              <View style={styles.taskHeader}>
                <Text style={[styles.taskTitle, { color: theme.colors.onSurface }]}>Team Sync - Project Apollo</Text>
                <View style={[styles.badgeContainer, { backgroundColor: theme.colors.secondaryContainer }]}>
                  <Text style={[styles.badgeText, { color: theme.colors.onSecondaryContainer }]}>Medium</Text>
                </View>
              </View>
              <View style={styles.taskMetaRow}>
                <View style={[styles.badgeContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
                  <Text style={[styles.badgeText, { color: theme.colors.onSurfaceVariant }]}>Work</Text>
                </View>
                <Text style={[styles.timeText, { color: theme.colors.onSurfaceVariant }]}>📅 2:30 PM</Text>
              </View>
            </View>
          </View>

          {/* Task Card 3: Low Priority */}
          <View style={[styles.taskCard, { backgroundColor: theme.colors.surface, borderLeftColor: theme.colors.tertiary }]}>
            <TouchableOpacity style={[styles.checkbox, { borderColor: theme.colors.outlineVariant }]} />
            <View style={styles.taskInfo}>
              <View style={styles.taskHeader}>
                <Text style={[styles.taskTitle, { color: theme.colors.onSurface }]}>Grocery Shopping</Text>
                <View style={[styles.badgeContainer, { backgroundColor: theme.colors.tertiaryContainer }]}>
                  <Text style={[styles.badgeText, { color: theme.colors.onTertiaryContainer }]}>Low</Text>
                </View>
              </View>
              <View style={styles.taskMetaRow}>
                <View style={[styles.badgeContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
                  <Text style={[styles.badgeText, { color: theme.colors.onSurfaceVariant }]}>Personal</Text>
                </View>
                <Text style={[styles.timeText, { color: theme.colors.onSurfaceVariant }]}>📍 Whole Foods</Text>
              </View>
            </View>
          </View>

          <Text style={[styles.sectionTitle, { color: theme.colors.onSurface, marginTop: 32 }]}>Upcoming</Text>

          {/* Task Card 4: Scheduled */}
          <View style={[styles.taskCard, { backgroundColor: theme.colors.surface, borderLeftColor: theme.colors.outlineVariant, opacity: 0.8 }]}>
            <TouchableOpacity style={[styles.checkbox, { borderColor: theme.colors.outlineVariant }]} />
            <View style={styles.taskInfo}>
              <View style={styles.taskHeader}>
                <Text style={[styles.taskTitle, { color: theme.colors.onSurface }]}>Update Portfolio Site</Text>
              </View>
              <View style={styles.taskMetaRow}>
                <View style={[styles.badgeContainer, { backgroundColor: theme.colors.surfaceVariant }]}>
                  <Text style={[styles.badgeText, { color: theme.colors.onSurfaceVariant }]}>Creative</Text>
                </View>
                <Text style={[styles.timeText, { color: theme.colors.onSurfaceVariant }]}>📅 Tomorrow</Text>
              </View>
            </View>
          </View>

        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={[styles.fab, { backgroundColor: theme.colors.primaryContainer }]}>
        <Text style={[styles.fabIcon, { color: theme.colors.onPrimaryContainer }]}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    zIndex: 40,
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
    borderWidth: 1,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  appTitle: {
    fontSize: 24,
    fontWeight: '700',
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
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  searchSection: {
    marginBottom: 24,
    marginTop: 8,
  },
  searchRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    height: 48,
  },
  searchIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
  },
  filterButton: {
    width: 48,
    height: 48,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterIcon: {
    fontSize: 20,
  },
  tabNav: {
    flexDirection: 'row',
    paddingVertical: 8,
  },
  tabButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
  },
  listSection: {
    gap: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  taskCard: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 20,
    borderLeftWidth: 4,
    marginBottom: 16,
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
    marginTop: 2,
  },
  taskInfo: {
    flex: 1,
  },
  taskHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  badgeContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  badgeText: {
    fontSize: 11,
    fontWeight: '600',
  },
  taskMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  timeText: {
    fontSize: 12,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
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
