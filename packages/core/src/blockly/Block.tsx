import { FC } from "react";

const Block: FC = (props) => {
  const { children } = props;
  return <block>{children}</block>;
};

export default Block;
