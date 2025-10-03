import { useImperativeHandle, type Ref } from 'react';

export type ChildComponentHandle = {
  customMethod: () => void;
};

const ChildComponent = ({ ref }: { ref: Ref<ChildComponentHandle> }) => {
  useImperativeHandle(ref, () => ({
    customMethod: () => {
      console.log('Custom method called');
    },
  }));

  return <div>ChildComponent</div>;
};

export default ChildComponent;
