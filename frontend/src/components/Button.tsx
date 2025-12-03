type Props = {
  children: React.ReactNode;
  isLoading: boolean;
  onClick: () => void;
};

function Button({ children, isLoading, onClick }: Props) {
  return (
    <button
      disabled={isLoading}
      type="button"
      className={`btn btn-${isLoading ? "secondary" : "primary"}`}
      onClick={onClick}
    >
      {isLoading ? "Loading..." : children}
    </button>
  );
}

export default Button;
