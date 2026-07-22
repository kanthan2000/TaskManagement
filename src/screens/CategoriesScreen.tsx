import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '../theme/ThemeProvider';
import { useTaskStore } from '../store/useTaskStore';

export const CategoriesScreen = () => {
  const { theme } = useTheme();
  const navigation = useNavigation<any>();

  const tasks = useTaskStore(state => state.tasks);
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(t => t.completed).length;
  const completionPercent = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const categories = [
    { id: 'Personal', icon: '👤', color: theme.colors.primary, bg: theme.colors.primaryFixed },
    { id: 'Work', icon: '💼', color: theme.colors.secondary, bg: theme.colors.secondaryFixed },
    { id: 'Health', icon: '🏋️', color: theme.colors.tertiary, bg: theme.colors.tertiaryFixed },
    { id: 'Finance', icon: '💳', color: theme.colors.error, bg: theme.colors.errorContainer },
    { id: 'Study', icon: '🎓', color: theme.colors.onSecondaryContainer, bg: theme.colors.secondaryContainer },
    { id: 'Shopping', icon: '🛒', color: theme.colors.onTertiaryContainer, bg: theme.colors.tertiaryContainer },
    { id: 'Family', icon: '👨‍👩‍👧', color: theme.colors.onPrimaryFixedVariant, bg: theme.colors.primaryFixedDim },
  ];

  const getCategoryCount = (categoryName: string) => {
    return tasks.filter(t => t.category === categoryName).length;
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Top App Bar */}
      <View style={[styles.header, { backgroundColor: theme.colors.surface }]}>
        <View style={styles.headerLeft}>
          <TouchableOpacity 
            style={styles.iconButton}
            onPress={() => navigation.goBack()}
          >
            <Text style={[styles.iconText, { color: theme.colors.primary }]}>←</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: theme.colors.primary }]}>Categories</Text>
        </View>
        <TouchableOpacity 
          style={styles.iconButton}
          onPress={() => navigation.navigate('Notifications')}
        >
          <Text style={[styles.iconText, { color: theme.colors.onSurfaceVariant }]}>🔔</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Summary Section */}
        <View style={styles.summarySection}>
          <View style={[styles.summaryCard, { backgroundColor: theme.colors.primaryContainer }]}>
            <View style={styles.summaryContent}>
              <Text style={[styles.summaryLabel, { color: theme.colors.onPrimaryContainer }]}>Efficiency Overview</Text>
              <Text style={[styles.summaryValue, { color: theme.colors.onPrimaryContainer }]}>{categories.length} Categories</Text>
              <Text style={[styles.summaryDesc, { color: theme.colors.onPrimaryContainer }]}>You have {totalTasks} active tasks across your life.</Text>
            </View>
            <View style={styles.progressCircle}>
              {/* Fake progress circle for mockup */}
              <View style={[styles.circleRing, { borderColor: theme.colors.onPrimaryContainer }]} />
              <View style={styles.circleTextContainer}>
                <Text style={[styles.circleText, { color: theme.colors.onPrimaryContainer }]}>{completionPercent}%</Text>
              </View>
            </View>
            {/* Decorative element */}
            <View style={styles.decorativeCircle} />
          </View>
        </View>

        {/* Categories Grid */}
        <View style={styles.grid}>
          {categories.map((cat, idx) => (
            <TouchableOpacity 
              key={cat.id}
              style={[styles.categoryCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant, borderLeftColor: cat.color }]}
              onPress={() => navigation.navigate('Tasks', { category: cat.id })}
            >
              <View style={[styles.categoryIconBg, { backgroundColor: cat.bg }]}>
                <Text style={[styles.categoryIcon, { color: cat.color }]}>{cat.icon}</Text>
              </View>
              <View>
                <Text style={[styles.categoryTitle, { color: theme.colors.onSurface }]}>{cat.id}</Text>
                <Text style={[styles.categoryTasks, { color: theme.colors.onSurfaceVariant }]}>{getCategoryCount(cat.id)} Tasks</Text>
              </View>
            </TouchableOpacity>
          ))}

          {/* Custom */}
          <TouchableOpacity style={[styles.categoryCard, { backgroundColor: theme.colors.surfaceContainerLowest, borderColor: theme.colors.outlineVariant, borderLeftColor: theme.colors.outline }]}>
            <View style={[styles.categoryIconBg, { backgroundColor: theme.colors.surfaceContainerHigh }]}>
              <Text style={[styles.categoryIcon, { color: theme.colors.onSurfaceVariant }]}>+</Text>
            </View>
            <View>
              <Text style={[styles.categoryTitle, { color: theme.colors.onSurface }]}>Custom</Text>
              <Text style={[styles.categoryTasks, { color: theme.colors.onSurfaceVariant }]}>Manage</Text>
            </View>
          </TouchableOpacity>
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
