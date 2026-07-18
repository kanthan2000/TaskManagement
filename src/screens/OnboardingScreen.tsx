import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Animated, Dimensions, SafeAreaView } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

const { width } = Dimensions.get('window');

const ONBOARDING_DATA = [
  {
    id: '1',
    title: 'Manage Daily Tasks',
    description: 'Organize your workflow and stay focused on what matters most with TaskFlow\'s intuitive interface.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp_yAKY2BBoY__wBsxA5sp5Uee9gZWcAAY8cfZj9iseNDLlwMHPefT-5k8OrPqCzjOnwvvJlPPgIEQegRJpbPPEYkRSGaGsatAGDlg8HcX_VSZF07LhZE8O4R8sOpgyXagSilnDoDHqns7_4Uhv3BKH1sRG6SVm3QMHvvGqH6UTI5dxMJ8m5UDrmFyvAvCA9HnxKo_c4hKdRsCKzwwlbDRm625umTPFEY6Px61pRtTNvGNX0sktrdtYBodEe9-wy8Ar-YFODZNriM'
  },
  {
    id: '2',
    title: 'Never Miss Deadlines',
    description: 'Get timely reminders and smart notifications that keep you ahead of your schedule every single day.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARmVMSYBdJ_eEv_THv0kMiggrCDf8xOVwTmbeDzpXErTI8FQuavtd8yE8D-YxzQwAAyZCHgNNoEieNvSRDmwOkyZCdim5Fm5KDn7buP2jQmPyp8RSBySz94906V6oo_OZN08NwLb4BDFnAYns3r6QSpHCoOyu9htEfjJR5tKuie6JDkVGHN_DzRcAgOJQ6hjCEMGlD32AG0aZ6nsTPeLvJPS8fODlc59GLZ3JWQw2mughlMvSlRmi9SHsR3jj1EH0mHt4ijzHipwA'
  },
  {
    id: '3',
    title: 'Track Productivity',
    description: 'Gain insights into your habits and watch your productivity grow with detailed progress analytics.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB7hzMIwA6vblQv-wIUYRMHXYyOs2LjTami_R3o1TESp3FfhYs6vzzd0LID9QJi36LXN8ATWWexGux21ONmOYrPLB_locpWYe7Ivncwhv03f9FhUv_ZX92UXQtZ84Qna3slgYs4d_aB7KHan-dwqThUdZReWd31pLb87QOrFUUXXA5XbP3onIbD7UvpMD9_kFu0IyQPKLHap0rIZjvop3CDBtZxBbHFUTJDTBEgq78N_xDxQl8a1QsQPabBWsRqCRAtmIrNPDhXt7w'
  }
];

export const OnboardingScreen = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleNext = () => {
    if (currentIndex < ONBOARDING_DATA.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Navigate to Home or Login
      console.log('Navigate to Dashboard');
    }
  };

  const handleSkip = () => {
    setCurrentIndex(ONBOARDING_DATA.length - 1);
  };

  const renderItem = ({ item, index }: any) => {
    return (
      <View style={[styles.slide, { width }]}>
        <View style={styles.imageContainer}>
          <View style={[styles.imageBg1, { backgroundColor: theme.colors.primaryContainer, opacity: 0.2 }]} />
          <View style={[styles.imageBg2, { backgroundColor: theme.colors.secondaryContainer, opacity: 0.2 }]} />
          <View style={styles.glassPanel}>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
          </View>
        </View>
        <Text style={[styles.title, { color: theme.colors.primary }]}>{item.title}</Text>
        <Text style={[styles.description, { color: theme.colors.onSurfaceVariant }]}>{item.description}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      {/* Background Ornaments */}
      <View style={[styles.bgOrnament, styles.ornamentTop, { backgroundColor: theme.colors.primaryContainer }]} />
      <View style={[styles.bgOrnament, styles.ornamentBottom, { backgroundColor: theme.colors.secondaryContainer }]} />

      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoRow}>
          <View style={[styles.logoIconBg, { backgroundColor: theme.colors.primaryContainer }]}>
            <Text style={[styles.logoIcon, { color: theme.colors.primary }]}>✓</Text>
          </View>
          <Text style={[styles.logoText, { color: theme.colors.primary }]}>TaskFlow</Text>
        </View>
        <TouchableOpacity onPress={handleSkip}>
          <Text style={[styles.skipText, { color: theme.colors.onSurfaceVariant }]}>Skip</Text>
        </TouchableOpacity>
      </View>

      {/* Slider content */}
      <View style={styles.sliderContainer}>
        {renderItem({ item: ONBOARDING_DATA[currentIndex], index: currentIndex })}
      </View>

      {/* Bottom Controls */}
      <View style={styles.bottomControls}>
        <View style={styles.dotsContainer}>
          {ONBOARDING_DATA.map((_, i) => (
            <View
              key={i.toString()}
              style={[
                styles.dot,
                { backgroundColor: i === currentIndex ? theme.colors.primary : theme.colors.surfaceVariant },
                i === currentIndex ? styles.dotActive : null
              ]}
            />
          ))}
        </View>
        <TouchableOpacity
          style={[styles.nextButton, { backgroundColor: theme.colors.primary }]}
          onPress={handleNext}
        >
          <Text style={[styles.nextButtonText, { color: theme.colors.onPrimary }]}>
            {currentIndex === ONBOARDING_DATA.length - 1 ? 'Get Started' : 'Next'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
  },
  bgOrnament: {
    position: 'absolute',
    borderRadius: 9999,
    opacity: 0.15,
  },
  ornamentTop: {
    top: '-10%',
    right: '-10%',
    width: 300,
    height: 300,
  },
  ornamentBottom: {
    bottom: '-5%',
    left: '-5%',
    width: 250,
    height: 250,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 16,
    zIndex: 20,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoIconBg: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  logoIcon: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  skipText: {
    fontSize: 14,
    fontWeight: '600',
    padding: 8,
  },
  sliderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 1,
    marginBottom: 40,
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBg1: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    borderRadius: 40,
    transform: [{ rotate: '6deg' }],
  },
  imageBg2: {
    position: 'absolute',
    top: 0, left: 0, right: 0, bottom: 0,
    borderRadius: 40,
    transform: [{ rotate: '-3deg' }],
  },
  glassPanel: {
    width: '100%',
    height: '100%',
    borderRadius: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.8)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    // Note: react-native blur requires extra libraries, omitting for simplicity
  },
  image: {
    width: '80%',
    height: '80%',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 8,
  },
  bottomControls: {
    padding: 24,
    alignItems: 'center',
    paddingBottom: 40,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginBottom: 32,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotActive: {
    width: 24,
  },
  nextButton: {
    width: '100%',
    maxWidth: 320,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  nextButtonText: {
    fontSize: 16,
    fontWeight: '600',
  }
});
