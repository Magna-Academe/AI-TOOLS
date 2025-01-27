import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.location.href = process.env.REACT_APP_REDIRECT_URL;
  }, []);

  return (
    <div>
      <h1>Redirecting...</h1>
    </div>
  );
}

export default App;