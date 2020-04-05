import React, { useEffect, useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  // IonItem,
  // IonIcon,
  // IonButton,
} from "@ionic/react";
// import { pin, wifi, wine, warning, walk } from "ionicons/icons";
import "./Tab2.css";

const Tab2 = () => {
  const [name, setName] = useState("");
  const handlerChange = (e) => {
    // localStorage.setItem("name", e.detail.value);
    setName(e.detail.value);
  };
  // useEffect(() => {
  //   let name = localStorage.getItem("name");
  //   setName(name);
  // }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>HI!</IonCardSubtitle>
            <IonCardTitle>{name}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Name</IonLabel>
              <IonInput onIonChange={handlerChange}></IonInput>
            </IonItem>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
