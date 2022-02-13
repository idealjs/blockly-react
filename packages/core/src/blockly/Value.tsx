import { FC } from "react";

const Value: FC = (props) => {
  const { children } = props;
  return <value>{children}</value>;
};

export default Value;
