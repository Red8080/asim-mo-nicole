

import React from 'react';
import { IonContent, IonFooter, IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import './JupiterPage.css';

const JupiterPage: React.FC = () => {
  const history = useHistory();

  const handleGoBack = () => {
    history.push('/planet-page');
  };

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Jupiter Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="content">
        <div className="background-image"></div>
        <div className="container">
          <img
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b0b7f079-2f3a-4895-8dda-4f6bdb7a6659/db8siqg-5bf31fee-df61-41c2-8a40-3581c95fb16f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2IwYjdmMDc5LTJmM2EtNDg5NS04ZGRhLTRmNmJkYjdhNjY1OVwvZGI4c2lxZy01YmYzMWZlZS1kZjYxLTQxYzItOGE0MC0zNTgxYzk1ZmIxNmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.teUfI74QRgos6JUEmAbg9IuH5uYbtoFdlQ0lnAdaFFI" // Replace with an actual Jupiter image
            alt="Jupiter"
            className="container-image"
          />
          <div className="container-text">JUPITER</div>
          <div className="description-text">
            <p>JUPITER IS THE FIFTH PLANET FROM THE SUN AND THE LARGEST PLANET IN OUR SOLAR SYSTEM. IT IS A GAS GIANT, KNOWN FOR ITS MASSIVE SIZE AND STRONG MAGNETIC FIELD.</p>
          </div>
        </div>
        <IonButton className="Jupiter-go-back-button" onClick={handleGoBack}>
          GO BACK
        </IonButton>
        
      </IonContent>

      <IonFooter>
        <IonToolbar>
          <IonTitle>Footer</IonTitle>
        </IonToolbar>
      </IonFooter>
    </>
  );
};

export default JupiterPage;
