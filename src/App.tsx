import React from "react";
import { Filters } from "./components/filters/filters";

function App() {
  return (
    <div className="App">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore cumque in minus quam distinctio nulla temporibus incidunt esse vitae fuga, tempore officia ipsam ab hic harum rem reprehenderit. Eaque, incidunt!
      <Filters>
        <input type='text' placeholder="инпут"/>
      </Filters>

      <Filters isModal>
        <input type='text' placeholder="инпут"/>
      </Filters>
    </div>
  );
}

export default App;
