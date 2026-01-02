import Button from "./Button";
type Props = {
  children: React.ReactNode;
};
const ButtonLogin = ({ children }: Props) => {
  const handleLoginClick = () => {
    // Implement login logic here
    console.log("Login button clicked");
  };
  return (
    <Button variant="mcm-white" size="lg" onClick={handleLoginClick}>
      {children}
    </Button>
  );
};

export default ButtonLogin;
