import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black['800'],
  },
  headerContainer: {
    marginTop: 30,
    width: '100%',
    height: 200,
  },
  content: {
    paddingVertical: 24,
    paddingHorizontal: 20,
    flex: 1,
    borderTopLeftRadius: 60,
    backgroundColor: theme.colors.white,
  },
  title: {
    textAlign: 'center',
  },
  logoContainer: {
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 18,
  },
  signUpContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpLink: {
    textDecorationLine: 'underline',
  },
});
