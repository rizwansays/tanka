let delay = 600;
let timeout;
var locale_json = window.wc_country_select_params.countries.replace( /"/g, '"' );
// console.log( 'locale_json', locale_json );
var states     = JSON.parse( locale_json );
let flag = true;

function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return false;
}

function changeCurrency( cc ) {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        if ( wccs_checkout != '' ) {
            if ( wccs_checkout.is_shop_currency && wccs_checkout.is_billing_currency ) {
                var url = wccs_checkout.admin_url;
                var country_code = cc;            
                var data = {
                    action: wccs_checkout.action,
                    nonce: wccs_checkout.nonce,
                    billing_currency: country_code,
                };
                jQuery.post( url, data, function(response) {                
                    if ( response.status == 'success' ) {
                        if ( states[cc] == '' || typeof states[cc] == 'undefined' ) {
                            setTimeout(function() {
                                window.location.href = response.url;
                            }, 2000);
                        }else{
                            if( jQuery('#shipping-state input').val() || jQuery('#billing-state input').val() ) {
                                 setTimeout(function() {
                                    window.location.href = response.url;
                                }, 2000 );
                            }
                        }
                    }
                });
            }
        }
    }, delay);
}

jQuery( window ).on( "load", function() {
    
    if ( typeof wc !== 'undefined') {
        // console.log('extensionCartUpdate executed!');
        wc.blocksCheckout.extensionCartUpdate({
            namespace: 'wccs'
        });
    }

    // for shipping fields
    if ( '2' == wccs_checkout.is_billing_currency && typeof wp.hooks != 'undefined' ) {
        wp.hooks.addAction(
            "experimental__woocommerce_blocks-checkout-set-shipping-address",
            "currency-switcher-for-woocommerce",
            ({storeCart}) => {
                // console.log(storeCart.shippingAddress);                     
                changeCurrency(storeCart.shippingAddress.country);
            }
        );
    }

    // for billing fields
    if ( '1' == wccs_checkout.is_billing_currency && typeof wp.hooks != 'undefined' ) {
        wp.hooks.addAction(
            "experimental__woocommerce_blocks-checkout-set-billing-address",
            "currency-switcher-for-woocommerce",
            ({storeCart}) => {
                // console.log(storeCart);                     
                changeCurrency(storeCart.billingAddress.country);
            }
        );
    }

    
    jQuery( document ).on( 'updated_checkout', function( event ) {
        if ( wccs_checkout != '' ) {
            if ( wccs_checkout.is_shop_currency && wccs_checkout.is_billing_currency ) {
                var url = wccs_checkout.admin_url;
                var country_code = '';
                
                if ( '1' == wccs_checkout.is_billing_currency ) {
                    country_code = jQuery('#billing_country').val();
                }

                if ( '2' == wccs_checkout.is_billing_currency ) {
                    var country_code = jQuery('#shipping_country').val();
                }                

                if ( country_code != '' ) {                    
                    var data = {
                        action: wccs_checkout.action,
                        nonce: wccs_checkout.nonce,
                        billing_currency: country_code,
                    };

                    jQuery.post( url, data, function(response) {
                        // response = JSON.parse( response );
                        const getCurrencyUrl = getParameterByName('wcc_switcher', response.url);
                        const getSelectedCurrency = getCookie('wcc_selected_currency');
                        if ( getCurrencyUrl != getSelectedCurrency && response.status == 'success' ) {
                            setCookie('wcc_selected_currency', getCurrencyUrl, 1 );
                            window.location.href = response.url;
                        }
                    });
                }
            }
        }
    });

    jQuery('.wc-block-components-checkout-place-order-button').click( function(e) {      
        
        let current = jQuery(this);

        if ( wccs_checkout.shop_currency != '1' ) {
            if ( flag ) {
                e.stopPropagation();
                var url = wccs_checkout.admin_url;
                var data = {
                    action: 'wccs_currency_to_default',
                    nonce: wccs_checkout.nonce,
                };

                jQuery.post( url, data, function(response) {            
                    if ( response == 'success' ) {                    
                        jQuery( document.body ).trigger( 'wc_fragment_refresh' );
                        flag = false;
                        current.trigger('click');
                    }
                });
            }
        }
    });

    jQuery( document ).on(
        "click",
        "#place_order",
        function (e) {
            let current = jQuery(this);
            if ( wccs_checkout.shop_currency != '1' ) {
                if ( flag ) {
                    e.preventDefault();
                    var url = wccs_checkout.admin_url;
                    var data = {
                        action: 'wccs_currency_to_default',
                        nonce: wccs_checkout.nonce,
                    };

                    jQuery.post( url, data, function(response) {
                        //response = JSON.parse( response );
                        // debugger;   
                        console.log(response);
                        if ( response == 'success' ) {  
                            flag = false;
                            current.trigger('click');
                        }
                    });
                }
            }
        }
    );
});
