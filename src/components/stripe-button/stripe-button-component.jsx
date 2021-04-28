import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { loadStripe } from '@stripe/stripe-js';

const StripeCheckoutButton = ({ price }) => {
  const priceToCents = price * 100;
  const publishableKey = loadStripe(
    'pk_test_STEnpMecMlQqyeLzHS653GQT00Kmq0e2nv'
  );
  const onToken = (token) => {
    console.log(token);
    alert('Test payment successful');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="React Store"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceToCents}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
