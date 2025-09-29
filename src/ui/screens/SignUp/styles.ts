import { theme } from '@ui/styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.black['800'],
  },
  header: {
    marginTop: 30,
    width: '100%',
    height: 125,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIconWrapper: {
    position: 'absolute',
    left: 20,
    top: '50%',
    transform: [{ translateY: -9 }],
  },
  content: {
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 20,
    borderTopLeftRadius: 60,
    backgroundColor: theme.colors.white,
  },
  logoWrapper: {
    paddingTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrapper: {
    flex: 1,
    gap: 20,
    justifyContent: 'center',
  },
  primaryButtonWrapper: {
    marginTop: 24,
  },
  stepButtonsWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  iconButtonWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: theme.colors.neutral['400'],
  },
  textButtonWrapper: {
    flex: 1,
  },
  signUpLinkWrapper: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpLinkText: {
    textDecorationLine: 'underline',
  },
});
