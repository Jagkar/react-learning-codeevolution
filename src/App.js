import logo from './logo.svg';
import './App.css';
// import Greet from './components/t6_greet'
// import Greet2, {T6_greet, T6_greet3 as Greet3} from './components/t6_greet'
// import Welcome from './components/T7_Welcome';
// import Hello from './components/T8_Hello';
import T9_Greet from './components/T9_Greet';
import T10_Message from './components/T10_Message';
import T11_Counter from './components/T11_Counter';

function App() {
  return (
    <div className="App">
      {/* <Greet/>
      <Greet>hi</Greet> */}
      {/* <T6_greet/> must be in pascal case*/}
      {/* <T6_greet/>
      <Greet2/>
      <Greet3/> */}

      {/* <Welcome/> */}

      {/* <Hello/> */}

      {/* <T9_Greet name='Jagdeep' heroName='Wonder Woman'><button>Action</button></T9_Greet>
      <T9_Greet name='Karan' heroName='SuperMan'><p>This is children Paragraph</p></T9_Greet> */}
    
      {/* <T10_Message/> */}
      <T11_Counter/>
    </div>
  );
}

export default App;
