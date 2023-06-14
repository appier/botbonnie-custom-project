import useAuth from "~/hooks/useAuth";

interface Props {
  children: React.ReactNode;
}

const Auth: React.FC<Props> = ({ children }) => {
  const { isLogin } = useAuth();
  if (!isLogin) return <></>;
  return <>{children}</>;
};

export default Auth;
