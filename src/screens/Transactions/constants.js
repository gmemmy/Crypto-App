const litecoin = require('../../../assets/litecoin.png');
const bitcoin = require('../../../assets/bitcoin.png');

const cards = [
  {
    logo: bitcoin,
    percentage: '42%',
    value: '2.00102000',
    type: 'BTC',
    equivalent: '18,659.55',
    equivalentType: 'USD',
    backgroundColor: '#EB9240',
  },
  {
    logo: bitcoin,
    percentage: '29%',
    value: '3.30102000',
    type: 'ETH',
    equivalent: '2,659.55',
    equivalentType: 'USD',
    backgroundColor: '#4A4AB5'
  },
  {
    logo: litecoin,
    percentage: '29%',
    value: '1.30102000',
    type: 'LTE',
    equivalent: '59.55',
    equivalentType: 'USD',
    backgroundColor: '#4A4AB5'
  },
]

const tradeHistory = [
  {
    color: '#11CC71',
    status: 'Received',
    date: 'Oct 25, 5:25PM',
    value: '+0.00102000',
    currency: 'BTC',
    equivalent: '234',
    equivalentType: 'USD',
    type: 'feed'
  },
  {
    color: '#F76869',
    status: 'Received',
    date: 'Oct 25, 5:25PM',
    value: '-0.030102000',
    currency: 'LTC',
    equivalent: '234',
    equivalentType: 'USD',
    type: 'feed'
  },
  {
    color: '#11CC71',
    status: 'Received',
    date: 'Oct 25, 5:25PM',
    value: '+0.02102000',
    currency: 'BCH',
    equivalent: '234',
    equivalentType: 'USD',
    type: 'feed'
  },
  {
    color: '#F76869',
    status: 'Received',
    date: 'Oct 25, 5:25PM',
    value: '-0.000102000',
    currency: 'BTC',
    equivalent: '234',
    equivalentType: 'USD',
    type: 'feed'
  },
  {
    color: '#11CC71',
    status: 'Received',
    date: 'Oct 25, 5:25PM',
    value: '+0.000102000',
    currency: 'LTC',
    equivalent: '234',
    equivalentType: 'USD',
    type: 'feed'
  },
  {
    color: '#F76869',
    status: 'Received',
    date: 'Oct 25, 5:25PM',
    value: '-0.000102000',
    currency: 'BTC',
    equivalent: '234',
    equivalentType: 'USD',
    type: 'feed'
  },
]
module.exports = { cards, tradeHistory }
