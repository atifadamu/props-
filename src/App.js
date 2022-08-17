import React from "react";
import NavBar from "./components/NavBar";
import Todo from "./components/Todo";

function App() {
  let title = "My activities to do for the week";
  return;
  <div>
    <NavBar title={title} />
    <main>
      <Todo title="learning react" datetime="15 Agust 2022" />
      <Todo title="danceing react" datetime="15 Agust 2022" />
      <Todo title="playing react" datetime="15 Agust 2022" />
      <Todo title="eating react" datetime="15 Agust 2022" />
      <Todo title="sleeping react" datetime="15 Agust 2022" />
    </main>
  </div>;
}

export default App;
