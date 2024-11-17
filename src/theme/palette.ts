// Define a type for the color palette
type ColorPalette = {
  primary: string;
  secondary: string;
  success: string;
  error: string;
  warning: string;
  info: string;
  background: string;
  text: {
    primary: string;
    secondary: string;
  };
};

// Create the color palette
const palette: ColorPalette = {
  primary: '#3f51b5',
  secondary: '#f50057',
  success: '#4caf50',
  error: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
  background: '#ffffff',
  text: {
    primary: '#000000',
    secondary: '#757575',
  },
};

export default palette;
