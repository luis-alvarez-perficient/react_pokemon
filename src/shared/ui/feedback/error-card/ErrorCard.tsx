interface Props {
  message: string;
}

export const ErrorCard = ({ message }: Props) => (
  <div className="text-center text-red-600 py-8">
    <p>⚠️ Error: {message}</p>
  </div>
);
