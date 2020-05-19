export default {
    
    validate(card) {

        let cardValidations = {
            "cardNumberFormat" : false,
            "cardNumberEmpty" : false,
            "nameFormat" : false,
            "nameEmpty" : false,
            "validThruFormat" : false,
            "validThruEmpty" : false,
            "ccvFormat" : false,
            "ccvEmpty" : false,
            "vendorEmpty" : false
        }

        // validating card number
        if (card.cardNumber.length === 0) {
            cardValidations.cardNumberEmpty = true
        } else if (card.cardNumber.length != 19) {
            cardValidations.cardNumberFormat = true
        } else if (!(Number.isInteger(parseInt(card.cardNumber.substring(0, 4)), 10) 
                && Number.isInteger(parseInt(card.cardNumber.substring(5, 9)), 10)
                && Number.isInteger(parseInt(card.cardNumber.substring(10, 14)), 10)
                && Number.isInteger(parseInt(card.cardNumber.substring(15, 19)), 10))) {
            cardValidations.cardNumberFormat = true
        } else {
            cardValidations.cardNumberFormat = false
        }
        // validating cardholder name
        if (card.carholderName.length===0) {
            cardValidations.nameEmpty = true
        } else if (!card.carholderName.trim().includes(' ')) {
            cardValidations.nameFormat = true
        } else {
            cardValidations.nameFormat = false
        }
        // validating valid thru
        if (card.validUntil.length === 0) {
            cardValidations.validThruEmpty = true
        } else if (card.validUntil.length != 5) {
            cardValidations.validThruFormat = true
        } else if (!(   Number.isInteger(parseInt(card.validUntil.substring(0,1)))
                    && Number.isInteger(parseInt(card.validUntil.substring(3,4))))) {

            cardValidations.validThruFormat = true
        } else if (!card.validUntil.trim().includes('/')) {
            cardValidations.validThruFormat = true
        } else {
            cardValidations.validThruFormat = false
        }
        // validating ccv
        if (card.ccv.length === 0) {
            cardValidations.ccvEmpty = true
        } else if (card.ccv.length != 3) {
            cardValidations.ccvEmpty = true
        } else if (!(Number.isInteger(parseInt(card.ccv)))) {
            cardValidations.ccvEmpty = true
        } else {
            cardValidations.ccvEmpty = false
        }
        // validating vendor
        if (card.vendor.name === 'none') {
            cardValidations.vendorEmpty = true
        } else {
            cardValidations.vendorEmpty = false
        }
        return cardValidations
    },

    allValidationsPassed(cardValidations) {
        console.log('running validations');
        
        if (cardValidations.cardNumberFormat === false &&
            cardValidations.cardNumberEmpty === false &&
            cardValidations.nameFormat === false &&
            cardValidations.nameEmpty === false &&
            cardValidations.validThruFormat === false &&
            cardValidations.validThruEmpty === false &&
            cardValidations.ccvFormat === false &&
            cardValidations.ccvEmpty === false &&
            cardValidations.vendorEmpty === false) {
            console.log('everything in order');
            return true
        } else {
            return false
        }
    }
}