import logo from './logo.svg';
import './App.css';
// import Greet from './components/t6_greet'
import Greet2, {T6_greet, T6_greet3 as Greet3} from './components/t6_greet'

function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <Greet>hi</Greet> */}
      {/* <T6_greet/> must be in pascal case*/}
      <T6_greet/>
      <Greet2/>
      <Greet3/>
    </div>
  );
}

export default App;
