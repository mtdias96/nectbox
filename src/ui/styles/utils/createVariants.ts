import { ImageStyle, TextStyle, ViewStyle } from 'react-native';

type Style = ViewStyle | TextStyle | ImageStyle

type Variant = {
  [variant: string] : {
    [variantName: string]: Style
  }
}

interface ICreateVariantsParams<TVariants extends Variant> {
  base?: Style
  variants: TVariants
  defaultVariants: {
    [K in keyof TVariants] : keyof TVariants[K];
  }
}

export function createVariants<TVariants extends Variant>({
  base = {},
  variants,
  defaultVariants,
}: ICreateVariantsParams<TVariants>) {
  return (selectedVariants?: { [K in keyof TVariants]? : keyof TVariants[K]}) => {
    let styles = { ...base };

    for(const [variant, variantStyles] of Object.entries(variants)) {
      const variantName = selectedVariants?.[variant] ?? defaultVariants[variant];
      const selectedVariantsStyles = variantStyles[variantName as keyof typeof variantStyles];

      styles = {
        ...styles,
        ...selectedVariantsStyles,
      };
    }

    return styles;
  };
}

export type VariantsProps<T extends ReturnType<typeof createVariants>> = NonNullable<Parameters<T>[0]>
