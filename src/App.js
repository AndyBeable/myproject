import React, { useEffect, useState } from 'react';
import Loading from './Loading';
const url = 'https://course-api.com/react-tours-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return <h1>Tours Project Setup</h1>;
}

export default App;
