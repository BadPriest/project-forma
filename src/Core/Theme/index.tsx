import { useState } from 'react';
import { main } from './color-presets';

const colors = main;

const typography = {
  fontWeights: {
    thin: 300,
    regular: 400,
    semibold: 500,
    bold: 600,
  },
  headings: {
    fontFamily: '',
    h1: { fontSize: '3rem', fontWeight: '800' },
    h2: { fontSize: '2rem', fontWeight: '800' },
    h3: { fontSize: '1.5rem', fontWeight: '800' },
    h4: { fontSize: '1.2rem', fontWeight: '800' },
    display: { fontSize: '4.5rem', fontWeight: '800' },
  },
  body: {
    fontFamily: '',
    small: { fontSize: '0.8rem' },
    regular: { fontSize: '1rem' },
    large: { fontSize: '1.1rem' },
  },
};

const animations = {
  surface: {
    activationTransition: '0.3s',
    deactivationTransition: '0.2s',
  },
};

export const Theme = { colors, typography, animations };

export const useTheme = () => {
  const [theme] = useState({
    colors,
    typography,
    animations,
  });

  return { theme };
};

export default useTheme;
