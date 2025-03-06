import React, { use, useState, useOptimistic, useTransition } from 'react';
import { useFormState } from 'react-dom';

// Simulated async data fetch
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "Data loaded successfully!" });
    }, 1000);
  });
};

// Simulated form action
async function submitForm(prevState, formData) {
  'use server';  // Mark this as a server action
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
  return `Form submitted with data: ${formData.get('message')}`;
}

// Error Boundary Component using Error Boundary Hook (new in React 19)
function ErrorBoundary({ children, fallback }) {
  const [error, setError] = React.useState(null);

  if (error) {
    return fallback;
  }

  return (
    <React.Fragment>
      {React.cloneElement(children, {
        onError: (e) => setError(e)
      })}
    </React.Fragment>
  );
}

// Component demonstrating use hook
function AsyncComponent() {
  const data = use(fetchData());
  return <div>{data.message}</div>;
}

// Component demonstrating form state management
function FormExample() {
  const [formState, setFormState] = useState('Initial state');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 1000));
    setFormState(`Form submitted with data: ${message}`);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="message" placeholder="Enter message" />
      <button type="submit">Submit Form</button>
      <p>Form State: {formState}</p>
    </form>
  );
}

// Component demonstrating useOptimistic hook
function OptimisticExample() {
  const [todos, setTodos] = useState(['Initial todo']);
  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (state, newTodo) => [...state, newTodo]
  ); // Optimistic update for adding new todo

  async function addTodo(newTodo) {
    addOptimisticTodo(newTodo);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setTodos(current => [...current, newTodo]);
  }

  return (
    <div>
      <button onClick={() => addTodo(`New Todo ${optimisticTodos.length + 1}`)}>
        Add Todo
      </button>
      <ul>
        {optimisticTodos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

// Main component showcasing React 19 features
function React19Features() {
  const [count, setCount] = useState(0);
  const [isPending, startTransition] = useTransition();

  return (
    <div className="react19-features">
      <h2>React 19 New Features Demo</h2>
      
      <section>
        <h3>1. Error Boundary Hook</h3>
        <ErrorBoundary fallback={<div>Something went wrong!</div>}>
          <div>This content is protected by Error Boundary</div>
        </ErrorBoundary>
      </section>

      <section>
        <h3>2. Use Hook for Data Fetching</h3>
        <React.Suspense fallback={<div>Loading...</div>}>
          <AsyncComponent />
        </React.Suspense>
      </section>

      <section>
        <h3>3. Form Actions with useFormState</h3>
        <FormExample />
      </section>

      <section>
        <h3>4. Optimistic Updates with useOptimistic</h3>
        <OptimisticExample />
      </section>

      <section>
        <h3>5. Improved State Management with Transitions</h3>
        <div>
          <p>Count: {count}</p>
          <button 
            onClick={() => {
              startTransition(() => {
                setCount(c => c + 1);
              });
            }}
            aria-label={isPending ? 'Updating count' : 'Increment count'}
            tabIndex={0}
          >
            {isPending ? 'Updating...' : 'Increment'}
          </button>
        </div>
      </section>
    </div>
  );
}

export default React19Features;