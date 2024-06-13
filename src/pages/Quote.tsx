import { useEffect, useState } from 'react';
import { QuoteType } from '../types/types';

const Quote = () => {
  const [apiData, setApiData] = useState<QuoteType | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.quotable.io/quotes/random')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const trimedData = {
          content: data[0]?.content,
          author: data[0]?.author,
        };
        setApiData(trimedData);
        setLoading(false);
      });
  }, []);

  return (
    <div className="text-bold my-4 mx-4">
      {!loading && (
        <div>
          <div className="text-center text-sky-400">
            {'"'}
            {apiData?.content}
            {'"'}
          </div>
          <div className="text-teal-300 text-center mr-4">
            {'-'}
            {apiData?.author}
            {'-'}
          </div>
        </div>
      )}
      {loading && (
        <div className="animate-bounce mt-2 mx-auto w-full text-center">🤖</div>
      )}
    </div>
  );
};

export default Quote;
