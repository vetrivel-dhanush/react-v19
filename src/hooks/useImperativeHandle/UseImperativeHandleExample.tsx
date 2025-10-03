import { useRef } from 'react';
import type { ChildComponentHandle } from './ChildComponent';
import ChildComponent from './ChildComponent';
import { Button } from '@/components/ui/button';

const UseImperativeHandleExample = () => {
  const childRef = useRef<ChildComponentHandle>(null);
  return (
    <div>
      <ChildComponent ref={childRef} />
      <Button
        onClick={() => {
          childRef.current?.customMethod();
        }}
      >
        Click me!
      </Button>
    </div>
  );
};

export default UseImperativeHandleExample;
