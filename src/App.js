import Header from './pages/Header/Header'
import { BrowserRouter} from 'react-router-dom';
import './assets/boxicons-2.1.1/boxicons-2.1.1/css/boxicons.min.css';
import Suggest from './components/Suggest/Suggest';
import './App.scss';
import PostofMonth from './components/PostofMonth/PostofMonth';
import Filter from './components/Filter/Filter';
import Footer from './pages/Footer/Footer'
function App() {
  return (
    <BrowserRouter>
    <div className='App'>
        <Header/>
        <section className="main">
          <Suggest/>
          <PostofMonth/>
          <Filter/>
        </section>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
