
const exchangeItems = [
  {
    value: '1',
    color: '#ffff'
  },
  {
    value: 'BTC',
    color: '#ACABF0'
  }, 
  {
    value: '=',
    color: '#ffff'
  },
  {
    value: '14,637.37',
    color: '#ffff'
  }, 
  {
    value: 'USD',
    color: '#ACABF0'
  }
]

const cardPaymentItems = [
  {
    tip: 'Choose payment method',
    title: 'Visa / MasterCard'
  },
  {
    tip: 'You give',
    title: '0.00',
    currency: 'USD',
    backgroundColor: '#CDD0EB'
  },
  {
    tip: 'You receive',
    title: '0.00',
    currency: 'BTC',
    backgroundColor: '#F8E3D7'
  },
  {
    tip: 'Send to',
    title: 'My bitcoin wallet',
  },
  {
    tip: 'Transaction fee',
    title: '1.24 USD'
  }
]

const footerText = 'You will need to pass verification to complete the purchase.\n'
                    +'It will take only a few minutes -- all you need\n'
                    +'is your passport and a few photos.'

module.exports = { exchangeItems, cardPaymentItems, footerText };

