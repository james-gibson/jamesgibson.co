import React, { useState, useEffect } from 'react';
import * as runtime from 'react/jsx-runtime';
import Quote from './Quote'; // Import original Quote component

const EnhancedQuote = ({ gistUrl }) => {
  const [gistContent, setGistContent] = useState(null);
  const [contentType, setContentType] = useState(null); // 'jsx' or 'json'
  const [Component, setComponent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch content from Gist and determine type
  useEffect(() => {
    if (!gistUrl) {
      setLoading(false);
      return;
    }

    const fetchGistContent = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(gistUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        const files = data.files;

        // First try to find JSX/JS files
        const jsxFile = Object.values(files).find(file => 
          file.filename.endsWith('.jsx') || file.filename.endsWith('.js')
        );

        if (jsxFile && jsxFile.content) {
          // Check if content looks like JSX (contains export default or React)
          const content = jsxFile.content;
          if (content.includes('export default') || content.includes('React') || content.includes('jsx')) {
            setGistContent(content);
            setContentType('jsx');
            return;
          }
        }

        // Fallback to JSON files or any file that might contain quote data
        const jsonFile = Object.values(files).find(file => 
          file.filename.endsWith('.json') || Object.keys(files).length === 1
        );

        if (jsonFile && jsonFile.content) {
          try {
            const jsonContent = JSON.parse(jsonFile.content);
            if (jsonContent.quote && jsonContent.author) {
              setGistContent(jsonContent);
              setContentType('json');
              return;
            }
          } catch (jsonError) {
            console.warn("Content is not valid JSON, treating as potential JSX");
          }
        }

        // If we get here, no suitable content was found
        throw new Error('No suitable JSX or JSON quote content found in Gist');

      } catch (e) {
        console.error("Failed to fetch content from Gist:", e);
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchGistContent();
  }, [gistUrl]);

  // Load JSX content if type is jsx
  useEffect(() => {
    if (contentType !== 'jsx' || !gistContent) return;

    const loadJsxScript = async () => {
      try {
        const blob = new Blob([gistContent], { type: 'application/javascript' });
        const scriptUrl = URL.createObjectURL(blob);

        const script = document.createElement('script');
        script.type = 'module';
        script.async = true;
        script.defer = true;

        script.onload = async () => {
          try {
            import(/* webpackIgnore: true */ scriptUrl)
              .then(module => {
                if (module.default) {
                  setComponent(() => module.default);
                } else {
                  setError(new Error('JSX module does not have a default export'));
                }
              })
              .catch(importError => {
                setError(importError);
              });
          } catch (err) {
            setError(err);
          }
        };

        script.onerror = () => {
          setError(new Error('Failed to execute JSX script'));
        };

        script.src = scriptUrl;
        document.head.appendChild(script);

        return () => {
          if (script.parentNode) {
            document.head.removeChild(script);
          }
          URL.revokeObjectURL(scriptUrl);
        };
      } catch (err) {
        setError(err);
      }
    };

    loadJsxScript();
  }, [contentType, gistContent]);

  if (loading) {
    return <p>Loading quote...</p>;
  }

  // If error or no content, fall back to original Quote component
  if (error || !gistContent) {
    return <Quote gistUrl={gistUrl} />;
  }

  // Handle JSON content type - pass to original Quote component
  if (contentType === 'json') {
    return <Quote gistUrl={gistUrl} />;
  }

  // Handle JSX content type
  if (contentType === 'jsx') {
    if (error) {
      return (
        <div>
          <h3>Error loading JSX content</h3>
          <div style={{ color: 'red' }}>{error.message}</div>
          <Quote gistUrl={gistUrl} />
        </div>
      );
    }

    if (!Component) {
      return (
        <div>
          <pre style={{
            padding: '12px',
            backgroundColor: '#f5f5f5',
            borderRadius: '4px',
            whiteSpace: 'pre-wrap',
            fontFamily: 'monospace',
            maxHeight: '300px',
            overflow: 'auto'
          }}>
            {gistContent}
          </pre>
        </div>
      );
    }

    return <Component {...runtime} />;
  }

  // Final fallback
  return <Quote gistUrl={gistUrl} />;
};

export default EnhancedQuote;
