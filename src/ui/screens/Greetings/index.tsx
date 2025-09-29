import { Image, StatusBar, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppText } from '@ui/components/AppText';
import { Button } from '@ui/components/Button';
import { theme } from '@ui/styles/theme';
import { styles } from './styles';

import { AuthStackNavigationProps } from '@app/navigation/AuthStack';
import { useNavigation } from '@react-navigation/native';
import greetinsVetor from '@ui/assets/greetings/greetins.png';
import { Logo } from '@ui/components/logo';

export function Greetings() {
  const navigation = useNavigation<AuthStackNavigationProps>();

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.content}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#1B2C44"
          translucent={false}
        />

        <View style={styles.logoContainer}>
          <Logo height={100} width={150} />
        </View>

        <View style={styles.imageContainer}>
          <Image source={greetinsVetor} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
          <AppText
            style={styles.title}
            color={theme.colors.white}
            size="3xl"
            weight="semiBold"
          >
            Controle seu Estabelecimento
          </AppText>
          <AppText
            style={styles.subtitle}
            color={theme.colors.neutral[200]}
            size="base"
          >
            Realize vendas e controle seu estoque de maneira pratica na palma de
            sua mao
          </AppText>
        </View>

        <View style={styles.ctaContent}>
          <Button variant="secondary">Criar conta</Button>

          <View style={styles.signInContainer}>
            <AppText color={theme.colors.neutral[300]}>
              Já tem uma conta?
            </AppText>

            <TouchableOpacity
              onPress={() =>
                navigation.navigate('SignIn', {
                  fromGreetins: '',
                })
              }
              accessibilityRole="button"
            >
              <AppText
                color={theme.colors.primary[300]}
                weight="medium"
                style={styles.signInLink}
              >
                Acesse sua conta
              </AppText>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
