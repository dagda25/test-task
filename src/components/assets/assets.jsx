import React, { useState, useEffect } from 'react';

import { AssetsSummary } from '../assets-summary/assets-summary';
import { AssetsTable } from '../assets-table/assets-table';
import { AssetsTop } from '../assets-top/assets-top';
import './css/assets.css';

import { data } from '../../mock-data/assets-data';

export const Assets = () => {
  const [assetsData, setAssetsData] = useState(data);
  const [assetsShown, setAssetsShown] = useState(4);
  const [summaryData, setSummaryData] = useState(null);
  const [topData, setTopData] = useState(null);
  const [isAllAssetsShown, setIsAllAssetsShown] = useState(false);

  const getSummaryData = (data, rows) => {
    let total = 0;
    let profit = 0;
    data.slice(0, rows).forEach((row) => {
      total += row.price * row.quantity;
      profit += row.dayProfit;
    });
    return { total, profit };
  };

  const getTopData = (data, rows) => {
    let max = -Infinity;
    let min = Infinity;
    let top = { max: {}, min: {} };
    data.slice(0, rows).forEach((row) => {
      if (row.dayProfit < min) {
        min = row.dayProfit;
        top.min = row;
      }
      if (row.dayProfit > max) {
        max = row.dayProfit;
        top.max = row;
      }
    });
    return top;
  };

  useEffect(() => {
    setSummaryData(getSummaryData(assetsData, assetsShown));
    setTopData(getTopData(assetsData, assetsShown));
    if (assetsData.length === assetsShown) {
      setIsAllAssetsShown(true);
    }
  }, [assetsData, assetsShown]);

  const onShowMoreClick = () => {
    if (assetsData.length - assetsShown >= 5) {
      setAssetsShown((prev) => prev + 5);
    } else {
      setAssetsShown(assetsData.length);
    }
  };

  return (
    <section className="assets">
      <div className="assets__widgets">
        <AssetsSummary data={summaryData} />
        <AssetsTop data={topData} />
      </div>
      <AssetsTable
        tableData={assetsData.slice(0, assetsShown)}
        handleButtonClick={onShowMoreClick}
        isAllAssetsShown={isAllAssetsShown}
      />
    </section>
  );
};
