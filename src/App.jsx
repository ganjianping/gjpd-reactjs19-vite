import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainMenu } from './menu/Menu';
import { Home } from './home/Home';
import { JsxExample } from './demo/reactjs/JsxExample';
import PropsExample from './demo/reactjs/PropsExample';
import HooksExample from './demo/reactjs/HooksExample';
import ListsAndKeysExample from './demo/reactjs/ListsAndKeysExample';
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
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
