interface Props {
  error?: string | React.ReactNode;
}

const ErrorMessage = ({ error }: Props) => (
  <span className='text-negative-900 text-caption'>{error}</span>
);

export default ErrorMessage;
