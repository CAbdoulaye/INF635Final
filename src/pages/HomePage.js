import { useState } from 'react';
import Assignments from '../components/Task/Assignments';

export default function HomePage() {
  return (
    <div className="App">
      <h1>Welcome To My Assignment Manager</h1>
      <Assignments />
    </div>
  );
}