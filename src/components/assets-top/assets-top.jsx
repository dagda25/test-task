import React from 'react';

import './css/assets-top.css';

export const AssetsTop = ({ data }) => {
  if (!data) {
    return <h3>loading...</h3>;
  }
  return (
    <article className="assets-top">
      <div className="assets-top__gainer">
        <table>
          <thead>
            <tr>
              <th>Top Gainer</th>
              <th>24h Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.max.name}</td>
              <td>${data.max.dayProfit}</td>
            </tr>
            <tr>
              <td>{data.max.shortName}</td>
              <td>{(data.max.dayProfit / data.max.price) * 100}%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="assets-top__loser">
        <table>
          <thead>
            <tr>
              <th>Top Loser</th>
              <th>24h Change</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{data.min.name}</td>
              <td>${data.min.dayProfit}</td>
            </tr>
            <tr>
              <td>{data.min.shortName}</td>
              <td>{(data.min.dayProfit / data.min.price) * 100}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};
