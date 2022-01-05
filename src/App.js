import StoreWrapper from './store/StoreWrapper';
import Header from './components/header/Header';
import Editor from './components/editor/Editor';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import './App.css';

import awsExports from './aws-exports';
Amplify.configure(awsExports);

const App = () => {
  return (
    <Authenticator socialProviders={['google']}>
      {() => (
        <StoreWrapper>
          <Header />
          <Editor />
        </StoreWrapper>
      )}
    </Authenticator>
  );
}

export default App;
