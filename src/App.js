import Header from './pages/Header/Header'
import { BrowserRouter} from 'react-router-dom';
import './assets/boxicons-2.1.1/boxicons-2.1.1/css/boxicons.min.css';
import Suggest from './components/Suggest/Suggest';
import './App.scss';
import PostofMonth from './components/PostofMonth/PostofMonth';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
        <Header/>
        <section className="main">
          <Suggest/>
          <PostofMonth/>
        </section>
    </div>
    </BrowserRouter>
  );
}

export default App;
