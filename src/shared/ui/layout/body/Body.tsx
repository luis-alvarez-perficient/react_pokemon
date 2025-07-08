import "./Body.css";
type Props = {
  children?: React.ReactNode;
};

function Body({ children }: Props) {
  return <div className="container-body">{children}</div>;
}

export default Body;
