var config = {
'config': {
    'mixins': {
        'Magento_Checkout/js/view/shipping': {
            'Excellence_GiftWrap/js/view/shipping-payment-mixin': true
        },
        'Magento_Checkout/js/view/payment': {
            'Excellence_GiftWrap/js/view/shipping-payment-mixin': true
        }
    }
  }
};