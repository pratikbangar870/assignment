import React from 'react-native';

import { ThemeProvider } from '@upstox/styles-ds/ThemeProvider';
import { HoldingScreen } from '@upstox/screens';

const App = () => {
  return (
    <ThemeProvider>
      <HoldingScreen />
    </ThemeProvider>
  );
};

export default App;
