import { theme } from '@ui/styles/theme';
import { createVariants } from '@ui/styles/utils/createVariants';

export const inputStyles = createVariants({
  base: {
    height: 52,
    paddingHorizontal: 14,
    backgroundColor: theme.colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 10,
    color: theme.colors.black[700],
    fontSize: 16,
    fontFamily: theme.fontFamily.sans.regular,
  },
  variants: {
    status: {
      default: {
        borderColor: theme.colors.neutral[400],
      },
      focus: {
        borderColor: theme.colors.primary[700],
      },
      error: {
        borderColor: theme.colors.support.danger,
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
    status: 'default',
    disabled: 'false',
  },
});
