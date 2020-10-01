import { Grid } from '@material-ui/core';
import { ImportExportRounded } from '@material-ui/icons';
import React, { useState, useEffect, Fragment } from 'react';
import "./App.css"
import MyCard from './components/MyCard';
import Navbar from './components/Navbar';
import { getMatches } from "./api/Api";

const App= () => {
  const dat= Date().toLocaleString();
  // let currentTime = dat.getHours().toString();

  // console.log(dat);

  const [matches, setMatches] = useState([]);

  useEffect(()=>{
    getMatches()
    .then((data) => {
    setMatches(data.matches);
    console.log(data.matches);
  })
    .catch((error) => alert("Could not load data"));
  },[]);

  return(    
    <div className="App">
      <Navbar />
      <h1 className="hone">Welcome to Cricket Match Live Score Board </h1>
      <h5 className="dt"> Date & Time : -  {dat} </h5>
      <h3 className="htwo"> T-20 Matches  2020 </h3>
      
      
    <Grid container >
      <Grid sm="2"></Grid>
    <Grid sm="8">
      {matches.map((match) => (
        // (<MyCard key={match.unique_id} match={match} />)
        <Fragment key={match.unique_id}>
        {match.type === "Twenty20" ? <MyCard key={match.unique_id} match={match} /> : " "}
        </Fragment>
      ))}
        </Grid>
      </Grid>
      
    </div>
  )
}

export default App;

