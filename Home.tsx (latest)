import React, { useState, useRef, useEffect } from 'react';
import { IonButton, IonContent, IonFooter, IonHeader, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { volumeHighOutline, volumeMuteOutline } from 'ionicons/icons';
import './Home.css';
import neptuneLogo from './BLANKSPACELOGOTOTOO.png';


const Home: React.FC = () => {
  const history = useHistory();
  const [isSoundOn, setIsSoundOn] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null); // Audio ref to control playback

  // Function to handle transition and navigation
  const handleClick = () => {
    setIsTransitioning(true); // Start transition effect
    setTimeout(() => {
      history.push('/planet-page'); // Navigate to new page after the animation
    }, 700); // Duration should match the CSS animation time (0.7s)
  };

  // Toggle sound on or off
  const toggleSound = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsSoundOn(!isSoundOn);
  };

  // Handle audio playback based on sound state
  useEffect(() => {
    if (audioRef.current) {
      if (isSoundOn) {
        audioRef.current.play(); // Play audio if sound is on
      } else {
        audioRef.current.pause(); // Pause audio if sound is off
      }
    }
  }, [isSoundOn]); // This will run every time isSoundOn changes

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank Space</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className={`content ${isTransitioning ? 'zoom-transition' : ''}`} onClick={handleClick}>
        <div className="background-image"></div>
        

        {/* Audio element for background music */}
        <audio ref={audioRef} loop>
  <source src="/src/components/Terraria Music -Space.mp3" type="audio/mp3" />
  Your browser does not support the audio element.
</audio>



        <div className="container">
          <div className="container-logo-link">
            <img src={neptuneLogo} alt="Neptune" className="container-logo" />
          </div>
          <div className="description-text">
            <p>TAP ANYWHERE TO TRAVEL THE SOLAR SYSTEM!</p>
          </div>
        </div>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonButton fill="clear" onClick={toggleSound}>
            <IonIcon icon={isSoundOn ? volumeHighOutline : volumeMuteOutline} />
            {isSoundOn ? 'Sound On' : 'Sound Off'}
          </IonButton>
        </IonToolbar>
      </IonFooter>
    </>
  );
};

export default Home;
