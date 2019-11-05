const litecoin = require('../../../assets/litecoin.png');
const bitcoin = require('../../../assets/bitcoin.png');

const cards = [
  {
    logo: bitcoin,
    percentage: '42%',
    value: '2.00102000',
    type: 'BTC',
    equivalent: '18,659.55',
    equivalentType: 'USD'
  },
  {
    logo: bitcoin,
    percentage: '29%',
    value: '3.30102000',
    type: 'ETH',
    equivalent: '2,659.55',
    equivalentType: 'USD'
  },
  {
    logo: litecoin,
    percentage: '29%',
    value: '1.30102000',
    type: 'LTE',
    equivalent: '59.55',
    equivalentType: 'USD'
  },
]

export default cards;
