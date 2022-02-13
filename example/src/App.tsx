import "./App.css";

import { BlocklyWorkspace } from "@idealjs/blockly-react";
import { useEffect, useRef } from "react";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(ref.current!);
  }, []);

  return (
    <div className="App" ref={ref} style={{ height: "100vh", width: "100vw" }}>
      <BlocklyWorkspace />
    </div>
  );
}

export default App;
