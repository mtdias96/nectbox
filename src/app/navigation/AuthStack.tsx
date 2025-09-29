import { RouteProp } from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import { Greetings } from '@ui/screens/Greetings';
import { SingIn } from '@ui/screens/SignIn';
import { SingUp } from '@ui/screens/SignUp';

type AuthStackParamList = {
  Greetins: undefined;
  SignIn: {
    fromGreetins: string;
  };
  SignUp: undefined;
};

export type AuthStackNavigationProps =
  NativeStackNavigationProp<AuthStackParamList>;
export type AuthStepScreenProps<TRouteName extends keyof AuthStackParamList> =
  NativeStackScreenProps<AuthStackParamList, TRouteName>;
export type AuthStackRouteProps<TRouteName extends keyof AuthStackParamList> =
  RouteProp<AuthStackParamList, TRouteName>;

const Stack = createNativeStackNavigator<AuthStackParamList>();
export function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Greetins" component={Greetings} />
      <Stack.Screen name="SignIn" component={SingIn} />
      <Stack.Screen name="SignUp" component={SingUp} />
    </Stack.Navigator>
  );
}
