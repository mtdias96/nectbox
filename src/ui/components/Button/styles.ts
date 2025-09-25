import { theme } from '@ui/styles/theme';
import { createVariants, VariantsProps } from '@ui/styles/utils/createVariants';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 12,
    overflow: 'hidden',
  },
});

export const buttonStyles = createVariants({
  base: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  variants: {
    variant: {
      primary: {
        backgroundColor: theme.colors.primary['400'],
        textDecorationColor: 'yallow',
      },
      secondary: {
        backgroundColor: theme.colors.neutral[400],
      },
    },
    size: {
      default: {
        paddingHorizontal: 24,
        paddingVertical: 14,
      },
      icon: {
        width: 48,
        height: 48,
      },
    },

    disabled: {
      true: {
        opacity: 0.5,
      },
      false: {
        opacity: 1,
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'default',
    disabled: 'false',
  },
});

export type ButtonVariants = VariantsProps<typeof buttonStyles>;
