import React from "react";
import {
  IonBackButton,
  IonButtons,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonLabel,
  IonList,
  IonItem,
} from "@ionic/react";
const Details = (props) => {
  let prop = props;
  let match = prop.match;
  let data = JSON.parse(match.params.data);
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
          </IonButtons>
          <IonTitle>{data.name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {data.matches.map((m, idx) => (
          <IonList key={idx} lines="none">
            <IonItem>
              <IonLabel>
                <IonGrid>
                  <IonRow>
                    <IonCol>
                      <p>{m.date}</p>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      {m.stadium.name}, {m.city}
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      <h2>{m.group}</h2>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol size="5">
                      <b>
                        {m.team1.name} ({m.score1})
                      </b>
                    </IonCol>
                    <IonCol size="2">vs</IonCol>
                    <IonCol size="5">
                      <b>
                        ({m.score2}) {m.team2.name}
                      </b>
                    </IonCol>
                  </IonRow>
                  <IonRow>
                    <IonCol>
                      {m.goals1.map((g1, gidx1) => (
                        <p key={gidx1}>
                          {g1.name} `{g1.minute}
                        </p>
                      ))}
                    </IonCol>
                    <IonCol>&nbsp;</IonCol>
                    <IonCol>
                      {m.goals2.map((g2, gidx2) => (
                        <p key={gidx2}>
                          {g2.name} `{g2.minute}
                        </p>
                      ))}
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonLabel>
            </IonItem>
          </IonList>
        ))}
      </IonContent>
    </>
  );
};
export default Details;
