import clsx from 'clsx';

interface Props {
  children?: React.ReactNode;
  className?: string;
  title?: string;
  onClick?: () => void;
}

const Button = ({ children, className, title, onClick }: Props) => (
  <button
    onClick={onClick}
    className={clsx('rounded-full border-green px-3', className)}
    title={title ?? children?.toString()}
  >
    {children}
  </button>
);

export default Button;
