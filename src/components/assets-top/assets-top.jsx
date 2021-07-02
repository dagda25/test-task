import React from 'react';
import url1 from './assets/eth.png';

import './css/assets-top.css';

export const AssetsTop = ({ data }) => {
  if (!data) {
    return <h3>loading...</h3>;
  }
  const getProfit = (profit) => {
    if (profit < 0) {
      return `-$${-profit.toFixed(4)}`;
    }
    return `$${profit.toFixed(4)}`;
  };
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
              <td className="assets-top__name">
                <img src={url1} width="20" height="20" />
                {data.max.name}
              </td>
              <td className="assets-top__change">
                {getProfit(data.max.dayProfit)}
              </td>
            </tr>
            <tr>
              <td className="assets-top__short-name">{data.max.shortName}</td>
              <td className="assets-top__percent-change">
                {(
                  (data.max.dayProfit / (data.max.price * data.max.quantity)) *
                  100
                ).toFixed(2)}
                %
              </td>
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
              <td className="assets-top__name">
                <img src={url1} width="20" height="20" />
                {data.min.name}
              </td>
              <td className="assets-top__change">
                {getProfit(data.min.dayProfit)}
              </td>
            </tr>
            <tr>
              <td className="assets-top__short-name">{data.min.shortName}</td>
              <td className="assets-top__percent-change">
                {(
                  (data.min.dayProfit / (data.min.price * data.min.quantity)) *
                  100
                ).toFixed(2)}
                %
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </article>
  );
};
