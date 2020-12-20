import './libs/numberToWords.js';

const sumUp = num => {
  let total = 0,
      nums = '';

  for (let i = 1; i <= num; i++) {
    nums += `${i}${i !== num ? `, &nbsp` : ''}`;
    total += i;
  }

  return {
    total: numberToWords.toWords(total).split('-').join(' ').replace(/^(.)|\s+(.)/g, c => c.toUpperCase()),
    nums: nums,
  };
}

const data = sumUp(10);
document.querySelector('#outputTotal').innerHTML = data.total;
document.querySelector('#inputNum').innerHTML = data.nums;
