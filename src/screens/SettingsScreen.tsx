import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Switch, Image } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export const SettingsScreen = () => {
  const { theme } = useTheme();
  
  // State for toggles
  const [remindersEnabled, setRemindersEnabled] = useState(true);
  const [pushEnabled, setPushEnabled] = useState(false);
  
  // State for selections (Mock)
  const [activeTheme, setActiveTheme] = useState('system');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Top App Bar */}
      <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerLeft}>
          <TouchableOpacity style={styles.iconButton}>
            <Text style={[styles.actionIcon, { color: theme.colors.primary }]}>☰</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.colors.primary }]}>TaskFlow</Text>
        </View>
        <View style={[styles.avatarContainer, { backgroundColor: theme.colors.primaryContainer }]}>
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgUfRbvvD92Vv0i7BD1UvshJb1Z__nmlGrNXdSO2PzkSXzEOojaTB8tOTnlGfpp5x5EdkfaIb1HCQZqdxNn02GcoJRKMY2sNfsvWpMfRJ8V8x8QRAGiyHDlOR2_XD-TxTy_h1pWEbjGkVL3X0W7lKcKMaOn7Ip-03OVw5J5KrHVtZ4tAnJCv9c6MhmNMd24sIPAVOFxK5Xf3bHRNFOHi3uittnM4UXg7064NJlNvEXa1SXlVNVSNVc_6FNdKiu-YsA9TQJro__npE' }} 
            style={styles.avatar} 
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Profile Section */}
        <View style={[styles.profileCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
          <View style={styles.profileAvatarWrapper}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC77OaufBRM2q_TolmwTXvZ-lo_W_NT8DpHD0BytnD7UBE-jPxW-hlsi5Gj6zuHk-9KKxfje4AqJN0rbtO6fZiaeM6Wc3DS4u2EYOMzSGpXa-Nh0WgaFzFAXANI0TNFqmjfUICP_BGT-bl4TfDBF9ha7hn8NDTY8t2iMn83xoh2AwOhZEZXOLoETYagjeJoyhAHTZhTjgTnFGq4FRDLd1Go_hpq6ZJmscvKejKKW4QG-eaxE6Ox5AM-7gTRT3rrIxMZM1GcsXjxtvo' }} 
              style={[styles.profileAvatar, { borderColor: theme.colors.primaryContainer }]} 
            />
            <View style={[styles.profileEditIconBg, { backgroundColor: theme.colors.primary, borderColor: theme.colors.surface }]}>
              <Text style={[styles.profileEditIcon, { color: theme.colors.onPrimary }]}>✏️</Text>
            </View>
          </View>
          <View style={styles.profileInfo}>
            <Text style={[styles.profileName, { color: theme.colors.onSurface }]}>Alex Morgan</Text>
            <Text style={[styles.profileEmail, { color: theme.colors.onSurfaceVariant }]}>alex@taskflow.com</Text>
            <View style={[styles.premiumBadge, { backgroundColor: theme.colors.secondaryFixed }]}>
              <Text style={[styles.premiumText, { color: theme.colors.onSecondaryFixed }]}>Premium Member</Text>
            </View>
          </View>
        </View>

        {/* Section 1: Appearance */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>APPEARANCE</Text>
          <View style={[styles.sectionCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
            <Text style={[styles.sectionSubtitle, { color: theme.colors.onSurfaceVariant }]}>Choose your preferred visual style for the interface.</Text>
            
            <View style={styles.themeGrid}>
              <TouchableOpacity 
                style={[styles.themeOption, activeTheme === 'light' ? { borderColor: theme.colors.primary, backgroundColor: 'rgba(36, 56, 156, 0.05)' } : { borderColor: 'transparent' }]}
                onPress={() => setActiveTheme('light')}
              >
                <View style={[styles.themePreview, { backgroundColor: '#ffffff', borderColor: theme.colors.outlineVariant }]}>
                  <Text style={[styles.themeIcon, { color: theme.colors.primary }]}>☀️</Text>
                </View>
                <Text style={[styles.themeLabel, { color: theme.colors.onSurface }]}>Light</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.themeOption, activeTheme === 'dark' ? { borderColor: theme.colors.primary, backgroundColor: 'rgba(36, 56, 156, 0.05)' } : { borderColor: 'transparent' }]}
                onPress={() => setActiveTheme('dark')}
              >
                <View style={[styles.themePreview, { backgroundColor: '#0f172a', borderColor: '#334155' }]}>
                  <Text style={[styles.themeIcon, { color: theme.colors.primaryFixedDim }]}>🌙</Text>
                </View>
                <Text style={[styles.themeLabel, { color: theme.colors.onSurface }]}>Dark</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.themeOption, activeTheme === 'system' ? { borderColor: theme.colors.primary, backgroundColor: 'rgba(36, 56, 156, 0.05)' } : { borderColor: 'transparent' }]}
                onPress={() => setActiveTheme('system')}
              >
                <View style={[styles.themePreview, { backgroundColor: '#e2e8f0', borderColor: theme.colors.outlineVariant }]}>
                  {/* Mocking gradient visually */}
                  <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(255,255,255,0.5)', borderTopLeftRadius: 8, borderBottomLeftRadius: 8, width: '50%' }]} />
                  <View style={[StyleSheet.absoluteFill, { backgroundColor: 'rgba(15,23,42,0.8)', borderTopRightRadius: 8, borderBottomRightRadius: 8, width: '50%', left: '50%' }]} />
                  <Text style={[styles.themeIcon, { color: theme.colors.primary }]}>⚙️</Text>
                </View>
                <Text style={[styles.themeLabel, { color: theme.colors.onSurface }]}>System</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Section 2: Notifications */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>NOTIFICATIONS</Text>
          <View style={[styles.listCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
            
            <View style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Text style={[styles.listIcon, { color: theme.colors.onSurfaceVariant }]}>🔔</Text>
                <View>
                  <Text style={[styles.listItemTitle, { color: theme.colors.onSurface }]}>Reminder Settings</Text>
                  <Text style={[styles.listItemDesc, { color: theme.colors.onSurfaceVariant }]}>Alert me for upcoming tasks</Text>
                </View>
              </View>
              <Switch 
                value={remindersEnabled} 
                onValueChange={setRemindersEnabled} 
                trackColor={{ false: theme.colors.surfaceVariant, true: theme.colors.primaryContainer }}
                thumbColor={remindersEnabled ? theme.colors.primary : theme.colors.surface}
              />
            </View>
            <View style={[styles.divider, { backgroundColor: theme.colors.outlineVariant }]} />
            
            <View style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Text style={[styles.listIcon, { color: theme.colors.onSurfaceVariant }]}>📡</Text>
                <View>
                  <Text style={[styles.listItemTitle, { color: theme.colors.onSurface }]}>Push Notifications</Text>
                  <Text style={[styles.listItemDesc, { color: theme.colors.onSurfaceVariant }]}>Real-time task updates</Text>
                </View>
              </View>
              <Switch 
                value={pushEnabled} 
                onValueChange={setPushEnabled} 
                trackColor={{ false: theme.colors.surfaceVariant, true: theme.colors.primaryContainer }}
                thumbColor={pushEnabled ? theme.colors.primary : theme.colors.surface}
              />
            </View>

          </View>
        </View>

        {/* Section 3: Task Defaults */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>TASK DEFAULTS</Text>
          <View style={[styles.listCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
            
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Text style={[styles.listIcon, { color: theme.colors.onSurfaceVariant }]}>❗</Text>
                <Text style={[styles.listItemTitle, { color: theme.colors.onSurface }]}>Default Priority</Text>
              </View>
              <View style={[styles.selectBox, { backgroundColor: theme.colors.surfaceContainer }]}>
                <Text style={[styles.selectText, { color: theme.colors.onSurface }]}>Medium</Text>
              </View>
            </TouchableOpacity>
            <View style={[styles.divider, { backgroundColor: theme.colors.outlineVariant }]} />
            
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Text style={[styles.listIcon, { color: theme.colors.onSurfaceVariant }]}>⏱</Text>
                <Text style={[styles.listItemTitle, { color: theme.colors.onSurface }]}>Default Reminder</Text>
              </View>
              <View style={[styles.selectBox, { backgroundColor: theme.colors.surfaceContainer }]}>
                <Text style={[styles.selectText, { color: theme.colors.onSurface }]}>15 mins</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>

        {/* Section 4: General */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>GENERAL</Text>
          <View style={[styles.listCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
            
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Text style={[styles.listIcon, { color: theme.colors.onSurfaceVariant }]}>🌐</Text>
                <Text style={[styles.listItemTitle, { color: theme.colors.onSurface }]}>Language</Text>
              </View>
              <View style={styles.listItemRight}>
                <Text style={[styles.rightValueText, { color: theme.colors.onSurfaceVariant }]}>English</Text>
                <Text style={[styles.chevron, { color: theme.colors.outline }]}>›</Text>
              </View>
            </TouchableOpacity>
            <View style={[styles.divider, { backgroundColor: theme.colors.outlineVariant }]} />
            
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Text style={[styles.listIcon, { color: theme.colors.onSurfaceVariant }]}>☁️</Text>
                <Text style={[styles.listItemTitle, { color: theme.colors.onSurface }]}>Backup</Text>
              </View>
              <Text style={[styles.chevron, { color: theme.colors.outline }]}>›</Text>
            </TouchableOpacity>
            <View style={[styles.divider, { backgroundColor: theme.colors.outlineVariant }]} />
            
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Text style={[styles.listIcon, { color: theme.colors.onSurfaceVariant }]}>📄</Text>
                <Text style={[styles.listItemTitle, { color: theme.colors.onSurface }]}>Export Data</Text>
              </View>
              <Text style={[styles.chevron, { color: theme.colors.outline }]}>›</Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* Section 5: Support & Info */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.colors.primary }]}>SUPPORT & INFO</Text>
          <View style={[styles.listCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant }]}>
            
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Text style={[styles.listIcon, { color: theme.colors.onSurfaceVariant }]}>ℹ️</Text>
                <Text style={[styles.listItemTitle, { color: theme.colors.onSurface }]}>About</Text>
              </View>
              <Text style={[styles.chevron, { color: theme.colors.outline }]}>›</Text>
            </TouchableOpacity>
            <View style={[styles.divider, { backgroundColor: theme.colors.outlineVariant }]} />
            
            <TouchableOpacity style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Text style={[styles.listIcon, { color: theme.colors.onSurfaceVariant }]}>🔒</Text>
                <Text style={[styles.listItemTitle, { color: theme.colors.onSurface }]}>Privacy Policy</Text>
              </View>
              <Text style={[styles.chevron, { color: theme.colors.outline }]}>›</Text>
            </TouchableOpacity>
            <View style={[styles.divider, { backgroundColor: theme.colors.outlineVariant }]} />
            
            <View style={styles.listItem}>
              <View style={styles.listItemLeft}>
                <Text style={[styles.listIcon, { color: theme.colors.onSurfaceVariant }]}>🛡️</Text>
                <Text style={[styles.listItemTitle, { color: theme.colors.onSurface }]}>Version</Text>
              </View>
              <Text style={[styles.rightValueText, { color: theme.colors.outline }]}>v2.4.0</Text>
            </View>

          </View>
        </View>

        {/* Logout Action */}
        <TouchableOpacity style={[styles.logoutButton, { backgroundColor: theme.colors.errorContainer }]}>
          <Text style={[styles.logoutIcon, { color: theme.colors.onErrorContainer }]}>🚪</Text>
          <Text style={[styles.logoutText, { color: theme.colors.onErrorContainer }]}>Sign Out</Text>
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
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
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
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
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
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 100,
  },
  profileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
    borderRadius: 20,
    borderWidth: 1,
    marginBottom: 32,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  profileAvatarWrapper: {
    position: 'relative',
    marginRight: 16,
  },
  profileAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 4,
  },
  profileEditIconBg: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
  },
  profileEditIcon: {
    fontSize: 12,
  },
  profileInfo: {
    flex: 1,
    alignItems: 'flex-start',
  },
  profileName: {
    fontSize: 22,
    fontWeight: '500',
  },
  profileEmail: {
    fontSize: 14,
    marginBottom: 6,
  },
  premiumBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  premiumText: {
    fontSize: 11,
    fontWeight: '500',
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
  sectionCard: {
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
  },
  sectionSubtitle: {
    fontSize: 14,
    marginBottom: 16,
  },
  themeGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  themeOption: {
    flex: 1,
    alignItems: 'center',
    padding: 8,
    borderRadius: 12,
    borderWidth: 2,
  },
  themePreview: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    position: 'relative',
    overflow: 'hidden',
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  themeIcon: {
    fontSize: 32,
    zIndex: 10,
  },
  themeLabel: {
    fontSize: 14,
    fontWeight: '500',
  },
  listCard: {
    borderRadius: 20,
    borderWidth: 1,
    overflow: 'hidden',
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  listItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  listIcon: {
    fontSize: 20,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  listItemDesc: {
    fontSize: 14,
  },
  divider: {
    height: 1,
    opacity: 0.5,
  },
  selectBox: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 12,
  },
  selectText: {
    fontSize: 14,
  },
  listItemRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rightValueText: {
    fontSize: 14,
  },
  chevron: {
    fontSize: 24,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 16,
    borderRadius: 20,
    marginBottom: 32,
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
    fontWeight: 'bold',
  }
});
