import React, {useState, useEffect} from "react";
import "./App.css";

const BottomRow = () => {

  const [down, setDown] = useState(0);
  const [ytg, setytg] = useState(0);
  const [yardLine, setYardLine] = useState(0);
  const [quarter, setQuarter] = useState(0);

  return (
<div className = 'bottomAll'>
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{ytg}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on </h3>
        <div className="ballOn__value">{yardLine}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
    </div>
    <div className="bottomButtons">
    <button onClick = {() => setDown(down + 1)} className="down_button">Next Down</button>
    <button onClick = {() => setDown(0)} className="down_button">Reset Downs</button>
    <button onClick = {() => setytg(ytg + 1)} className="ytg_button">YTG + 1</button>
    <button onClick = {() => setytg(ytg - 1)} className="ytg_button">YTG - 1</button>
   <div className= "ballMarker">
    <div className="ballMarkerTop">
    <button onClick = {() => setYardLine(yardLine + 1)} className="yLine_button">YL +1</button>
    <button onClick = {() => setYardLine(yardLine + 5)} className="yLine_button">YL +5</button>
    <button onClick = {() => setYardLine(yardLine + 10)} className="yLine_button">YL +10</button>
    </div>
    <div className="ballMarkerTop">
    <button onClick = {() => setYardLine(yardLine - 1)} className="yLine_button">YL -1</button>
    <button onClick = {() => setYardLine(yardLine - 5)} className="yLine_button">YL -5</button>
    <button onClick = {() => setYardLine(yardLine - 10)} className="yLine_button">YL -10</button>
    </div>
    </div> 
    <button onClick = {() => setQuarter(quarter + 1)} className="quarter_button">Next Quarter</button>
   </div>
  </div>

  );
};

export default BottomRow;
