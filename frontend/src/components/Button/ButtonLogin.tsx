import ButtonLink from "./ButtonLink";
const backendUrl = import.meta.env.VITE_API_URL;

type Props = {
  children: React.ReactNode;
};
const ButtonLogin = ({ children }: Props) => {
  return (
    <ButtonLink variant="mcm-white" size="lg" to={`${backendUrl}/auth/google`}>
      {children}
    </ButtonLink>
  );
};

export default ButtonLogin;
