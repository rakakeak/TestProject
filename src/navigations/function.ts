import {createNavigationContainerRef} from '@react-navigation/native';
import {RootStackParamList} from './types';

type RouteName = keyof RootStackParamList;
type Params<Name extends RouteName> = RootStackParamList[Name];

export const navigationRef = createNavigationContainerRef<RootStackParamList>();

export const navigate = <Name extends RouteName>(
  name: Name,
  params?: Params<Name>,
): void => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
};

export const goBack = (): void => {
  if (navigationRef.isReady() && navigationRef.canGoBack()) {
    navigationRef.goBack();
  }
};
