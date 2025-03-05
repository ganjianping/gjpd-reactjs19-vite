import { useState, useEffect } from 'react';

const ChildComponent = ({ count }) => {
  useEffect(() => {
    console.log('Child Component Mounted');
    return () => {
      console.log('Child Component Will Unmount');
    };
  }, []);

  useEffect(() => {
    console.log('Child Component Updated: count changed to', count);
  }, [count]);

  return (
    <div style={{ 
      padding: '20px',
      margin: '10px 0',
      border: '1px solid #ddd',
      borderRadius: '4px'
    }}>
      <h3>Child Component</h3>
      <p>Count from parent: {count}</p>
    </div>
  );
};

const LifecycleExample = () => {
  const [count, setCount] = useState(0);
  const [showChild, setShowChild] = useState(true);

  // Component Mount
  useEffect(() => {
    console.log('Parent Component Mounted');
    
    // Component Unmount
    return () => {
      console.log('Parent Component Will Unmount');
    };
  }, []);

  // Component Update
  useEffect(() => {
    console.log('Parent Component Updated: count is', count);
  }, [count]);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>React Lifecycle Example</h2>
      <p>Open the browser console to see lifecycle logs</p>
      
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setCount(c => c + 1)}
          style={{
            marginRight: '10px',
            padding: '8px 16px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Increment Count: {count}
        </button>
        
        <button
          onClick={() => setShowChild(!showChild)}
          style={{
            padding: '8px 16px',
            backgroundColor: '#28a745',
            color: 'white',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          {showChild ? 'Hide' : 'Show'} Child Component
        </button>
      </div>

      {showChild && <ChildComponent count={count} />}

      <div style={{ marginTop: '20px' }}>
        <h3>Lifecycle Explanation:</h3>
        <ul>
          <li>Mount: When component is first rendered</li>
          <li>Update: When state or props change</li>
          <li>Unmount: When component is removed</li>
        </ul>
        <p>
          This example uses useEffect hooks to demonstrate lifecycle events.
          Check the console to see when each lifecycle event occurs:
        </p>
        <ul>
          <li>Click the increment button to trigger updates</li>
          <li>Toggle the child component to see mount/unmount</li>
        </ul>
      </div>
    </div>
  );
};

export default LifecycleExample;