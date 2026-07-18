import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export const CategoriesScreen = () => {
  const { theme } = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Top App Bar */}
      <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerLeft}>
          <View style={[styles.avatarContainer, { backgroundColor: theme.colors.primaryFixed }]}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCCqma6NY9qji3jo5LSvF7G1T_gUjhRhwD_Mo7cB5Jnw8sBY4kM2ZrOiNTYbWasJAOB6aOy1Tw94_vHrGhJQH4IZ4RjSyUkgplja7GphNhLMfaz9SOqNVkK1JyD9vGFT8z_8TlsPNGeDpJ5p4brOSd2eCmD9FU7-j1kYbCKSLEuL1rOmm_i5GoImYP_tTkG7yCZ5wZe5LuehkkTs-IqOL4W1xyr0Nj75CjywZyGsCt1egesG4wREJBHyqFyze3JdnNZX4Ct09DyMw0' }} 
              style={styles.avatar} 
            />
          </View>
          <Text style={[styles.headerTitle, { color: theme.colors.primary }]}>Categories</Text>
        </View>
        <TouchableOpacity style={styles.iconButton}>
          <Text style={[styles.iconText, { color: theme.colors.onSurfaceVariant }]}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Summary Section */}
        <View style={styles.summarySection}>
          <View style={[styles.summaryCard, { backgroundColor: theme.colors.primaryContainer }]}>
            <View style={styles.summaryContent}>
              <Text style={[styles.summaryLabel, { color: theme.colors.onPrimaryContainer }]}>Efficiency Overview</Text>
              <Text style={[styles.summaryValue, { color: theme.colors.onPrimaryContainer }]}>8 Categories</Text>
              <Text style={[styles.summaryDesc, { color: theme.colors.onPrimaryContainer }]}>You have 52 active tasks across your life.</Text>
            </View>
            <View style={styles.progressCircle}>
              {/* Fake progress circle for mockup */}
              <View style={[styles.circleRing, { borderColor: theme.colors.onPrimaryContainer }]} />
              <View style={styles.circleTextContainer}>
                <Text style={[styles.circleText, { color: theme.colors.onPrimaryContainer }]}>75%</Text>
              </View>
            </View>
            {/* Decorative element */}
            <View style={styles.decorativeCircle} />
          </View>
        </View>

        {/* Categories Grid */}
        <View style={styles.grid}>
          {/* Personal */}
          <View style={[styles.categoryCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant, borderLeftColor: theme.colors.primary }]}>
            <View style={[styles.categoryIconBg, { backgroundColor: theme.colors.primaryFixed }]}>
              <Text style={[styles.categoryIcon, { color: theme.colors.primary }]}>👤</Text>
            </View>
            <View>
              <Text style={[styles.categoryTitle, { color: theme.colors.onSurface }]}>Personal</Text>
              <Text style={[styles.categoryTasks, { color: theme.colors.onSurfaceVariant }]}>12 Tasks</Text>
            </View>
          </View>

          {/* Work */}
          <View style={[styles.categoryCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant, borderLeftColor: theme.colors.secondary }]}>
            <View style={[styles.categoryIconBg, { backgroundColor: theme.colors.secondaryFixed }]}>
              <Text style={[styles.categoryIcon, { color: theme.colors.secondary }]}>💼</Text>
            </View>
            <View>
              <Text style={[styles.categoryTitle, { color: theme.colors.onSurface }]}>Work</Text>
              <Text style={[styles.categoryTasks, { color: theme.colors.onSurfaceVariant }]}>24 Tasks</Text>
            </View>
          </View>

          {/* Health */}
          <View style={[styles.categoryCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant, borderLeftColor: theme.colors.tertiary }]}>
            <View style={[styles.categoryIconBg, { backgroundColor: theme.colors.tertiaryFixed }]}>
              <Text style={[styles.categoryIcon, { color: theme.colors.tertiary }]}>🏋️</Text>
            </View>
            <View>
              <Text style={[styles.categoryTitle, { color: theme.colors.onSurface }]}>Health</Text>
              <Text style={[styles.categoryTasks, { color: theme.colors.onSurfaceVariant }]}>5 Tasks</Text>
            </View>
          </View>

          {/* Finance */}
          <View style={[styles.categoryCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant, borderLeftColor: theme.colors.error }]}>
            <View style={[styles.categoryIconBg, { backgroundColor: theme.colors.errorContainer }]}>
              <Text style={[styles.categoryIcon, { color: theme.colors.error }]}>💳</Text>
            </View>
            <View>
              <Text style={[styles.categoryTitle, { color: theme.colors.onSurface }]}>Finance</Text>
              <Text style={[styles.categoryTasks, { color: theme.colors.onSurfaceVariant }]}>3 Tasks</Text>
            </View>
          </View>

          {/* Study */}
          <View style={[styles.categoryCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant, borderLeftColor: theme.colors.onSecondaryContainer }]}>
            <View style={[styles.categoryIconBg, { backgroundColor: theme.colors.secondaryContainer }]}>
              <Text style={[styles.categoryIcon, { color: theme.colors.onSecondaryContainer }]}>🎓</Text>
            </View>
            <View>
              <Text style={[styles.categoryTitle, { color: theme.colors.onSurface }]}>Study</Text>
              <Text style={[styles.categoryTasks, { color: theme.colors.onSurfaceVariant }]}>8 Tasks</Text>
            </View>
          </View>

          {/* Shopping */}
          <View style={[styles.categoryCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant, borderLeftColor: theme.colors.onTertiaryContainer }]}>
            <View style={[styles.categoryIconBg, { backgroundColor: theme.colors.tertiaryContainer }]}>
              <Text style={[styles.categoryIcon, { color: theme.colors.onTertiaryContainer }]}>🛒</Text>
            </View>
            <View>
              <Text style={[styles.categoryTitle, { color: theme.colors.onSurface }]}>Shopping</Text>
              <Text style={[styles.categoryTasks, { color: theme.colors.onSurfaceVariant }]}>0 Tasks</Text>
            </View>
          </View>

          {/* Family */}
          <View style={[styles.categoryCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant, borderLeftColor: theme.colors.onPrimaryFixedVariant }]}>
            <View style={[styles.categoryIconBg, { backgroundColor: theme.colors.primaryFixedDim }]}>
              <Text style={[styles.categoryIcon, { color: theme.colors.onPrimaryFixedVariant }]}>👨‍👩‍👧</Text>
            </View>
            <View>
              <Text style={[styles.categoryTitle, { color: theme.colors.onSurface }]}>Family</Text>
              <Text style={[styles.categoryTasks, { color: theme.colors.onSurfaceVariant }]}>0 Tasks</Text>
            </View>
          </View>

          {/* Custom */}
          <View style={[styles.categoryCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant, borderLeftColor: theme.colors.outline }]}>
            <View style={[styles.categoryIconBg, { backgroundColor: theme.colors.surfaceContainerHigh }]}>
              <Text style={[styles.categoryIcon, { color: theme.colors.onSurfaceVariant }]}>+</Text>
            </View>
            <View>
              <Text style={[styles.categoryTitle, { color: theme.colors.onSurface }]}>Custom</Text>
              <Text style={[styles.categoryTasks, { color: theme.colors.onSurfaceVariant }]}>Manage</Text>
            </View>
          </View>
        </View>

        {/* Featured Visual Element */}
        <View style={styles.featuredSection}>
          <View style={styles.featuredCard}>
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsQJyjw1Fiu771aZCH_PoqKXJo1uMFAroN9kubfiS4pdmQ85Jkz1U7pU-mffjoDYYE8DXDr51i7wXP2hJbv76nivd1F3NmjYEbOizK8XBq77cqnWvbJ_zuyTlyJoDCoC1t5y8-P1dblAafkfRdIjrw0t-8LBtvv4NbrzIYRVujoPz4lBFLSM_7d38hrbe2Op11vbpN88DUoks0EducHbnkQNQcdfX9V9NnMw_Sxsh2uGDMr2lxTcI-VQqlRdi2110xaAErTjB6KEk' }} 
              style={styles.featuredImage} 
            />
            <View style={styles.featuredOverlay}>
              <Text style={styles.featuredTitle}>Stay Organized</Text>
              <Text style={styles.featuredDesc}>Personalize your categories for a better workflow.</Text>
            </View>
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
    paddingHorizontal: 20,
    paddingVertical: 16,
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
    gap: 16,
  },
  avatarContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: '100%',
    height: '100%',
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
  iconText: {
    fontSize: 20,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingTop: 24,
    paddingBottom: 100,
  },
  summarySection: {
    marginBottom: 32,
  },
  summaryCard: {
    borderRadius: 24,
    padding: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  summaryContent: {
    flex: 1,
    zIndex: 10,
  },
  summaryLabel: {
    fontSize: 14,
    fontWeight: '500',
    opacity: 0.8,
    marginBottom: 4,
  },
  summaryValue: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  summaryDesc: {
    fontSize: 14,
  },
  progressCircle: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
  },
  circleRing: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 40,
    borderWidth: 6,
    opacity: 0.3,
  },
  circleTextContainer: {
    position: 'absolute',
  },
  circleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  decorativeCircle: {
    position: 'absolute',
    right: -40,
    bottom: -40,
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  categoryCard: {
    width: '47%', // approx half width minus gap
    borderRadius: 20,
    padding: 24,
    borderWidth: 1,
    borderLeftWidth: 6,
    gap: 16,
    elevation: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
  },
  categoryIconBg: {
    width: 48,
    height: 48,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryIcon: {
    fontSize: 24,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '500',
    marginBottom: 4,
  },
  categoryTasks: {
    fontSize: 12,
  },
  featuredSection: {
    marginTop: 32,
  },
  featuredCard: {
    height: 192,
    borderRadius: 24,
    overflow: 'hidden',
    elevation: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },
  featuredImage: {
    width: '100%',
    height: '100%',
  },
  featuredOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 24,
    backgroundColor: 'rgba(0,0,0,0.4)', // Using solid rgba instead of gradient for simplicity, could use LinearGradient if available
  },
  featuredTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '500',
  },
  featuredDesc: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginTop: 4,
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
