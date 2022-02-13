import { FC } from "react";

const Shadow: FC = (props) => {
  const { children } = props;
  return <shadow>{children}</shadow>;
};

export default Shadow;
