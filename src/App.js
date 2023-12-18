import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodoApp from './Todoapp'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoApp />} /> {/* Route for TodoApp */}
      </Routes>
    </Router>
  );
};

export default App;

