import { GoogleLogin } from "@react-oauth/google";
const URL = import.meta.env.VITE_API_URL;

export default function GoogleLoginButton({
  onLoginSucess,
}: {
  onLoginSucess: (token: string) => void;
}) {
  return (
    <GoogleLogin
      onSuccess={(credencialResponse) => {
        const token = credencialResponse.credential;

        fetch(`${URL}/auth/google`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        })
          .then((response) => response.json())

          .then((data) => {
            onLoginSucess(data.access_token);
          });
      }}
      onError={() => {
        console.log("Login Error");
      }}
    />
  );
}
