import Child from './Child';
import { ErrorBoundary } from './ErrorBoundary';

const ErrorBoundaryExample = () => {
  return (
    <div className="grid grid-cols-2">
      <ErrorBoundary fallback="Error happened.">
        <Child hasError />
      </ErrorBoundary>
      <Child />
      <Child />
    </div>
  );
};

export default ErrorBoundaryExample;
