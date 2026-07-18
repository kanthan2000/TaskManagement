import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export const AnalyticsScreen = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Top App Bar */}
      <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={[styles.iconText, { color: theme.colors.primary }]}>☰</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.colors.primary }]}>Analytics</Text>
        </View>
        <View style={[styles.avatarContainer, { borderColor: theme.colors.primaryContainer }]}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDPhQWgHh9SuUaKTG8n701x0RXJZ60xBMW46D0gl082nMaL9Rs48z7O9hDO_sSleGNXf54Dnt7ChX_O2jngCUcQHbe8hEgqJrzrFdwkWAvdaqETZVv1VpsJ9FuJeS4DfFga5zxOtobefiA1HMMcuoKPMhxUVdm4aXn9uzxri8sh859evqCsbgKDZSl6xEKR1dYIk9wbFYgC1VYRuLFG_dTqMaNIz0pVlG1z2Us7NIENHKNarB-JXE-RCXydgT4kWvPNot-wAJapnv4' }} 
            style={styles.avatar} 
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Header Message */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.onSurface }]}>Daily Report</Text>
          <Text style={[styles.sectionSubtitle, { color: theme.colors.onSurfaceVariant }]}>Your productivity is up 12% from last week. Great job, Alex!</Text>
        </View>

        {/* 1. Overview Cards */}
        <View style={styles.overviewGrid}>
          {/* Tasks Completed */}
          <View style={[styles.overviewCard, { backgroundColor: theme.colors.surface, borderColor: theme.colors.outlineVariant }]}>
            <Text style={[styles.overviewIcon, { color: theme.colors.primary }]}>☑️</Text>
            <View>
              <Text style={[styles.overviewValue, { color: theme.colors.primary }]}>124</Text>
              <Text style={[styles.overviewLabel, { color: theme.colors.onSurfaceVariant }]}>Tasks Completed</Text>
            </View>
          </View>

          {/* Completion Rate */}
          <View style={[styles.overviewCard, { backgroundColor: theme.colors.surface, borderColor: theme.colors.outlineVariant }]}>
            <Text style={[styles.overviewIcon, { color: theme.colors.secondary }]}>📊</Text>
            <View>
              <Text style={[styles.overviewValue, { color: theme.colors.secondary }]}>88%</Text>
              <Text style={[styles.overviewLabel, { color: theme.colors.onSurfaceVariant }]}>Completion Rate</Text>
            </View>
          </View>

          {/* Day Streak */}
          <View style={[styles.overviewCard, { backgroundColor: theme.colors.surface, borderColor: theme.colors.outlineVariant }]}>
            <Text style={[styles.overviewIcon, { color: theme.colors.tertiary }]}>⚡</Text>
            <View>
              <Text style={[styles.overviewValue, { color: theme.colors.tertiary }]}>12</Text>
              <Text style={[styles.overviewLabel, { color: theme.colors.onSurfaceVariant }]}>Day Streak</Text>
            </View>
          </View>

          {/* Efficiency Score */}
          <View style={[styles.overviewCard, { backgroundColor: theme.colors.surface, borderColor: theme.colors.outlineVariant }]}>
            <Text style={[styles.overviewIcon, { color: theme.colors.primary }]}>⭐</Text>
            <View>
              <Text style={[styles.overviewValue, { color: theme.colors.primary }]}>92</Text>
              <Text style={[styles.overviewLabel, { color: theme.colors.onSurfaceVariant }]}>Efficiency Score</Text>
            </View>
          </View>
        </View>

        <View style={styles.twoColumnGrid}>
          {/* 2. Weekly Progress Chart */}
          <View style={[styles.chartCard, { backgroundColor: theme.colors.surface, borderColor: theme.colors.outlineVariant }]}>
            <View style={styles.chartHeader}>
              <Text style={[styles.cardTitle, { color: theme.colors.onSurface }]}>Weekly Progress</Text>
              <View style={[styles.dateBadge, { backgroundColor: theme.colors.secondaryFixed }]}>
                <Text style={[styles.dateBadgeText, { color: theme.colors.onSecondaryFixed }]}>Oct 23 – 29</Text>
              </View>
            </View>
            <View style={styles.chartArea}>
              {[
                { day: 'Mon', height: '85%', color: theme.colors.primary, active: true },
                { day: 'Tue', height: '60%', color: theme.colors.secondaryContainer, active: false },
                { day: 'Wed', height: '75%', color: theme.colors.secondaryContainer, active: false },
                { day: 'Thu', height: '45%', color: theme.colors.secondaryContainer, active: false },
                { day: 'Fri', height: '90%', color: theme.colors.secondaryContainer, active: false },
                { day: 'Sat', height: '30%', color: theme.colors.secondaryContainer, active: false },
                { day: 'Sun', height: '20%', color: theme.colors.secondaryContainer, active: false },
              ].map((item, idx) => (
                <View key={idx} style={styles.barCol}>
                  <View style={[styles.bar, { height: item.height as any, backgroundColor: item.color }]} />
                  <Text style={[styles.barLabel, { color: item.active ? theme.colors.primary : theme.colors.onSurfaceVariant, fontWeight: item.active ? 'bold' : 'normal' }]}>{item.day}</Text>
                </View>
              ))}
            </View>
          </View>

          {/* 3. Category Breakdown */}
          <View style={[styles.chartCard, { backgroundColor: theme.colors.surface, borderColor: theme.colors.outlineVariant }]}>
            <Text style={[styles.cardTitle, { color: theme.colors.onSurface, marginBottom: 16 }]}>Category Share</Text>
            <View style={styles.categoryList}>
              {[
                { name: 'Work', percent: '45%', flex: 0.45, color: theme.colors.primary },
                { name: 'Personal', percent: '30%', flex: 0.3, color: theme.colors.secondary },
                { name: 'Health', percent: '15%', flex: 0.15, color: theme.colors.tertiary },
                { name: 'Others', percent: '10%', flex: 0.1, color: theme.colors.outline },
              ].map((cat, idx) => (
                <View key={idx} style={styles.categoryItem}>
                  <View style={styles.categoryRow}>
                    <Text style={[styles.categoryName, { color: theme.colors.onSurface }]}>{cat.name}</Text>
                    <Text style={[styles.categoryPercent, { color: theme.colors.onSurface }]}>{cat.percent}</Text>
                  </View>
                  <View style={[styles.progressBarBg, { backgroundColor: theme.colors.surfaceVariant }]}>
                    <View style={[styles.progressBarFill, { backgroundColor: cat.color, flex: cat.flex }]} />
                  </View>
                </View>
              ))}
            </View>
            <TouchableOpacity style={styles.viewDetailsButton}>
              <Text style={[styles.viewDetailsText, { color: theme.colors.primary }]}>View Details</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 4. Priority Distribution */}
        <View style={styles.section}>
          <Text style={[styles.cardTitle, { color: theme.colors.onSurface, marginBottom: 16 }]}>Task Priorities</Text>
          <View style={styles.priorityGrid}>
            <View style={[styles.priorityCard, { backgroundColor: theme.colors.surface, borderLeftColor: theme.colors.error }]}>
              <View style={[styles.priorityIconBg, { backgroundColor: theme.colors.errorContainer }]}>
                <Text style={[styles.priorityIcon, { color: theme.colors.error }]}>🔴</Text>
              </View>
              <View>
                <Text style={[styles.priorityValue, { color: theme.colors.onSurface }]}>12</Text>
                <Text style={[styles.priorityLabel, { color: theme.colors.onSurfaceVariant }]}>High Priority</Text>
              </View>
            </View>

            <View style={[styles.priorityCard, { backgroundColor: theme.colors.surface, borderLeftColor: theme.colors.secondary }]}>
              <View style={[styles.priorityIconBg, { backgroundColor: theme.colors.secondaryFixed }]}>
                <Text style={[styles.priorityIcon, { color: theme.colors.secondary }]}>🟡</Text>
              </View>
              <View>
                <Text style={[styles.priorityValue, { color: theme.colors.onSurface }]}>24</Text>
                <Text style={[styles.priorityLabel, { color: theme.colors.onSurfaceVariant }]}>Medium Priority</Text>
              </View>
            </View>

            <View style={[styles.priorityCard, { backgroundColor: theme.colors.surface, borderLeftColor: theme.colors.tertiary }]}>
              <View style={[styles.priorityIconBg, { backgroundColor: theme.colors.tertiaryFixed }]}>
                <Text style={[styles.priorityIcon, { color: theme.colors.tertiary }]}>🟢</Text>
              </View>
              <View>
                <Text style={[styles.priorityValue, { color: theme.colors.onSurface }]}>8</Text>
                <Text style={[styles.priorityLabel, { color: theme.colors.onSurfaceVariant }]}>Low Priority</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Asymmetric Detail Section */}
        <View style={styles.asymmetricSection}>
          <View style={[styles.snapshotCard, { backgroundColor: 'rgba(255,255,255,0.7)', borderColor: 'rgba(224,224,224,0.5)' }]}>
            <View style={styles.snapshotHeader}>
              <Text style={[styles.snapshotTitle, { color: theme.colors.primary }]}>October Snapshot</Text>
              <Text style={[styles.snapshotDesc, { color: theme.colors.onSurfaceVariant }]}>You've reached your highest productivity streak of the year during the first week of October.</Text>
            </View>
            <View style={styles.snapshotStats}>
              <View style={[styles.statBox, { backgroundColor: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.8)' }]}>
                <Text style={[styles.statValue, { color: theme.colors.onSurface }]}>422</Text>
                <Text style={[styles.statLabel, { color: theme.colors.onSurfaceVariant }]}>Total Hours</Text>
              </View>
              <View style={[styles.statBox, { backgroundColor: 'rgba(255,255,255,0.5)', borderColor: 'rgba(255,255,255,0.8)' }]}>
                <Text style={[styles.statValue, { color: theme.colors.onSurface }]}>18</Text>
                <Text style={[styles.statLabel, { color: theme.colors.onSurfaceVariant }]}>Projects</Text>
              </View>
            </View>
          </View>

          <View style={styles.insightCard}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCInJFM8Tdop2__pQnDNtm6LkGz9SdvQ0yiSLTUO9bpwSOcgc5L7kCbsimg8zJxMGZvFWvTpJ3wNevNf1gx--PtLg80wBVeYhHLOoKBidU1JWOjTKJfjHw7FnBxsoTfy2jNU9LH_kKRsQgCbd59pNChKlTpGELczjQPxnk_FWOcKWusbHnIXWPhJTwEGAE_8u6SQePP27gSpUjLHe77OkpU-FwvxQ1cID3saEJC412pdbCkFt2m-jO8n0DRTy7bbydD1LRMCpiNLJQ' }} 
              style={styles.insightImage} 
            />
            <View style={styles.insightOverlay}>
              <Text style={styles.insightTitle}>Insight of the Day</Text>
              <Text style={styles.insightDesc}>Most tasks are finished between 9:00 AM and 11:30 AM.</Text>
            </View>
          </View>
        </View>

      </ScrollView>
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
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
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
    fontSize: 24,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: '500',
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    overflow: 'hidden',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: '600',
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 14,
  },
  overviewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 32,
  },
  overviewCard: {
    width: '47%',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    height: 128,
    justifyContent: 'space-between',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  overviewIcon: {
    fontSize: 20,
  },
  overviewValue: {
    fontSize: 32,
    fontWeight: '700',
    marginLeft: -4,
  },
  overviewLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  twoColumnGrid: {
    gap: 32,
    marginBottom: 32,
  },
  chartCard: {
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  chartHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: '500',
  },
  dateBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  dateBadgeText: {
    fontSize: 11,
    fontWeight: '500',
  },
  chartArea: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: 192,
    paddingHorizontal: 8,
  },
  barCol: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
    height: '100%',
    justifyContent: 'flex-end',
  },
  bar: {
    width: '80%',
    maxWidth: 40,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  barLabel: {
    fontSize: 14,
  },
  categoryList: {
    gap: 16,
  },
  categoryItem: {
    gap: 4,
  },
  categoryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categoryName: {
    fontSize: 14,
  },
  categoryPercent: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  progressBarBg: {
    height: 8,
    borderRadius: 4,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 4,
  },
  viewDetailsButton: {
    marginTop: 24,
    paddingVertical: 8,
    alignItems: 'center',
    borderRadius: 20,
  },
  viewDetailsText: {
    fontSize: 14,
    fontWeight: '500',
  },
  priorityGrid: {
    gap: 16,
  },
  priorityCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 24,
    padding: 24,
    borderRadius: 20,
    borderLeftWidth: 6,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  priorityIconBg: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priorityIcon: {
    fontSize: 24,
  },
  priorityValue: {
    fontSize: 28,
    fontWeight: '600',
  },
  priorityLabel: {
    fontSize: 14,
  },
  asymmetricSection: {
    gap: 24,
  },
  snapshotCard: {
    borderRadius: 20,
    padding: 32,
    borderWidth: 1,
  },
  snapshotHeader: {
    marginBottom: 24,
  },
  snapshotTitle: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 4,
  },
  snapshotDesc: {
    fontSize: 14,
  },
  snapshotStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  statValue: {
    fontSize: 28,
    fontWeight: '600',
  },
  statLabel: {
    fontSize: 11,
    opacity: 0.7,
  },
  insightCard: {
    height: 256,
    borderRadius: 20,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  insightImage: {
    width: '100%',
    height: '100%',
  },
  insightOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  insightTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '500',
  },
  insightDesc: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginTop: 4,
  }
});
