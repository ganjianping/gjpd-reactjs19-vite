import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainMenu } from './menu/Menu';
import { Home } from './home/Home';
import { JsxExample } from './demo/reactjs/JsxExample';
import PropsExample from './demo/reactjs/PropsExample';
import HooksExample from './demo/reactjs/HooksExample';
import ListsAndKeysExample from './demo/reactjs/ListsAndKeysExample';
import FormsExample from './demo/reactjs/FormsExample';
import ContextExample from './demo/reactjs/ContextExample';
import LifecycleExample from './demo/reactjs/LifecycleExample';
import React19Features from './demo/reactjs/React19Features';
import LanguageExample from './demo/reactjs/language/LanguageExample';
import ScssExample from './demo/scss/ScssExample';
import RobotoFontExample from './demo/mui/RobotoFontExample';
import InputExample from './demo/mui/InputExample';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <MainMenu />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/demo/reactjs/jsx-example" element={<JsxExample />} />
          <Route path="/demo/reactjs/props-example" element={<PropsExample />} />
          <Route path="/demo/reactjs/hooks-example" element={<HooksExample />} />
          <Route path="/demo/reactjs/lists-and-keys-example" element={<ListsAndKeysExample />} />
          <Route path="/demo/reactjs/forms-example" element={<FormsExample />} />
          <Route path="/demo/reactjs/context-example" element={<ContextExample />} />
          <Route path="/demo/reactjs/lifecycle-example" element={<LifecycleExample />} />
          <Route path="/demo/reactjs/react19-features" element={<React19Features />} />
          <Route path="/demo/reactjs/language-example" element={<LanguageExample />} />
          <Route path="/demo/scss-example" element={<ScssExample />} />
          <Route path="/demo/mui/roboto-font-example" element={<RobotoFontExample />} />
          <Route path="/demo/mui/input-example" element={<InputExample />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
