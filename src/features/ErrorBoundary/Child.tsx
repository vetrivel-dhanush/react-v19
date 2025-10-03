type ChildProps = {
  hasError?: boolean;
};

const Child = ({ hasError }: ChildProps) => {
  if (hasError) {
    throw new Error('I am an error from Child component');
  }

  return <div>Child</div>;
};

export default Child;
