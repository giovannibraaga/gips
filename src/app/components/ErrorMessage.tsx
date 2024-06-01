interface ErrorMessageProps {
  error: string;
}

export default function ErrorMessage({ error }: ErrorMessageProps) {
  return <p className="text-red-500 mt-4">{error}</p>;
}
