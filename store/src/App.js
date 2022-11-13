import logo from './logo.svg';
import './App.css';
import './Components/ShopItemFunc/ShopItemFunc'
import ShopItemFunc from './Components/ShopItemFunc/ShopItemFunc';
import ShopItemFuncClass from './Components/ShopItemFuncClass/ShopItemFunc';

function App() {

  const item = {
    brand: 'Tiger of Sweden',
    title: 'Leonard coat',
    description: 'Minimalistic coat in cotton-blend',
    descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    price: 399,
    currency: '£'
  }

  return (
    <div className="App">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        {/* <ShopItemFuncClass item={item} /> */}
        <ShopItemFunc item={item} />
      </div>
    </div>
  );
}

export default App;
