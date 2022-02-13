import Blockly from "blockly";
import { Fragment, useEffect, useRef } from "react";

const toolbox = {
  kind: "flyoutToolbox",
  contents: [
    {
      kind: "block",
      type: "controls_if",
    },
    {
      kind: "block",
      type: "controls_repeat_ext",
    },
    {
      kind: "block",
      type: "logic_compare",
    },
    {
      kind: "block",
      type: "math_number",
    },
    {
      kind: "block",
      type: "math_arithmetic",
    },
    {
      kind: "block",
      type: "text",
    },
    {
      kind: "block",
      type: "text_print",
    },
  ],
};

const BlocklyWorkspace = () => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      Blockly.inject(ref.current, { toolbox });
    }
  }, []);
  return (
    <Fragment>
      <div ref={ref} style={{ height: "100%" }}></div>
    </Fragment>
  );
};

export default BlocklyWorkspace;
