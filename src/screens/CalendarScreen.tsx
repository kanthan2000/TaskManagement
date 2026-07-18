import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export const CalendarScreen = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Top App Bar */}
      <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={[styles.iconText, { color: theme.colors.primary }]}>☰</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.colors.primary }]}>Calendar</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={[styles.iconText, { color: theme.colors.onSurfaceVariant }]}>🔍</Text>
          </TouchableOpacity>
          <View style={[styles.avatarContainer, { borderColor: theme.colors.outlineVariant }]}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuD0Zh6tX8yU-7RAsxS4tQXzqpHd95s0QJyCmO5-cQeMp0n-F8OcWcUYiY9CWeeie4PyWYmYF1KGriaOAvf2CgzI3FqoRvrZIy1Mr9_ZoQ3GYsaKpSSDEvyqI9frNcMwiPF8MFc_Ypv0bZUl8-rSANG4quHcjiEi543CsNMnhqOaJJ-D8VaE8F2C9-6g4MGuBECFdtrbXUyLLwHqt0fM3g9CQ7hUVafpz4dzWz6qiNDqQIbwTAUUyiN2uTNFv2crqS0cLwoeSHCRQ' }} 
              style={styles.avatar} 
            />
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Calendar Section */}
        <View style={styles.section}>
          <View style={styles.monthHeader}>
            <Text style={[styles.monthTitle, { color: theme.colors.onSurface }]}>October 2023</Text>
            <View style={styles.monthNav}>
              <TouchableOpacity style={[styles.navButton, { backgroundColor: theme.colors.surfaceContainerLowest }]}>
                <Text style={{ color: theme.colors.onSurface }}>{'<'}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.navButton, { backgroundColor: theme.colors.surfaceContainerLowest }]}>
                <Text style={{ color: theme.colors.onSurface }}>{'>'}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={[styles.calendarCard, { backgroundColor: theme.colors.surfaceContainerLow, borderColor: 'rgba(0,0,0,0.05)' }]}>
            {/* Days of week */}
            <View style={styles.daysRow}>
              {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
                <Text key={idx} style={[styles.dayName, { color: theme.colors.onSurfaceVariant }]}>{day}</Text>
              ))}
            </View>

            {/* Calendar Grid Mockup */}
            <View style={styles.gridRow}>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>1</Text><View style={[styles.dot, { backgroundColor: theme.colors.secondaryContainer }]} /></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>2</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>3</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>4</Text><View style={[styles.dot, { backgroundColor: theme.colors.primary }]} /></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>5</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>6</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>7</Text></View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>8</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>9</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>10</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>11</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>12</Text><View style={[styles.dot, { backgroundColor: theme.colors.tertiaryContainer }]} /></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>13</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>14</Text></View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>15</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>16</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>17</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>18</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>19</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>20</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>21</Text></View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>22</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>23</Text></View>
              <View style={styles.gridCell}>
                <View style={[styles.todayCircle, { backgroundColor: theme.colors.primary }]}>
                  <Text style={[styles.dateText, { color: theme.colors.onPrimary, fontWeight: 'bold' }]}>24</Text>
                </View>
                <View style={styles.dotsRow}>
                  <View style={[styles.dot, { backgroundColor: theme.colors.error, marginTop: 0 }]} />
                  <View style={[styles.dot, { backgroundColor: theme.colors.secondaryContainer, marginTop: 0 }]} />
                  <View style={[styles.dot, { backgroundColor: theme.colors.tertiaryContainer, marginTop: 0 }]} />
                </View>
              </View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>25</Text><View style={[styles.dot, { backgroundColor: theme.colors.secondaryContainer }]} /></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>26</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>27</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>28</Text></View>
            </View>
            <View style={styles.gridRow}>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>29</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>30</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface }]}>31</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface, opacity: 0.2 }]}>1</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface, opacity: 0.2 }]}>2</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface, opacity: 0.2 }]}>3</Text></View>
              <View style={styles.gridCell}><Text style={[styles.dateText, { color: theme.colors.onSurface, opacity: 0.2 }]}>4</Text></View>
            </View>
          </View>
        </View>

        {/* Selected Date Header */}
        <View style={styles.selectedDateHeader}>
          <Text style={[styles.selectedDateTitle, { color: theme.colors.onSurface }]}>Tuesday, Oct 24</Text>
          <View style={[styles.taskCountBadge, { backgroundColor: theme.colors.surfaceContainer }]}>
            <Text style={[styles.taskCountText, { color: theme.colors.onSurfaceVariant }]}>3 Tasks</Text>
          </View>
        </View>

        {/* Agenda List */}
        <View style={styles.agendaList}>
          {/* High Priority Task */}
          <View style={[styles.agendaItem, { backgroundColor: theme.colors.surfaceContainerLowest, borderLeftColor: theme.colors.error }]}>
            <View style={styles.agendaItemContent}>
              <View style={[styles.priorityBadge, { backgroundColor: 'rgba(186, 26, 26, 0.1)' }]}>
                <Text style={[styles.priorityBadgeText, { color: theme.colors.error }]}>HIGH PRIORITY</Text>
              </View>
              <Text style={[styles.taskTitle, { color: theme.colors.onSurface }]}>Client Presentation</Text>
              <View style={styles.taskMetaRow}>
                <View style={styles.taskMetaItem}>
                  <Text style={[styles.metaIcon, { color: theme.colors.onSurfaceVariant }]}>⏱</Text>
                  <Text style={[styles.metaText, { color: theme.colors.onSurfaceVariant }]}>14:00 - 15:30</Text>
                </View>
                <View style={styles.taskMetaItem}>
                  <Text style={[styles.metaIcon, { color: theme.colors.onSurfaceVariant }]}>📍</Text>
                  <Text style={[styles.metaText, { color: theme.colors.onSurfaceVariant }]}>Boardroom A</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.moreButton}>
              <Text style={[styles.moreIcon, { color: theme.colors.onSurfaceVariant }]}>⋮</Text>
            </TouchableOpacity>
          </View>

          {/* Medium Priority Task */}
          <View style={[styles.agendaItem, { backgroundColor: theme.colors.surfaceContainerLowest, borderLeftColor: theme.colors.secondaryContainer }]}>
            <View style={styles.agendaItemContent}>
              <View style={[styles.priorityBadge, { backgroundColor: 'rgba(51, 160, 253, 0.1)' }]}>
                <Text style={[styles.priorityBadgeText, { color: theme.colors.secondary }]}>MEDIUM PRIORITY</Text>
              </View>
              <Text style={[styles.taskTitle, { color: theme.colors.onSurface }]}>Review Q4 Goals</Text>
              <View style={styles.taskMetaRow}>
                <View style={styles.taskMetaItem}>
                  <Text style={[styles.metaIcon, { color: theme.colors.onSurfaceVariant }]}>⏱</Text>
                  <Text style={[styles.metaText, { color: theme.colors.onSurfaceVariant }]}>16:45 - 17:30</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.moreButton}>
              <Text style={[styles.moreIcon, { color: theme.colors.onSurfaceVariant }]}>⋮</Text>
            </TouchableOpacity>
          </View>

          {/* Low Priority Task */}
          <View style={[styles.agendaItem, { backgroundColor: theme.colors.surfaceContainerLowest, borderLeftColor: theme.colors.tertiaryContainer }]}>
            <View style={styles.agendaItemContent}>
              <View style={[styles.priorityBadge, { backgroundColor: 'rgba(0, 105, 27, 0.1)' }]}>
                <Text style={[styles.priorityBadgeText, { color: theme.colors.tertiary }]}>LOW PRIORITY</Text>
              </View>
              <Text style={[styles.taskTitle, { color: theme.colors.onSurface }]}>Team Lunch</Text>
              <View style={styles.taskMetaRow}>
                <View style={styles.taskMetaItem}>
                  <Text style={[styles.metaIcon, { color: theme.colors.onSurfaceVariant }]}>⏱</Text>
                  <Text style={[styles.metaText, { color: theme.colors.onSurfaceVariant }]}>12:30 - 13:30</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.moreButton}>
              <Text style={[styles.moreIcon, { color: theme.colors.onSurfaceVariant }]}>⋮</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={[styles.fab, { backgroundColor: theme.colors.primary }]}>
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
    paddingHorizontal: 16,
    height: 64,
    zIndex: 40,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '500',
  },
  avatarContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 32,
  },
  monthHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  monthTitle: {
    fontSize: 28,
    fontWeight: '600',
  },
  monthNav: {
    flexDirection: 'row',
    gap: 4,
  },
  navButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  calendarCard: {
    borderRadius: 28,
    padding: 24,
    borderWidth: 1,
  },
  daysRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  dayName: {
    flex: 1,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.7,
  },
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  gridCell: {
    flex: 1,
    alignItems: 'center',
    height: 40,
    justifyContent: 'flex-start',
    paddingTop: 4,
  },
  dateText: {
    fontSize: 14,
  },
  dot: {
    width: 4,
    height: 4,
    borderRadius: 2,
    marginTop: 4,
  },
  todayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -4,
  },
  dotsRow: {
    flexDirection: 'row',
    gap: 2,
    marginTop: 4,
  },
  selectedDateHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  selectedDateTitle: {
    fontSize: 22,
    fontWeight: '500',
  },
  taskCountBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  taskCountText: {
    fontSize: 14,
    fontWeight: '500',
  },
  agendaList: {
    gap: 16,
  },
  agendaItem: {
    flexDirection: 'row',
    padding: 24,
    borderRadius: 20,
    borderLeftWidth: 4,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  agendaItemContent: {
    flex: 1,
  },
  priorityBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    marginBottom: 4,
  },
  priorityBadgeText: {
    fontSize: 11,
    fontWeight: '500',
    letterSpacing: 1,
  },
  taskTitle: {
    fontSize: 22,
    fontWeight: '500',
  },
  taskMetaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 8,
  },
  taskMetaItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  metaIcon: {
    fontSize: 18,
  },
  metaText: {
    fontSize: 14,
  },
  moreButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  moreIcon: {
    fontSize: 20,
    fontWeight: 'bold',
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
