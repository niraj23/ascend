import {useState} from 'react'
import Header from './Header'
import CakeContainer from './CakeContainer'
import Search from './Search'
import {cakes} from "../data/cakesData";

function App() {
  const [cakeList, setCakeList] = useState(cakes)
  return (
    <div className="App">
      {/* <Header/> */}
      {/* <Search/> */}
      <CakeContainer cakeList ={cakeList}/>

    </div>
  );
}

export default App;
