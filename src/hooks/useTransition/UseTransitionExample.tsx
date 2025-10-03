import { Input } from '@/components/ui/input';
import { useState, useTransition } from 'react';

const UseTransitionExample = () => {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState('');
  const [list, setList] = useState<string[]>([]);

  console.log('rendering...', isPending, list);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('handleChange called');
    const newValue = e.target.value;
    setInputValue(newValue);
    startTransition(() => {
      console.log('Transition started');
      const newList = [];
      for (let i = 0; i < 25000; i++) {
        newList.push(newValue);
      }
      setList(newList);
      console.log('Transition ended');
    });
    console.log('handleChange ended');
  };

  return (
    <div>
      <Input value={inputValue} onChange={handleChange} />
      {isPending ? <p>Loading...</p> : null}
      {!isPending && list.map((item, index) => <p key={index}>{item}</p>)}
    </div>
  );
};

export default UseTransitionExample;
