import React, { useEffect } from 'react';
import './SplashScreen.css';
import rocket from './rocketship.png'; // Your rocket image

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 3000); // Splash duration in milliseconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="splash-screen">
     
    
      <img src={rocket} alt="Rocket" className="splash-rocket" />
    </div>
  );
};

export default SplashScreen;

