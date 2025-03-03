import { useState } from 'react';

export function JsxExample() {
  const [count, setCount] = useState(0);
  const name = "React";
  const user = {
    firstName: 'John',
    lastName: 'Doe'
  };
  const items = ['Apple', 'Banana', 'Orange'];
  const isLoggedIn = true;

  // JSX with expressions
  const greeting = <div>Hello, {name}!</div>;

  // JSX with object properties
  const userGreeting = (
    <div>
      Welcome, {user.firstName} {user.lastName}
    </div>
  );

  return (
    <div className="jsx-features">
      <h1>React JSX Essentials</h1>
      
      <h3>JavaScript Expressions in JSX</h3>
      {greeting}
      {userGreeting}
      
      <h3>Conditional rendering</h3>
      {isLoggedIn ? (
        <p>Welcome back!</p>
      ) : (
        <p>Please log in</p>
      )}

      <h3>Event Handling & useState hook</h3>
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment
        </button>
      </div>

      <h3>Lists and keys</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>Inline styles</h3>
      <div style={{
        backgroundColor: '#f0f0f0',
        padding: '1rem',
        borderRadius: '4px',
        marginTop: '1rem'
      }}>
        <p>Applies CSS directly through the style prop using JavaScript objects, Uses camelCase property names instead of kebab-case CSS properties</p>
      </div>
    </div>
  );
}