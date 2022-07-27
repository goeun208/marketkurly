import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import Main from './routes/Main';
import ProductDetail from './components/Product/ProductDetail';
import Search from './routes/Search';
import MyLikeProduct from './components/Product/MyLikeProduct';

function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/like" element={<MyLikeProduct />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/search/:keyword" element={<Search />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

//중첩라우팅 => 아웃랩
//react-router-dom => useParams