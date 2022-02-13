import { FC } from "react";

const Field: FC = (props) => {
  const { children } = props;
  return <field>{children}</field>;
};

export default Field;
