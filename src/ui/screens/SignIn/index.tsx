import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { FormGroup } from '@ui/components/FormGroup';
import { Input } from '@ui/components/Input';
import { theme } from '@ui/styles/theme';
import { useRef } from 'react';
import {
  Alert,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

import { AuthStackNavigationProps } from '@app/navigation/AuthStack';
import { useNavigation } from '@react-navigation/native';
import image from '../../assets/image.png';

export function SingIn() {
  const navigation = useNavigation<AuthStackNavigationProps>();
  const passwordInputRef = useRef<TextInput>(null);

  function handleSubmit() {
    Alert.alert('Form Enviado');
  }

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.headerContainer}
          source={image}
          resizeMode="cover"
        ></ImageBackground>

        <SafeAreaView style={styles.content}>
          <AppText size="3xl" weight="medium" style={styles.title}>
            Entrar
          </AppText>

          <View style={styles.form}>
            <FormGroup label="E-mail">
              <Input
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                autoComplete="email"
                returnKeyType="next"
                onSubmitEditing={() => passwordInputRef.current?.focus()}
              />
            </FormGroup>

            <FormGroup label="Senha">
              <Input
                ref={passwordInputRef}
                secureTextEntry
                autoCorrect={false}
                autoComplete="current-password"
                returnKeyType="done"
                onSubmitEditing={handleSubmit}
              />
            </FormGroup>

            {/* <TouchableOpacity>
              <AppText
                color={theme.colors.primary[300]}
                weight="medium"
                style={styles.signInLink}
              >
                Esqueceu sua senha?
              </AppText>
            </TouchableOpacity> */}

            <View style={styles.buttonContainer}>
              <Button variant="primary" onPress={handleSubmit}>
                Entrar
              </Button>
            </View>

            <View style={styles.signUpContainer}>
              <AppText color={theme.colors.black['600']}>
                Ainda não tem uma conta?
              </AppText>

              <TouchableOpacity
                onPress={() => navigation.navigate('SignUp')}
                accessibilityRole="button"
              >
                <AppText
                  color={theme.colors.primary[400]}
                  weight="medium"
                  style={styles.signUpLink}
                >
                  Cadastre-se
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}
