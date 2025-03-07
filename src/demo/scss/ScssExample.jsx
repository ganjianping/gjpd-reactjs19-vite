import React from 'react';
import './ScssExample.scss';

function ScssExample() {
  const scssFeatures = [
    {
      title: 'Variables',
      description: 'SCSS variables for colors, typography, and spacing'
    },
    {
      title: 'Mixins',
      description: 'Reusable styles with @mixin and @include'
    },
    {
      title: 'Nesting',
      description: 'Nested selectors for better organization'
    },
    {
      title: 'Grid System',
      description: 'Responsive grid using CSS Grid'
    },
    {
      title: 'Media Queries',
      description: 'Responsive design with SCSS mixins'
    },
    {
      title: 'Color Functions',
      description: 'SCSS color manipulation functions'
    }
  ];

  return (
    <div className="scss-demo">
      <h2>SCSS Features Demo</h2>
      
      <div className="features-grid">
        {scssFeatures.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className="button-showcase">
        <button className="primary-button">Primary Button</button>
        <button className="success-button">Success Button</button>
        <button className="warning-button">Warning Button</button>
        <button className="error-button">Error Button</button>
      </div>

      <div className="responsive-demo">
        <h3>Responsive Text</h3>
        <p>This section demonstrates responsive typography using SCSS mixins.</p>
        <p>Resize your browser window to see the changes in font size.</p>
      </div>
    </div>
  );
}

export default ScssExample;