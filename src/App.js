/* eslint-disable react/jsx-pascal-case */
import logo from "./logo.svg";
import "./App.css";
// import Greet from './components/t6_greet'
import Greet2, { T6_greet, T6_greet3 as Greet3 } from "./components/t6_greet";
// import Welcome from './components/T7_Welcome';
// import Hello from './components/T8_Hello';
import T9_Greet from "./components/T9_Greet";
import T10_Message from "./components/T10_Message";
import T11_Counter from "./components/T11_Counter";
import T13_FunctionClick from "./components/T13_FunctionClick";
import T13_ClassClick from "./components/T13_ClassClick";
import T14_BindingEventHandlers from "./components/T14_BindingEventHandlers";
import T15_UnderstandingComponentsRendering from "./components/T15_UnderstandingComponentsRendering";
import T15_ParentComponent from "./components/T15_ParentComponent";
import T16_ConditionalRendering from "./components/T16_ConditionalRendering";
import T17_ListRendering from "./components/T17_ListRendering";
import T17_ListRenderingUsingComponent from "./components/T17_ListRenderingUsingComponent";
import T18_ListsAndKeys from "./components/T18_ListsAndKeys";
import T19_IndexAsKeyAntiPattern from "./components/T19_IndexAsKeyAntiPattern";
import T20_StylingReactComponents from "./components/T20_StylingReactComponents";
import T20_Inline from "./components/T20_Inline";
import T20_StylingUsingModule from "./components/T20_StylingUsingModule";
import T20_StyleWithClassNames from "./components/T20_StyleWithClassNames";
import T20_UsingStyleComponent from "./components/T20_UsingStyleComponent";
import T21_FormHandling from "./components/T21_FormHandling";
import T23_ComponentMountingLifecycleMethods from "./components/T23_ComponentMountingLifecycleMethods";
import T24_UpdatingLifecycleMethods from "./components/T24_UpdatingLifecycleMethods";
import T25_Fragment from "./components/T25_Fragment";
import T25_Table from "./components/T25_Table";
import T26_PureComponent from "./components/T26_PureComponent";
import T26_ParentComponent from "./components/T26_ParentComponent";
import T28_Refs from "./components/T28_Refs";
import T28_CallbackRefs from "./components/T28_CallbackRefs";
import T29_FocusInput from "./components/T29_FocusInput";
import T43_postForm from "./components/T43_postForm";
import T30_FRParentInput from "./components/T30_FRParentInput";
import T31_PortalDemo from "./components/T31_PortalDemo";
import T32_Hero from "./components/T32_Hero";
import T32_ErrorBoundary from "./components/T32_ErrorBoundary";
import T33_ClickCounter from "./components/T33_ClickCounter";
import T33_HoverCounter from "./components/T33_HoverCounter";
import T34_ClickCounter from "./components/T34_ClickCounter";
import T34_HoverCounter from "./components/T34_HoverCounter";
import T35_ClickCounter from "./components/T35_ClickCounter";
import T37_User from "./components/T37_User";
import T37_Counter from "./components/T37_Counter";
import T37_ClickCounter from "./components/T37_ClickCounter";

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
      {/* <T11_Counter/> */}

      {/* <T13_FunctionClick/> */}
      {/* <T13_ClassClick/> */}
      {/* <T14_BindingEventHandlers/> */}

      {/* <T15_UnderstandingComponentsRendering/> */}

      {/* <T15_ParentComponent/> */}

      {/* <T16_ConditionalRendering/> */}

      {/* <T17_ListRendering/> */}
      {/* <T17_ListRenderingUsingComponent/> */}

      {/* <T18_ListsAndKeys/> */}

      {/* <T19_IndexAsKeyAntiPattern/> */}

      {/* <T20_StylingReactComponents primary={true}/>
      <T20_StylingReactComponents primary={false}/> */}

      {/* <T20_Inline/> */}
      {/* <T20_StylingUsingModule/> */}
      {/* <T20_StyleWithClassNames isActive={true} isDisabled={false} isRed={true}/>
      <T20_StyleWithClassNames isActive={true} isDisabled={true} isRed={true}/> */}

      {/* <T20_UsingStyleComponent isActive={true} isDisabled={false} isRed={true}/>
      <T20_UsingStyleComponent isActive={true} isDisabled={false} isRed={false}/>
      <T20_UsingStyleComponent isActive={true} isDisabled={true} isRed={true}/> */}

      {/* <T21_FormHandling/> */}

      {/* <T23_ComponentMountingLifecycleMethods/> */}

      {/* <T24_UpdatingLifecycleMethods/> */}

      {/* <T25_Fragment/> */}
      {/* <T25_Table/> */}

      {/* <T26_ParentComponent/> */}

      {/* <T28_Refs/> */}
      {/* <T28_CallbackRefs/> */}
      {/* <T29_FocusInput/> */}
      {/* <T30_FRParentInput/> */}
      {/* <T31_PortalDemo/> */}

      {/* <T32_ErrorBoundary>
        <T32_Hero heroName="Batman" />
      </T32_ErrorBoundary>
      <T32_ErrorBoundary>
        <T32_Hero heroName="Superman" />
      </T32_ErrorBoundary>
      <T32_ErrorBoundary>
        <T32_Hero heroName="Joker" />
      </T32_ErrorBoundary> */}

      {/* <T33_ClickCounter/>
      <T33_HoverCounter/> */}

      {/* <T34_ClickCounter/>
      <T34_HoverCounter/> */}
      {/* <T35_ClickCounter name='Jagdeep'/> */}

      {/* <T37_User name="Jagdeep"/> */}
      {/* <T37_User name={(isLoggedIn)=>isLoggedIn?'Jagdeep':'Guest'}/> */}
      {/* change prop name to render, this will not conflict with render lifecycle */}
      {/* <T37_User render={(isLoggedIn)=>isLoggedIn?'Jagdeep':'Guest'}/> */}

      {/* <T37_Counter
        render={(count, incrementCount) => (
          <T37_ClickCounter count={count} incrementCount={incrementCount} />
        )}
      /> */}
      <T37_Counter>
      {(count, incrementCount) => (
          <T37_ClickCounter count={count} incrementCount={incrementCount} />
        )}
      </T37_Counter>

      {/* <T43_postForm/> */}
    </div>
  );
}

export default App;
