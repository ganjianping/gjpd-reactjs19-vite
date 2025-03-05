import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

const HooksExample = () => {
  // useState : returns a stateful value and a function to update it
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  // useRef : creates a mutable reference that persists across renders of a component.
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  // useEffect example
  useEffect(() => {
    console.log('Component mounted');
    return () => console.log('Component unmounted');
  }, []); // Empty array means this effect will only run once

  useEffect(() => {
    renderCount.current += 1;
    console.log(`Component rendered ${renderCount.current} times`);
  }); // No dependencies means this effect will run on every render

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]); // Only re-run the effect if count changes

  // useMemo : returns a memoized value
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value...');
    return count * count;
  }, [count]);

  // useCallback : returns a memoized callback
  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty array means this callback will not change

  return (
    <div className="hooks-example">
      <h2>React Hooks Example</h2>

      <section>
        <h3>useState & useEffect</h3>
        <p>Count: {count}</p>
        <p>Squared: {expensiveValue}</p>
        <button onClick={handleClick}>Increment</button>
      </section>

      <section>
        <h3>useRef</h3>
        <input
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <button onClick={() => inputRef.current.focus()}>
          Focus Input
        </button>
      </section>

      <section>
        <h3>Component Info</h3>
        <p>Render count: {renderCount.current}</p>
        <p>Current text: {text}</p>
      </section>
    </div>
  );
};

export default HooksExample;