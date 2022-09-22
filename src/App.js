import './App.css';
import Stopwatch from './components/Stopwatch';
import ThemeProvider from './hooks/useTheme';

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Stopwatch />
      </ThemeProvider>
    </>
  );
};

export default App;
