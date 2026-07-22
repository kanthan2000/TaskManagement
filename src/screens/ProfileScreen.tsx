import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';

export const ProfileScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Top App Bar */}
      <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => navigation.goBack()}
        >
          <Text style={[styles.actionIcon, { color: theme.colors.primary }]}>←</Text>
        </TouchableOpacity>
        <Text style={[styles.headerTitle, { color: theme.colors.primary }]}>TaskFlow</Text>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={[styles.actionIcon, { color: theme.colors.primary }]}>⚙️</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Profile Header */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarWrapper}>
            <View style={[styles.avatarGradientBorder, { backgroundColor: theme.colors.primary }]}>
              <Image 
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjCzFz5TZ3HYpelOE5fjQCBkQYf4sSGQqZgWumh6x8NOWqnuv-kMKogWFIyJv4GOqnUW_Rdigeh2rEfhLAgLNWw5ehtqAScvjBxaFmRwOxGOiMJJlMhu-URL4pRjrsnAjPlTNT61LMHmclPFzOkXa1Slg4EFT1IpH_y2hPFabujjrA-pu-ylT4iIx8g73Qp9vOPqElydg_Yr5vR6Zpdcjamb9ougUPiRcSNQHs2tFysCzFqzycWTmwVBNAtELRcTvkvBMxWEyX3f0' }} 
                style={[styles.avatar, { borderColor: theme.colors.surface }]} 
              />
            </View>
            <TouchableOpacity style={[styles.editButton, { backgroundColor: theme.colors.primary }]}>
              <Text style={[styles.editIcon, { color: theme.colors.onPrimary }]}>✏️</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.userInfo}>
            <Text style={[styles.userName, { color: theme.colors.onSurface }]}>Alex Morgan</Text>
            <Text style={[styles.userEmail, { color: theme.colors.onSurfaceVariant }]}>alex.morgan@taskflow.io</Text>
            <View style={[styles.badge, { backgroundColor: theme.colors.secondaryContainer }]}>
              <Text style={[styles.badgeIcon, { color: theme.colors.onSecondaryContainer }]}>🌟</Text>
              <Text style={[styles.badgeText, { color: theme.colors.onSecondaryContainer }]}>Gold Member</Text>
            </View>
          </View>
        </View>

        {/* Stats Overview */}
        <View style={styles.statsGrid}>
          <View style={[styles.statCardLeft, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
            <View style={styles.statHeader}>
              <Text style={[styles.statIcon, { color: theme.colors.primary }]}>☑️</Text>
              <View style={[styles.percentBadge, { backgroundColor: theme.colors.tertiaryFixed }]}>
                <Text style={[styles.percentText, { color: theme.colors.tertiary }]}>+12%</Text>
              </View>
            </View>
            <View>
              <Text style={[styles.statValue, { color: theme.colors.primary }]}>128</Text>
              <Text style={[styles.statLabel, { color: theme.colors.onSurfaceVariant }]}>Tasks Completed</Text>
            </View>
          </View>
          
          <View style={[styles.statCardSmall, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
            <Text style={[styles.statIcon, { color: theme.colors.secondary }]}>⏱</Text>
            <View>
              <Text style={[styles.statValueSmall, { color: theme.colors.secondary }]}>42.5</Text>
              <Text style={[styles.statLabel, { color: theme.colors.onSurfaceVariant }]}>Hours Focused</Text>
            </View>
          </View>

          <View style={[styles.statCardSmall, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
            <Text style={[styles.statIcon, { color: theme.colors.tertiary }]}>🏆</Text>
            <View>
              <Text style={[styles.statValueSmall, { color: theme.colors.tertiary }]}>#42</Text>
              <Text style={[styles.statLabel, { color: theme.colors.onSurfaceVariant }]}>Global Rank</Text>
            </View>
          </View>
        </View>

        {/* Account Settings */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.onSurfaceVariant }]}>ACCOUNT SETTINGS</Text>
          <View style={[styles.menuList, { backgroundColor: theme.colors.surfaceContainerLow }]}>
            
            <TouchableOpacity style={styles.menuItem}>
              <View style={[styles.menuIconBg, { backgroundColor: 'rgba(36, 56, 156, 0.1)' }]}>
                <Text style={[styles.menuIcon, { color: theme.colors.primary }]}>👤</Text>
              </View>
              <View style={styles.menuTextContent}>
                <Text style={[styles.menuTitle, { color: theme.colors.onSurface }]}>Personal Information</Text>
                <Text style={[styles.menuSubtitle, { color: theme.colors.onSurfaceVariant }]}>Name, email, and phone</Text>
              </View>
              <Text style={[styles.chevron, { color: theme.colors.outline }]}>›</Text>
            </TouchableOpacity>
            <View style={[styles.divider, { backgroundColor: 'rgba(197, 197, 212, 0.2)' }]} />

            <TouchableOpacity style={styles.menuItem}>
              <View style={[styles.menuIconBg, { backgroundColor: theme.colors.errorContainer }]}>
                <Text style={[styles.menuIcon, { color: theme.colors.error }]}>🛡️</Text>
              </View>
              <View style={styles.menuTextContent}>
                <Text style={[styles.menuTitle, { color: theme.colors.onSurface }]}>Security</Text>
                <Text style={[styles.menuSubtitle, { color: theme.colors.onSurfaceVariant }]}>Password and 2FA</Text>
              </View>
              <Text style={[styles.chevron, { color: theme.colors.outline }]}>›</Text>
            </TouchableOpacity>
            <View style={[styles.divider, { backgroundColor: 'rgba(197, 197, 212, 0.2)' }]} />

            <TouchableOpacity style={styles.menuItem}>
              <View style={[styles.menuIconBg, { backgroundColor: 'rgba(0, 105, 27, 0.1)' }]}>
                <Text style={[styles.menuIcon, { color: theme.colors.tertiary }]}>💳</Text>
              </View>
              <View style={styles.menuTextContent}>
                <Text style={[styles.menuTitle, { color: theme.colors.onSurface }]}>Subscription</Text>
                <Text style={[styles.menuSubtitle, { color: theme.colors.onSurfaceVariant }]}>Manage Gold Member perks</Text>
              </View>
              <Text style={[styles.chevron, { color: theme.colors.outline }]}>›</Text>
            </TouchableOpacity>
            <View style={[styles.divider, { backgroundColor: 'rgba(197, 197, 212, 0.2)' }]} />

            <TouchableOpacity style={styles.menuItem}>
              <View style={[styles.menuIconBg, { backgroundColor: 'rgba(51, 160, 253, 0.1)' }]}>
                <Text style={[styles.menuIcon, { color: theme.colors.secondary }]}>🔗</Text>
              </View>
              <View style={styles.menuTextContent}>
                <Text style={[styles.menuTitle, { color: theme.colors.onSurface }]}>Linked Accounts</Text>
                <Text style={[styles.menuSubtitle, { color: theme.colors.onSurfaceVariant }]}>Google, Slack, and GitHub</Text>
              </View>
              <Text style={[styles.chevron, { color: theme.colors.outline }]}>›</Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* General Settings */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.onSurfaceVariant }]}>GENERAL</Text>
          <View style={[styles.menuList, { backgroundColor: theme.colors.surfaceContainerLow }]}>
            <TouchableOpacity style={styles.menuItem}>
              <View style={[styles.menuIconBg, { backgroundColor: theme.colors.surfaceVariant }]}>
                <Text style={[styles.menuIcon, { color: theme.colors.onSurfaceVariant }]}>❓</Text>
              </View>
              <View style={styles.menuTextContent}>
                <Text style={[styles.menuTitle, { color: theme.colors.onSurface }]}>Help & Feedback</Text>
              </View>
              <Text style={[styles.chevron, { color: theme.colors.outline }]}>›</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Logout */}
        <TouchableOpacity style={[styles.logoutButton, { backgroundColor: theme.colors.errorContainer }]}>
          <Text style={[styles.logoutIcon, { color: theme.colors.onErrorContainer }]}>🚪</Text>
          <Text style={[styles.logoutText, { color: theme.colors.onErrorContainer }]}>Logout</Text>
        </TouchableOpacity>

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
    paddingHorizontal: 20,
    paddingVertical: 16,
    zIndex: 10,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
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
    paddingTop: 24,
    paddingBottom: 100,
  },
  profileHeader: {
    alignItems: 'center',
    marginBottom: 32,
  },
  avatarWrapper: {
    position: 'relative',
    marginBottom: 16,
  },
  avatarGradientBorder: {
    width: 128,
    height: 128,
    borderRadius: 64,
    padding: 4,
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
    borderWidth: 4,
  },
  editButton: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  editIcon: {
    fontSize: 16,
  },
  userInfo: {
    alignItems: 'center',
  },
  userName: {
    fontSize: 22,
    fontWeight: '500',
  },
  userEmail: {
    fontSize: 14,
    marginBottom: 8,
  },
  badge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  badgeIcon: {
    fontSize: 14,
  },
  badgeText: {
    fontSize: 14,
    fontWeight: '500',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginBottom: 32,
  },
  statCardLeft: {
    width: '100%',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    height: 140,
    justifyContent: 'space-between',
  },
  statCardSmall: {
    width: '47%',
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    height: 140,
    justifyContent: 'space-between',
  },
  statHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  statIcon: {
    fontSize: 24,
  },
  percentBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  percentText: {
    fontSize: 11,
    fontWeight: '500',
  },
  statValue: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  statValueSmall: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  statLabel: {
    fontSize: 14,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  menuList: {
    borderRadius: 24,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    gap: 16,
  },
  menuIconBg: {
    width: 40,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    fontSize: 20,
  },
  menuTextContent: {
    flex: 1,
  },
  menuTitle: {
    fontSize: 16,
  },
  menuSubtitle: {
    fontSize: 11,
  },
  chevron: {
    fontSize: 24,
  },
  divider: {
    height: 1,
    marginHorizontal: 24,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    borderRadius: 20,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  logoutIcon: {
    fontSize: 20,
  },
  logoutText: {
    fontSize: 22,
    fontWeight: '500',
  }
});
