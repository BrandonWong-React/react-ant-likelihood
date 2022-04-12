import React, { useState } from 'react';
import { ants, STATUS } from './config/const';
import {
  generateAntWinLikelihoodCalculator,
  getGlobalStatus,
} from './config/utils';
import AntItem from './components/AntItem';
import Button from './components/Button';
import Title from './components/Title';
import './assets/style.css';

export default function App() {
  const [antList, setAntList] = useState([]);
  const [globalStatus, setGlobalStatus] = useState(STATUS.INITIAL);

  const onFetchData = () => {
    setAntList(ants); //Set Ant List
    setGlobalStatus(STATUS.DATAFETCH); //Change Global Status
  };

  const onStartRace = () => {
    setGlobalStatus(STATUS.CACULATING); //Change Global Status
    //Caculate each ant likelihood simutaneously
    let ants_length = antList.length;
    for (let i = 0; i < ants_length; i++) {
      generateAntWinLikelihoodCalculator()((likelihood) => {
        setLikelihood(i, likelihood); //Set Likelihood value
      });
    }
  };

  const setLikelihood = (index, likelihood) => {
    const tmpList = [...antList];
    //add likelihood to index
    tmpList[index].likelihood = likelihood.toFixed(2);
    //sort list by likeli hood
    tmpList.sort((a, b) => {
      if (!a.likelihood || a.likelihood < b.likelihood) return 1;
      else if (!b.likelihood || a.likelihood > b.likelihood) return -1;
      return 0;
    });
    //check if all are Caculated
    if (tmpList.at(-1).likelihood) {
      setGlobalStatus(STATUS.FINISHED);
    }
    setAntList(tmpList);
  };

  return (
    <div>
      <Title title={getGlobalStatus(globalStatus)} />
      <Button
        title="Fetch Data"
        onClick={onFetchData}
        hidden={globalStatus !== 0}
      />

      {antList.map((ant, index) => (
        <AntItem key={index} data={ant} status={globalStatus} />
      ))}

      <div className="mt-16">
        <Button
          title="Start a Race"
          onClick={onStartRace}
          hidden={globalStatus !== 1}
        />
      </div>
    </div>
  );
}
