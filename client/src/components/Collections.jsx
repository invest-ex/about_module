import React from 'react';

function Collections (props) {
  
  return (
    <div className="collections">
      <div id="collections">
        Collections
      </div>
      <br></br>
      {props.stockInfo.map(stock => (
        <div key={stock.symbol}>
          <div className="tags">{stock.tags[0]}</div>
          <div className="tags">{stock.tags[1]}</div>
          <div className="tags">{stock.tags[2]}</div>
          <div className="tags">{stock.tags[3]}</div>
          <div className="tags">{stock.tags[4]}</div>
          <div className="tags">{stock.tags[5]}</div>
          <div className="tags">{stock.tags[6]}</div>
        </div>
      ))}
    </div>
  );
}

export default Collections;
