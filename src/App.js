import image from './cookies.jpg'
import './App.css';
import ProductsList from './Components/ProductsList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookies</h1>
        <p>The most delecious cookies</p>
        <img className="cookies" src={image}></img>
        <div className="cookiesList">
        <ProductsList />
        </div>
      </header>
    </div>
  )
};

export default App;
