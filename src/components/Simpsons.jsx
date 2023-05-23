import React, { useState, useEffect } from 'react';

const Simpsons = () => {
  const [quote, setQuote] = useState('');
  const [Char, setChar] = useState('');
  const [Img, setImg] = useState('');

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
      const simpsdata = await response.json();
      setQuote(`${simpsdata[0].quote}`);
      setChar(`- ${simpsdata[0].character}`)
      setImg(`${simpsdata[0].image}`)
    // console.log(simpsdata)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-auto pb-20 md:pb-40 md:bg-transparent text-center bg-black">
      <div className="max-w-lg p-4 rounded shadow bg-white border-2 border-black text-black md:rounded-xl bg-opacity-70 lg:shadow-black lg:shadow-2xl">
        <h2 className="text-2xl font-bold mb-4">Simpsons Quotes</h2>
        <img className=' max-h-64 mx-auto pb-3 ' src={Img}></img>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          onClick={fetchQuote}
        >
          Get Quote
        </button><div>
        {quote && <p className="mt-6">{quote}</p>}</div>
        <div>{Char && <p className="mt-6">{Char}</p>}</div>
      </div>
    </div>
  );
};

export default Simpsons;