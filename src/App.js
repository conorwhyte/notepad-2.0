import StoreWrapper from './store/StoreWrapper';
import Header from './components/header/Header';
import Editor from './components/editor/Editor';
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
