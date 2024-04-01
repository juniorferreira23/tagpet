import 'react-native-gesture-handler';
import { TranslateProvider } from './src/context/TranslateContext';
import { RootNavigator } from './src/routes';

export default function App() {
  return (
    <TranslateProvider>
      <RootNavigator />
    </TranslateProvider>
  );
}

