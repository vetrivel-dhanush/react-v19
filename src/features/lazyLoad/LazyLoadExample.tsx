import { lazy, Suspense } from 'react';

const Page = lazy(() => import('./Page'));

const LazyLoadExample = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Page />
      </Suspense>
    </div>
  );
};

export default LazyLoadExample;
