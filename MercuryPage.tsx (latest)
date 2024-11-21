import React from 'react';
import {
  IonContent,
  IonFooter,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
} from '@ionic/react';
import './MercuryPage.css';  // Keep the styles for MercuryPage here

function MercuryPage() {
  const mercuryImageUrl = 'https://openseauserdata.com/files/6ae921fc86fee3c6592f5f217209083d.png';
  const mercuryLink = 'https://example.com/mercury';

  // Function to handle "GO BACK"
  const goBack = () => {
    window.history.back(); // Navigates back to the previous page
  };

  return (
    <div className="mercury-page"> {/* Add a unique class for Mercury Page */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank Space</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="content">
        <div className="background-image"></div>
        <div className="container">
          <a
            href={mercuryLink}
            target="_blank"
            rel="noopener noreferrer"
            className="container-image-link"
          >
            <img src={mercuryImageUrl} alt="Mercury" className="container-image" />
          </a>
          <div className="container-text">MERCURY</div>
          <div className="description-text">
            <p>
              MERCURY IS THE SMALLEST AND CLOSEST PLANET TO THE SUN, KNOWN FOR ITS
              EXTREME TEMPERATURE VARIATIONS AND CRATERED, ROCKY SURFACE. IT HAS A
              THIN ATMOSPHERE AND COMPLETES AN ORBIT IN JUST 88 EARTH DAYS.
            </p>
          </div>
        </div>

        {/* GO BACK BUTTON */}
      <IonButton className="Mercury-go-back-button" onClick={goBack}>
  GO BACK
</IonButton>
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </div>  
  );
}

export default MercuryPage;
