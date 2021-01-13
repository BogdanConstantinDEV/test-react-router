import './App.css';
import Blog from './containers/Blog/Blog'
import { BrowserRouter } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    </div>
  );
}

export default App;
