import React from 'react';

const UserInfo1 = (props) => {
  return (
    <div>
      {props.userInfo.map((stock) => {
        return (
          <table className="userInfo1" key={stock.userid}>
            <thead>
              <caption id="userEquity">Your Equity</caption>
              <div id="userEquityNum">${stock.equity}</div>
            </thead>
            <tbody>
              <tr>
                <td id="userInfo1Left">Cost</td>
                <td id="userInfo1Right">${stock.cost}</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td id="userInfo1Left">Today's Return</td>
                <td id="userInfo1Right">
                  <span className="totalReturn">
               +$
                    {stock.tr}
                  </span>
                  <span>
                  (
                    {((stock.tr / stock.equity) * 100).toFixed(2)}
                  %)
                  </span>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td id="userInfo1Left">Total Return</td>
                <td id="userInfo1Right">
                  {(stock.equity - stock.cost) > 0 ? '+' : '-'}
                  <span className="totalReturn">
                 $
                    {(stock.equity - stock.cost).toFixed(2)}
                  </span>
                  <span>
                    (
                    {(((stock.equity - stock.cost).toFixed(2) / stock.cost) * 100).toFixed(2)}
                %)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>

        );
      })}
    </div>
  );
};
export default UserInfo1;
