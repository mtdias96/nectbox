import Svg, {
  Defs,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Text,
} from 'react-native-svg';

interface ILogoProps {
  width?: number;
  height?: number;
}

export function Logo({ width = 200, height = 60 }: ILogoProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 200 60" fill="none">
      <Defs>
        <LinearGradient id="cubeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#4F7396" />
          <Stop offset="100%" stopColor="#365075" />
        </LinearGradient>
        <LinearGradient id="topGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#34D399" />
          <Stop offset="100%" stopColor="#22C55E" />
        </LinearGradient>
        <LinearGradient id="leftGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#2563EB" />
          <Stop offset="100%" stopColor="#1B2C44" />
        </LinearGradient>
        <LinearGradient id="rightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <Stop offset="0%" stopColor="#1E40AF" />
          <Stop offset="100%" stopColor="#162538" />
        </LinearGradient>
      </Defs>
      <Rect
        x="8"
        y="8"
        width="44"
        height="44"
        rx="8"
        fill="url(#cubeGradient)"
        opacity="0.1"
      />
      <Rect
        x="5"
        y="5"
        width="44"
        height="44"
        rx="8"
        fill="url(#cubeGradient)"
      />
      <Path d="M16 22 L27 14 L38 22 L27 30 Z" fill="url(#topGradient)" />

      <Path d="M16 22 V34 L27 42 V30 Z" fill="url(#leftGradient)" />

      <Path d="M38 22 V34 L27 42 V30 Z" fill="url(#rightGradient)" />

      <Path d="M18 24 L25 18 L32 24 L25 28 Z" fill="#FFFFFF" opacity="0.15" />

      <Text
        x="60"
        y="40"
        fontSize="32"
        fontWeight="700"
        fill="#FFFFFF"
        letterSpacing="0.5"
      >
        Nect
      </Text>
      <Text
        x="131"
        y="40"
        fontSize="32"
        fontWeight="700"
        fill="#22C55E"
        letterSpacing="0.5"
      >
        Box
      </Text>

      <Rect
        x="60"
        y="45"
        width="80"
        height="2"
        rx="1"
        fill="#22C55E"
        opacity="0.6"
      />
    </Svg>
  );
}
