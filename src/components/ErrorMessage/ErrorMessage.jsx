import { Toaster, resolveValue } from 'react-hot-toast';

const ErrorMessage = () => {
  return (
    <Toaster>
      {t => (
        <div
          style={{
            opacity: t.visible ? 1 : 0,
            background: 'black',
            padding: 8,
          }}
        >
          {resolveValue(t.message, t)}
        </div>
      )}
    </Toaster>
  );
};

export default ErrorMessage;
