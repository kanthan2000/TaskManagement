import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, ViewStyle, StyleProp } from 'react-native';
import { SafeAreaView, Edge } from 'react-native-safe-area-context';
import { useTheme } from '../theme/ThemeProvider';

interface ScreenWrapperProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  edges?: Edge[];
  useKeyboardAvoidingView?: boolean;
}

export const ScreenWrapper: React.FC<ScreenWrapperProps> = ({
  children,
  style,
  edges = ['top', 'bottom', 'left', 'right'],
  useKeyboardAvoidingView = true,
}) => {
  const { theme } = useTheme();

  const content = (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.colors.background }, style]}
      edges={edges}
    >
      {children}
    </SafeAreaView>
  );

  if (useKeyboardAvoidingView) {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        {content}
      </KeyboardAvoidingView>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
