import React from 'react';

import './css/assets-summary.css';

export const AssetsSummary = ({ data }) => {
  if (!data) {
    return <h3>loading...</h3>;
  }
  return (
    <article className="assets-summary">
      <div className="assets-summary__title">
        Shown Assets summary and Change
      </div>
      <div className="assets-summary__total">{data.total}</div>
      <div className="assets-summary__change">{data.profit}</div>
    </article>
  );
};
