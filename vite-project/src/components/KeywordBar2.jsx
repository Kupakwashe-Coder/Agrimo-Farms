import React from 'react';
import '../styles/KeywordBar2.css';
import '../index.css';

const keywords = [
  'Agriculture',
  'Farming',
  'Organic',
  'Vegetables',
];

const Separator = () => <span className="word-ticker-separator">*</span>; 

const renderKeywordList = (list) => (
  list.map((keyword, index) => (
    <React.Fragment key={keyword + index}>
      <span className="word-ticker-item">{keyword}</span>
      {index < list.length - 1 && <Separator />}
    </React.Fragment>
  ))
);

function KeywordBar() {
  return (
    <div className="word-ticker-outer">
      <div className="word-ticker-inner">
        <div className="word-ticker-group">
          {renderKeywordList(keywords)}
        </div>
        <div className="word-ticker-group" aria-hidden="true">
          {renderKeywordList(keywords)}
        </div>
      </div>
    </div>
  );
}

export default KeywordBar;