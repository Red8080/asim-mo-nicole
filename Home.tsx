import React, { useState } from 'react';
import { IonContent, IonFooter, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { volumeHighOutline, volumeMuteOutline } from 'ionicons/icons'; // Import Ionic sound icons
import './Home.css';
import neptuneLogo from './logo2.png';

const Example: React.FC = () => {
  const history = useHistory();
  const [isSoundOn, setIsSoundOn] = useState(true); // State for toggling sound

  // Navigate to PlanetPage
  const handleClick = () => {
    history.push('/planet-page');
  };

  // Toggle sound state
  const toggleSound = () => {
    setIsSoundOn(!isSoundOn);
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank Space</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="content" onClick={handleClick}>
        {/* Background Image or Interactive Area */}
        <div className="background-image"></div>

        <div className="container">
          <div className="container-logo-link">
            {/* Logo Section */}
            <img src={neptuneLogo} alt="Neptune" className="container-logo" />
          </div>
          <div className="description-text">
            <p>TAP ANYWHERE TO TRAVEL THE SOLAR SYSTEM!</p>
          </div>
        </div>

        {/* Sound Toggle Button */}
        <div
          className={`sound-toggle ${isSoundOn ? 'sound-on' : 'sound-off'}`} // Toggle animation classes
          onClick={(e) => {
            e.stopPropagation(); // Prevent navigation when clicking the sound icon
            toggleSound();
          }}
        >
          <IonIcon
            icon={isSoundOn ? volumeHighOutline : volumeMuteOutline}
            style={{ fontSize: '40px', cursor: 'pointer' }}
          />
        </div>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
};

export default Example;
