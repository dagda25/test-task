import React from 'react';

import './css/assets-summary.css';

export const AssetsSummary = ({ data }) => {
  if (!data) {
    return <h3>loading...</h3>;
  }
  const getDataProfit = (profit) => {
    if (profit > 0) {
      return `+$${profit.toLocaleString('en-GB', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    } else {
      return `-$${profit.toLocaleString('en-GB', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      })}`;
    }
  };
  return (
    <section className="assets-summary">
      <h3 className="assets-summary__title">
        Shown Assets summary and Change
      </h3>
      <div className="assets-summary__total">
        $
        {data.total.toLocaleString('en-GB', {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </div>
      <div className="assets-summary__change">{getDataProfit(data.profit)}</div>
    </section>
  );
};
