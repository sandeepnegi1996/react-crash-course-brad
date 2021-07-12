import Button from "./Button";

function Header(props) {
  const onClick = () => {
    console.log("add button is clicked");
  };
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button color="yellow" text="ADD" onClick={onClick} />
    </header>
  );
}

export default Header;
