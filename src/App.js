
import './App.css';
import HomeScreen from './screens/Home/HomeScreen';
import NavBar from './components/navbar/NavBar';
import Cart from './components/Cart/Cart'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Cart/>
      <HomeScreen/>
    </div>
  );
}

export default App;