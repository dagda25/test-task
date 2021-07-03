import React from 'react';

import { Button } from '../button/button';
import url1 from './assets/eth.png';

import './css/assets-table.css';

export const AssetsTable = ({
  tableData,
  handleButtonClick,
  isAllAssetsShown,
}) => {
  const getDataProfit = (profit) => {
    if (profit >= 0) {
      return `$${profit.toFixed(2).toLocaleString()}`;
    } else {
      return `-$${-profit.toFixed(2).toLocaleString()}`;
    }
  };
  return (
    <div className="assets-table-wrapper">
      <h2>Your Assets</h2>
      <table className="assets-table" role="table">
        <thead>
          <tr role="row">
            <th role="cell">Asset</th>
            <th role="cell">Price</th>
            <th role="cell">24h Profit</th>
            <th role="cell">All Time Profit</th>
            <th role="cell">Quantity</th>
            <th role="cell">%</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData) => {
            return (
              <tr key={rowData.id} role="row">
                <td role="cell">
                  <span className="assets-table__image">
                    <img src={url1} width="20" height="20" alt={rowData.name} />
                  </span>
                  <span className="assets-table__name">{rowData.name}</span>
                  <span className="assets-table__short-name">
                    {rowData.shortName}
                  </span>
                </td>
                <td role="cell">
                  $
                  {rowData.price.toLocaleString('en-GB', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                  <br />
                  <span className="assets-table__day-percent">2.82%</span>
                </td>
                <td className="assets-table__day-profit" role="cell">
                  {getDataProfit(rowData.dayProfit)}
                </td>
                <td role="cell">
                  $
                  {rowData.totalProfit.toLocaleString('en-GB', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}{' '}
                  <br />
                  <span className="assets-table__total-profit">12.75%</span>
                </td>
                <td role="cell">
                  {rowData.quantity} {rowData.shortName}
                  <br />
                  <span className="assets-table__total-price">
                    $
                    {(rowData.quantity * rowData.price).toLocaleString(
                      'en-GB',
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }
                    )}
                  </span>
                </td>
                <td className="assets-table__percent" role="cell">
                  {rowData.percent}%
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button
        text="Show more"
        clickHandler={handleButtonClick}
        active={!isAllAssetsShown}
      />
    </div>
  );
};
