import React, { useState, useEffect } from 'react';

const Quote = ({ gistUrl }) => {
  const [quoteData, setQuoteData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const defaultQuote = {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  };

  useEffect(() => {
    if (!gistUrl) {
      setQuoteData(defaultQuote);
      setLoading(false);
      return;
    }

    const fetchQuote = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(gistUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        // Assuming the Gist JSON has a "quote" and "author" field
        if (data && data.quote && data.author) {
          setQuoteData(data);
        } else {
          // If Gist format is unexpected, use default
          console.warn("Gist data format unexpected, using default quote.");
          setQuoteData(defaultQuote);
        }
      } catch (e) {
        console.error("Failed to fetch quote from Gist:", e);
        setError(e.message);
        setQuoteData(defaultQuote); // Fallback to default quote on error
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, [gistUrl]); // Re-run effect if gistUrl changes

  if (loading) {
    return <p>Loading quote...</p>;
  }

  // Even if there was an error, we show the default quote.
  // An explicit error message can be shown if desired:
  // if (error) {
  //   return <p>Error loading quote: {error}. Displaying a default quote.</p>;
  // }

  const displayQuote = quoteData || defaultQuote;

  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px', maxWidth: '600px', margin: '20px auto' }}>
      <blockquote style={{ margin: 0, fontStyle: 'italic', fontSize: '1.2em' }}>
        "{displayQuote.quote}"
      </blockquote>
      <p style={{ textAlign: 'right', marginTop: '10px', fontWeight: 'bold' }}>
        - {displayQuote.author}
      </p>
      {error && <p style={{color: 'red', fontSize: '0.9em', marginTop: '10px'}}>Could not load quote from Gist. Displaying a default quote.</p>}
    </div>
  );
};

export default Quote;
