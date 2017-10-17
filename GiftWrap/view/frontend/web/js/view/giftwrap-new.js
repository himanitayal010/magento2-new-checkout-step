define(
	[
		'ko',
		'uiComponent',
		'underscore',
		'Magento_Checkout/js/model/step-navigator',
		'jquery', 'Magento_Checkout/js/action/get-totals',
    'Magento_Checkout/js/model/full-screen-loader'
	], function (
		ko,
		Component,
		_,
		stepNavigator,
		jQuery,
	  getTotalsAction,
	  fullScreenLoader
	) {
		'use strict';
		var quotevalue = window.quotevalue;
		var quoteId = window.quoteentityid;
		var saveUrl = window.saveUrl;

		return Component.extend({
			defaults: {
				template: 'Excellence_GiftWrap/giftwrap'
			},
			isVisible: ko.observable(true),
      productData: quotevalue,
			initialize: function() {
				this._super();
				stepNavigator.registerStep(
					'gift_wrap',
					null,
					'GiftWrapping',
					this.isVisible,
					_.bind(this.navigate, this),
					15
				);
				return this;
			},
			navigate: function() {
				var self = this;
        self.isVisible(true);
			},
			navigateToNextStep: function() {
        fullScreenLoader.startLoader();
        var self = this;
		    self.selectedVal = ko.observable();
		    self.selectedVal.subscribe(function (val) {
		    	console.log(val);
		        return val;
		    });
        fullScreenLoader.stopLoader();
        stepNavigator.next();
      },
      init: function (element, valueAccessor) {
        $(element).iCheck({
            radioClass: 'iradio_square-green'
        });
        $(element).on('ifChecked', function (event) {
            var observable = valueAccessor();
            observable.checked(event.target.defaultValue); 
        });
			},
		});
	}
);