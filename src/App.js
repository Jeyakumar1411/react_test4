
// import ContextA, { HandleName, Nme } from "./components/useContext/ContextA";
import SingleInputFields from "./components/SingleInputFields/SingleInputFields";
import MultiInputFields from "./components/multiInputFields/MultiInputFields";
import Reducer from "./components/useContext/hooks/Reducer";


function App() {

  return (
    <div>

      {/* <ContextA /> */}

      {/* <p>{Nme}</p>
      <button onClick={() => HandleName()}>Click Here</button> */}

        <Reducer />   {/*{Reducer is like a useState and it is help multiple operations}  */}


        <SingleInputFields/>

        <MultiInputFields/>

    </div>
  );
}

export default App;
