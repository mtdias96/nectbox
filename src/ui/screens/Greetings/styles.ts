import { theme } from '@ui/styles/theme';
import { Dimensions, StyleSheet } from 'react-native';

const { width: screenWidth } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary[600],
  },
  content: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
    paddingHorizontal: 20,
    flex: 1,
  },
  logoContainer: {
    marginTop: 20,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 32,
  },
  title: {
    letterSpacing: -0.5,
    textAlign: 'center',
    marginBottom: 8,
  },
  subtitle: {
    letterSpacing: -0.2,
    lineHeight: 24,
    textAlign: 'center',
    opacity: 0.9,
  },
  ctaContent: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  imageContainer: {
    width: Math.min(screenWidth * 0.8, 400),
    height: Math.min(screenWidth * 0.4, 200),
    borderRadius: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 20,
  },
  signInContainer: {
    marginTop: 20,
    flexDirection: 'row',
    gap: 6,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInLink: {
    textDecorationLine: 'underline',
  },
});
