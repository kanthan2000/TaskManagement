import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';

export const NotificationsScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Top App Bar */}
      <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerLeft}>
          <TouchableOpacity 
            style={[styles.iconContainer, { backgroundColor: theme.colors.primaryContainer }]}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.headerIcon, { color: theme.colors.onPrimaryContainer }]}>←</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.colors.primary }]}>Notifications</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={[styles.actionIcon, { color: theme.colors.onSurfaceVariant }]}>☑️</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Today Group */}
        <View style={styles.group}>
          <Text style={[styles.groupTitle, { color: theme.colors.outline }]}>TODAY</Text>
          
          {/* Reminder Notification */}
          <View style={[styles.notificationCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
            <View style={[styles.cardContent, { backgroundColor: 'rgba(63, 81, 181, 0.05)' }]}>
              <View style={[styles.unreadDot, { backgroundColor: theme.colors.primary }]} />
              <View style={[styles.iconBox, { backgroundColor: theme.colors.primaryContainer }]}>
                <Text style={[styles.iconText, { color: theme.colors.onPrimaryContainer }]}>⏰</Text>
              </View>
              <View style={styles.textContent}>
                <View style={styles.titleRow}>
                  <Text style={[styles.title, { color: theme.colors.onSurface }]}>Reminder: Client Presentation</Text>
                  <Text style={[styles.time, { color: theme.colors.outline }]}>15 mins ago</Text>
                </View>
                <Text style={[styles.message, { color: theme.colors.onSurfaceVariant }]}>
                  The presentation for Global Logistics starts in 15 minutes. Check your notes.
                </Text>
              </View>
            </View>
          </View>

          {/* Completed Notification */}
          <View style={[styles.notificationCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
            <View style={styles.cardContent}>
              <View style={[styles.unreadDot, { backgroundColor: 'transparent' }]} />
              <View style={[styles.iconBox, { backgroundColor: theme.colors.tertiaryContainer }]}>
                <Text style={[styles.iconText, { color: theme.colors.onTertiaryContainer }]}>✔️</Text>
              </View>
              <View style={styles.textContent}>
                <View style={styles.titleRow}>
                  <Text style={[styles.title, { color: theme.colors.onSurface }]}>Well done!</Text>
                  <Text style={[styles.time, { color: theme.colors.outline }]}>10:30 AM</Text>
                </View>
                <Text style={[styles.message, { color: theme.colors.onSurfaceVariant }]}>
                  You completed 'Review Q4 Goals' and stayed ahead of schedule.
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Yesterday Group */}
        <View style={styles.group}>
          <Text style={[styles.groupTitle, { color: theme.colors.outline }]}>YESTERDAY</Text>
          
          {/* Overdue Notification */}
          <View style={[styles.notificationCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant, borderLeftWidth: 4, borderLeftColor: theme.colors.error }]}>
            <View style={[styles.cardContent, { backgroundColor: 'rgba(186, 26, 26, 0.05)' }]}>
              <View style={[styles.unreadDot, { backgroundColor: theme.colors.error }]} />
              <View style={[styles.iconBox, { backgroundColor: theme.colors.error }]}>
                <Text style={[styles.iconText, { color: theme.colors.onError }]}>❗️</Text>
              </View>
              <View style={styles.textContent}>
                <View style={styles.titleRow}>
                  <Text style={[styles.title, { color: theme.colors.onSurface }]}>Overdue: Grocery Shopping</Text>
                  <Text style={[styles.time, { color: theme.colors.outline }]}>6:00 PM</Text>
                </View>
                <Text style={[styles.message, { color: theme.colors.onSurfaceVariant }]}>
                  This task was due yesterday. Would you like to reschedule or complete it now?
                </Text>
              </View>
            </View>
          </View>
        </View>

        {/* Earlier Group */}
        <View style={styles.group}>
          <Text style={[styles.groupTitle, { color: theme.colors.outline }]}>EARLIER</Text>
          
          {/* Upcoming Notification */}
          <View style={[styles.notificationCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
            <View style={styles.cardContent}>
              <View style={[styles.unreadDot, { backgroundColor: 'transparent' }]} />
              <View style={[styles.iconBox, { backgroundColor: theme.colors.secondaryContainer }]}>
                <Text style={[styles.iconText, { color: theme.colors.onSecondaryContainer }]}>📅</Text>
              </View>
              <View style={styles.textContent}>
                <View style={styles.titleRow}>
                  <Text style={[styles.title, { color: theme.colors.onSurface }]}>Upcoming: Gym Session</Text>
                  <Text style={[styles.time, { color: theme.colors.outline }]}>Oct 24</Text>
                </View>
                <Text style={[styles.message, { color: theme.colors.onSurfaceVariant }]}>
                  Don't forget your session tomorrow at 7:00 AM with Trainer Max.
                </Text>
              </View>
            </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    zIndex: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerIcon: {
    fontSize: 20,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '500',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionIcon: {
    fontSize: 24,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 100,
  },
  group: {
    marginBottom: 32,
  },
  groupTitle: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 16,
  },
  notificationCard: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
    marginBottom: 8,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 24,
    gap: 16,
  },
  unreadDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 16,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconText: {
    fontSize: 24,
  },
  textContent: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    flex: 1,
    marginRight: 8,
  },
  time: {
    fontSize: 11,
    fontWeight: '500',
  },
  message: {
    fontSize: 14,
    lineHeight: 20,
  },
  fab: {
    position: 'absolute',
    bottom: 24,
    right: 24,
    width: 56,
    height: 56,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
  },
  fabIcon: {
    fontSize: 32,
  }
});
