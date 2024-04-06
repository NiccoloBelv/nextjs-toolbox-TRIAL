import React, { useState, useEffect } from 'react';

const JokeBlockWithApiErrorHandling = () => {
  const [joke, setJoke] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/joke')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setJoke(data);
      })
      .catch(error => {
        setError(error.toString());
      });
  }, []);

  if (error) {
    return <div>Error loading joke: {error}</div>;
  }

  if (!joke) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {joke.setup} - {joke.punchline}
    </div>
  );
};

export default JokeBlockWithApiErrorHandling;
