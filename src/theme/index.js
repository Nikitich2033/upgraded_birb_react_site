import { createTheme } from '@mui/material';
import palette from './palette';
import components from './components';
import typography from './typography';


let theme = createTheme({
  palette,
  spacing: 16,
});

theme = createTheme(theme, {
  components: components(theme),
  typography: typography(theme),
});

export default theme;
