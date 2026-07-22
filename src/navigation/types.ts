import { NavigatorScreenParams } from '@react-navigation/native';

export type BottomTabParamList = {
  Home: undefined;
  Calendar: undefined;
  Tasks: undefined;
  Analytics: undefined;
  Settings: undefined;
};

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  MainTabs: NavigatorScreenParams<BottomTabParamList>;
  TaskDetails: { taskId: string };
  CreateTask: undefined;
  EditTask: { taskId: string };
  Notifications: undefined;
  Categories: undefined;
  Profile: undefined;
  Settings: undefined;
};
