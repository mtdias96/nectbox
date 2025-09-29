import { AuthStackNavigationProps } from '@app/navigation/AuthStack';
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { FormGroup } from '@ui/components/FormGroup';
import { Input } from '@ui/components/Input';
import { theme } from '@ui/styles/theme';
import React, { useRef, useState } from 'react';
import {
  Alert,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import image from '../../assets/image.png';
import { styles } from './styles';

export function SingUp() {
  const [step, setStep] = useState(1);
  const navigation = useNavigation<AuthStackNavigationProps>();
  const passwordInputRef = useRef<TextInput>(null);

  const handleNextStep = () => setStep(2);
  const handlePrevStep = () => setStep(1);

  function handleSubmit() {
    Alert.alert('Form Enviado');
  }

  return (
    <>
      <View style={styles.container}>
        <ImageBackground
          style={styles.header}
          source={image}
          resizeMode="cover"
        >
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('SignIn', {
                fromGreetins: '',
              })
            }
            accessibilityRole="button"
            style={styles.backIconWrapper}
          >
            <FontAwesome6
              name="arrow-left"
              size={16}
              color={theme.colors.white}
            />
          </TouchableOpacity>

          <View style={styles.titleWrapper}>
            <AppText size="3xl" weight="medium" color={theme.colors.white}>
              Cadastrar
            </AppText>
          </View>
        </ImageBackground>

        <SafeAreaView style={styles.content}>
          <View style={styles.formWrapper}>
            {step === 1 && (
              <>
                <FormGroup label="Nome Completo">
                  <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="next"
                    onSubmitEditing={() => passwordInputRef.current?.focus()}
                  />
                </FormGroup>

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

                <FormGroup label="Confirmar Senha">
                  <Input
                    ref={passwordInputRef}
                    secureTextEntry
                    autoCorrect={false}
                    autoComplete="current-password"
                    returnKeyType="done"
                    onSubmitEditing={handleSubmit}
                  />
                </FormGroup>

                <View style={styles.primaryButtonWrapper}>
                  <Button variant="primary" onPress={handleNextStep}>
                    Próximo
                  </Button>
                </View>
              </>
            )}

            {step === 2 && (
              <>
                <FormGroup label="Nome da Loja">
                  <Input
                    autoCapitalize="words" // cada palavra começa com maiúscula
                    autoCorrect={false} // evita correção automática
                    keyboardType="default" // padrão de teclado de texto
                    returnKeyType="next"
                    onSubmitEditing={() => passwordInputRef.current?.focus()}
                  />
                </FormGroup>

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

                <FormGroup label="Telefone">
                  <Input
                    ref={passwordInputRef}
                    secureTextEntry
                    autoCorrect={false}
                    keyboardType="phone-pad" // teclado numérico de telefone
                    autoComplete="tel"
                    returnKeyType="next"
                    onSubmitEditing={() => passwordInputRef.current?.focus()}
                  />
                </FormGroup>

                <View style={styles.stepButtonsWrapper}>
                  <View style={styles.iconButtonWrapper}>
                    <Button
                      variant="primary"
                      size="icon"
                      onPress={handlePrevStep}
                    >
                      <FontAwesome6
                        name="arrow-left"
                        size={16}
                        color={theme.colors.white}
                      />
                    </Button>
                  </View>

                  <View style={styles.textButtonWrapper}>
                    <Button variant="primary" onPress={handleSubmit}>
                      Cadastrar
                    </Button>
                  </View>
                </View>
              </>
            )}

            <View style={styles.signUpLinkWrapper}>
              <AppText color={theme.colors.black['600']}>
                Já possui uma conta?
              </AppText>

              <TouchableOpacity accessibilityRole="button">
                <AppText
                  color={theme.colors.primary[400]}
                  weight="medium"
                  style={styles.signUpLinkText}
                >
                  Entrar
                </AppText>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}
