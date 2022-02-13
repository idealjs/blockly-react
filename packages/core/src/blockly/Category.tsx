import { FC } from "react";

const Category: FC = (props) => {
  const { children } = props;
  return <category>{children}</category>;
};

export default Category;
