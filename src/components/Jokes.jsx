import React, { useState, useEffect } from 'react';

const FunJokes = () => {
  const [joke, setJoke] = useState('');
  const [punchline, setPunchline] = useState('');

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup}`);
      setPunchline(`${data.punchline}`)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen md:bg-transparent text-center bg-black">
      <div className="max-w-md p-4 rounded shadow bg-white border-2 border-black text-black md:rounded-xl bg-opacity-70 lg:shadow-black lg:shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">Random Joke Generator</h2>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={fetchJoke}
        >
          Get Joke
        </button>
        <p className="mt-6">{joke}</p>
        <p className="mt-6">{punchline}</p>
      </div>
    </div>
  );
};

export default FunJokes;
