import StoreWrapper from './store/StoreWrapper';
import Header from './components/Header.tsx';
import Editor from './components/Editor.tsx';

import './App.css';

function App() {
  return (
    <StoreWrapper>
      <Header />
      <Editor />
    </StoreWrapper>
  );
}

export default App;
