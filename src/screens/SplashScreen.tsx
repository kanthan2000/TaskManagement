import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { useTheme } from '../theme/ThemeProvider';

export const SplashScreen = () => {
  const { theme } = useTheme();
  
  // Animation values
  const scaleValue = new Animated.Value(0.95);
  const opacityValue = new Animated.Value(0);
  const slideUpValue = new Animated.Value(20);
  const slideOpacityValue = new Animated.Value(0);
  const progressValue = new Animated.Value(0);

  useEffect(() => {
    // Logo fade & scale
    Animated.timing(scaleValue, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();
    
    Animated.timing(opacityValue, {
      toValue: 1,
      duration: 1200,
      useNativeDriver: true,
    }).start();

    // Text slide up
    Animated.timing(slideUpValue, {
      toValue: 0,
      duration: 1000,
      delay: 300,
      useNativeDriver: true,
    }).start();
    
    Animated.timing(slideOpacityValue, {
      toValue: 1,
      duration: 1000,
      delay: 300,
      useNativeDriver: true,
    }).start();

    // Progress bar
    Animated.timing(progressValue, {
      toValue: 1,
      duration: 3000,
      delay: 200,
      useNativeDriver: false,
    }).start();

  }, []);

  const progressWidth = progressValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%']
  });

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.primary }]}>
      {/* Background Decorators */}
      <View style={[styles.bgDecorator, styles.decorator1, { backgroundColor: theme.colors.secondaryContainer }]} />
      <View style={[styles.bgDecorator, styles.decorator2, { backgroundColor: theme.colors.tertiaryContainer }]} />

      <View style={styles.content}>
        {/* Logo */}
        <Animated.View style={[
          styles.logoContainer,
          {
            opacity: opacityValue,
            transform: [{ scale: scaleValue }],
            backgroundColor: 'rgba(255, 255, 255, 0.03)',
            borderColor: 'rgba(255, 255, 255, 0.1)'
          }
        ]}>
          {/* Placeholder for Logo */}
          <View style={[styles.logoPlaceholder, { backgroundColor: theme.colors.primaryContainer }]}>
            <Text style={styles.logoText}>TF</Text>
          </View>
        </Animated.View>

        {/* Text Section */}
        <Animated.View style={[
          styles.textContainer,
          {
            opacity: slideOpacityValue,
            transform: [{ translateY: slideUpValue }]
          }
        ]}>
          <Text style={styles.title}>TaskFlow</Text>
          <Text style={styles.subtitle}>Organize your day. Achieve your goals.</Text>
        </Animated.View>

        {/* Progress Bar */}
        <View style={styles.progressContainer}>
          <Animated.View style={[styles.progressBar, { width: progressWidth, backgroundColor: theme.colors.secondaryContainer }]} />
        </View>
      </View>

      {/* Footer */}
      <Animated.View style={[
        styles.footer,
        {
          opacity: slideOpacityValue,
          transform: [{ translateY: slideUpValue }]
        }
      ]}>
        <Text style={styles.footerText}>PREMIUM PRODUCTIVITY</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  bgDecorator: {
    position: 'absolute',
    borderRadius: 9999,
    opacity: 0.2,
  },
  decorator1: {
    top: '-10%',
    left: '-10%',
    width: '40%',
    height: '40%',
  },
  decorator2: {
    bottom: '-10%',
    right: '-10%',
    width: '50%',
    height: '50%',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10,
    width: '100%',
    paddingHorizontal: 20,
  },
  logoContainer: {
    padding: 16,
    borderRadius: 24,
    borderWidth: 1,
    marginBottom: 24,
    // Glassmorphism shadow simulation
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  logoPlaceholder: {
    width: 96,
    height: 96,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  textContainer: {
    alignItems: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: '#bac3ff', // primary-fixed-dim approx
    opacity: 0.9,
    textAlign: 'center',
    maxWidth: 280,
    lineHeight: 24,
  },
  progressContainer: {
    marginTop: 32,
    width: 192,
    height: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 999,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
  footer: {
    position: 'absolute',
    bottom: 48,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 11,
    color: 'rgba(255, 255, 255, 0.4)',
    letterSpacing: 2,
    fontWeight: '500',
  }
});
