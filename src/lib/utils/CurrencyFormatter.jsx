import React from 'react';

function CurrencyFormatter({ value }) {
  return <>${Math.floor(value / 100)}</>;
}

export default CurrencyFormatter;
