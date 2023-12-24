// Layout.js

import React from 'react';

import AnimatedCursor from '../AnimatedCursor/AnimatedCursor';
import '../AnimatedCursor/AnimatedCursor.css'; // Import your cursor styling

const Layout = ({ children }) => {
  return (
    <div>
      <AnimatedCursor />
      {children}
    </div>
  );
};

export default Layout;
