import React from 'react';

import { Button } from '../button/button';

import './css/assets-table.css';

export const AssetsTable = ({
  tableData,
  handleButtonClick,
  isAllAssetsShown,
}) => {
  console.log(isAllAssetsShown);
  return (
    <div className="assets-table-wrapper">
      <h2>Your Assets</h2>
      <table className="assets-table">
        <thead>
          <tr>
            <th>Asset</th>
            <th>Price</th>
            <th>24h Profit</th>
            <th>All Time Profit</th>
            <th>Quantity</th>
            <th>%</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData) => {
            return (
              <tr key={rowData.id}>
                <td>{rowData.name}</td>
                <td>{rowData.price}</td>
                <td>{rowData.dayProfit}</td>
                <td>{rowData.totalProfit}</td>
                <td>{rowData.quantity}</td>
                <td>{rowData.percent}</td>
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
