import { theme } from '@ui/styles/theme';
import { cloneElement } from 'react';
import { View } from 'react-native';
import { AppText } from '../AppText';
import { styles } from './styles';

interface IFormGroupProps {
  label: string;
  children: React.ReactElement<{ error?: boolean }>;
  error?: string;
}

export function FormGroup({ children, label, error }: IFormGroupProps) {
  return (
    <View style={styles.container}>
      <AppText>{label}</AppText>
      {cloneElement(children, { error: !!error })}
      {error && (
        <AppText size="sm" color={theme.colors.support.danger}>
          {error}
        </AppText>
      )}
    </View>
  );
}
