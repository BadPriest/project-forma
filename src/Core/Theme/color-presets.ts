interface colorPreset {
  background: string;
  text: string;
  interactive: {
    surface: string;
    surfaceActive: string;
    text: string;
    textActive: string;
  };
  muted: {
    surface: string;
    surfaceActive: string;
    text: string;
    textActive: string;
  };
  accent: string;
  success: string;
  warning: string;
  danger: string;
}

export const main: colorPreset = {
  background: '#fdfdfd',
  text: '#272727',
  interactive: {
    surface: '#dfdfdf',
    surfaceActive: 'red',
    text: '#2e2e2e',
    textActive: 'red',
  },
  muted: {
    surface: '#5B5B5B66',
    surfaceActive: '#E7E7E7',
    text: '#E7E7E766',
    textActive: '#272727',
  },
  accent: '#FFDC94',
  success: '',
  warning: '',
  danger: '#ff3a5e',
};

export default main;
