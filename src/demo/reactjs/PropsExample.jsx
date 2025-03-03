import React from 'react';

// Child component that receives props
const Greeting = ({ name, age, isStudent }) => {
  return (
    <div className="greeting">
      <h3>Hello, {name}!</h3>
      <p>Age: {age}</p>
      <p>{isStudent ? 'You are a student' : 'You are not a student'}</p>
    </div>
  );
};

// Child component with different props type examples
const UserProfile = (props) => {
  return (
    <div className="user-profile">
      <h4>User Profile</h4>
      <p>Skills: {props.skills.join(', ')}</p>
      <button onClick={() => props.onUpdateAge(props.id)}>
        Update Age
      </button>
    </div>
  );
};

// Parent component demonstrating props usage
const PropsExample = () => {
  const handleAgeUpdate = (userId) => {
    alert(`Updating age for user ${userId}`);
  };

  return (
    <div className="props-example">
      <h2>React Props Example</h2>
      <div className="examples">
        {/* Example of passing string, number, and boolean props */}
        <Greeting 
          name="John Doe" 
          age={25} 
          isStudent={true} 
        />

        {/* Example with default prop value for isStudent */}
        <Greeting 
          name="Jane Smith" 
          age={30} 
        />

        {/* Example of passing array and function as props */}
        <UserProfile 
          id={1}
          skills={['React', 'JavaScript', 'CSS']}
          onUpdateAge={handleAgeUpdate}
        />
      </div>
    </div>
  );
};

export default PropsExample;