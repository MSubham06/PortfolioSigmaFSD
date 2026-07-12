import { useEffect, useState } from 'react';
import sigmalogo from '../assets/sigmalogo.png';

function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHidden(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (hidden) return null;

  return (
    <div className="loader">
      <img src={sigmalogo} alt="Sigma Logo" />
    </div>
  );
}

export default Loader;