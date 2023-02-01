import { BrowserRouter, Routes, Route } from 'react-router-dom'
import News from './containers/News';
import Archived from './containers/Archived';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App'>
        <BrowserRouter> 
          <Routes>
            <Route path='/' element={<News />} />
            <Route path='/archived' element={<Archived />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
