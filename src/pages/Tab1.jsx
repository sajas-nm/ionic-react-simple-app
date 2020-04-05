import React, { useState, useEffect } from "react";
import {
  IonList,
  IonItem,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonAvatar,
  IonLoading,
  IonIcon,
} from "@ionic/react";
// import ExploreContainer from "../components/ExploreContainer";
import { football, trophyOutline } from "ionicons/icons";
import "./Tab1.css";
import axios from "axios";

const Tab1 = (props) => {
  const [data, setData] = useState([]);
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json"
      );
      setData(result.data.rounds);
      setShowLoading(false);
    };

    fetchData();
  }, []);

  const showDetail = (data) => {
    let prop = props;
    prop.history.push({
      pathname: "/tab1/details/" + JSON.stringify(data),
    });
  };
  
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonAvatar slot="start" className="trophyIcon">
            <IonIcon size="large" icon={trophyOutline} />
          </IonAvatar>
          <IonTitle>World Cup 2018</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={"Loading..."}
        />
        <IonList>
          {data.map((round, idx) => (
            <IonItem
              key={idx}
              onClick={() => {
                showDetail(round);
              }}
            >
              <IonAvatar slot="start">
                <IonIcon className="MyIcon" icon={football} />
              </IonAvatar>
              <IonLabel>
                <h2>{round.name}</h2>
                {round.matches.map((im, idx2) => (
                  <p key={idx2}>
                    <span>
                      {im.date} {im.time}: {im.team1.name} vs {im.team2.name}
                    </span>
                  </p>
                ))}
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </>
  );
};

export default Tab1;
