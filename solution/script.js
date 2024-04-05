

const checkForm = document.getElementById("checkForm");
const debitForm = document.getElementById("debitForm");
const accountImage = document.getElementById("accountImage");
const accountImageLabel = document.getElementById("accountImageLabel");
const txtLoanAccountNumber = document.getElementById("txtLoanAccountNumber");
const txtLoanAccountNumberError = document.getElementById("txtLoanAccountNumberError");
const txtRoutingNumber = document.getElementById("txtRoutingNumber");
const txtRoutingNumberError = document.getElementById("txtRoutingNumberError");
const txtConfirmBankAccountNumber = document.getElementById("txtConfirmBankAccountNumber");
const txtConfirmBankAccountNumberError = document.getElementById("txtConfirmBankAccountNumberError");
const txtCardNumber = document.getElementById("txtCardNumber");
const txtCardNumberError = document.getElementById("txtCardNumberError");

const txtNameOnCard = document.getElementById("txtNameOnCard");
const txtNameOnCardError = document.getElementById("txtNameOnCardError");

const txtCVV = document.getElementById("txtCVV");
const txtCVVError = document.getElementById("txtCVVError");

const txtExpirationDate = document.getElementById("txtExpirationDate");
const txtExpirationDateError = document.getElementById("txtExpirationDateError");


const rdoChecking = document.getElementById("rdoChecking");
const rdoDebitCard = document.getElementById("rdoDebitCard");

// const txtLoanAccountNumber = document.getElementById("txtLoanAccountNumber");
// const txtLoanAccountNumber = document.getElementById("txtLoanAccountNumber");
// const txtLoanAccountNumber = document.getElementById("txtLoanAccountNumber");
// const txtLoanAccountNumber = document.getElementById("txtLoanAccountNumber");
// const txtLoanAccountNumber = document.getElementById("txtLoanAccountNumber");
// const txtLoanAccountNumber = document.getElementById("txtLoanAccountNumber");
// const txtLoanAccountNumber = document.getElementById("txtLoanAccountNumber");
// const txtLoanAccountNumber = document.getElementById("txtLoanAccountNumber");
// const txtLoanAccountNumber = document.getElementById("txtLoanAccountNumber");
// const txtLoanAccountNumber = document.getElementById("txtLoanAccountNumber");



// <input type="text" id="" maxlength="25" /> 
// <div class="error-message" id="txtRoutingNumberError">Routing Number is required</div>
// </div>
// <div class="border-box">
// <div class="input-label">
//     Bank Account Number
// </div>
// <input type="text" id="txtBankAccountNumber" maxlength="25" /> 
// <div class="error-message" id="txtBankAccountNumbeErrorr">Bank Account Number is required</div>
// </div>
// <div class="border-box">
// <div class="input-label">
//     Confirm Bank Account Number
// </div>
// <input type="text" id="txtConfirmBankAccountNumber" maxlength="25" />
// <div class="error-message" id="txtConfirmBankAccountNumberError">Confirm Bank Account Number is required</div>
// </div>
// </div>



var addClass = function(elements, myClass) {
    if (!elements) { return; }
    
    if (typeof(elements) === 'string') {
        elements = document.querySelectorAll(elements);
    }
    else if (elements.tagName) { elements=[elements]; }

    for (var i=0; i<elements.length; i++) {
        if ( (' '+elements[i].className+' ').indexOf(' '+myClass+' ') < 0 ) {
            elements[i].className += ' ' + myClass;
        }
    }
}

var removeClass = function(elements, myClass) {
    if (!elements) { return; }
    if (typeof(elements) === 'string') {
        elements = document.querySelectorAll(elements);
    }
    else if (elements.tagName) { elements=[elements]; }

    var reg = new RegExp('(^| )'+myClass+'($| )','g');
    for (var i=0; i<elements.length; i++) {
        elements[i].className = elements[i].className.replace(reg,' ');
    }
}

var account_type = 'Check';
var handleClick = function (val) {
    clearErrors();
    if(val === 'Debit'){
        account_type = 'Debit';
        accountImage.src = 'cvv.png';
        accountImageLabel.innerHTML = `Where can I find the CVV number?`;
        debitForm.style.display = 'block';
        checkForm.style.display = 'none';
        rdoDebitCard.checked = true;
        rdoChecking.checked = false;
    } else {
        account_type = 'Check';
        accountImage.src = 'check.png';
        accountImageLabel.innerHTML = `Where can I find the routing<br>and account number?`;
        debitForm.style.display = 'none';
        checkForm.style.display = 'block';
        rdoDebitCard.checked = false;
        rdoChecking.checked = true;
    }
}

var validate = function () {
    let errorCount = 0;
    if(txtLoanAccountNumber.value === ''){
        addClass(txtLoanAccountNumberError, 'error');
        errorCount += 1;
    } else {
        removeClass(txtLoanAccountNumberError, 'error');
    }

    if(account_type === 'Check'){
        if(txtRoutingNumber.value === ''){
            txtRoutingNumberError.innerHTML = isRequiredMessage(txtRoutingNumberError.innerHTML);
            addClass(txtRoutingNumberError, 'error');
            errorCount += 1;
        } else {
            if(!isAllNumeric(txtRoutingNumber.value) || txtRoutingNumber.value.length !== 9){
                txtRoutingNumberError.innerHTML = isInvalidMessage(txtRoutingNumberError.innerHTML);
                addClass(txtRoutingNumberError, 'error');
                errorCount += 1;
            } else {
                removeClass(txtRoutingNumberError, 'error');
            }
        }

        if(txtBankAccountNumber.value === ''){
            txtBankAccountNumberError.innerHTML = isRequiredMessage(txtBankAccountNumberError.innerHTML);
            addClass(txtBankAccountNumberError, 'error');
            errorCount += 1;
        } else {
            if(!isAllNumeric(txtBankAccountNumber.value)){
                txtBankAccountNumberError.innerHTML = isInvalidMessage(txtBankAccountNumberError.innerHTML);
                addClass(txtBankAccountNumberError, 'error');
                errorCount += 1;
            } else {
                removeClass(txtBankAccountNumberError, 'error');
            }
        }

        if(txtConfirmBankAccountNumber.value === ''){
            txtConfirmBankAccountNumberError.innerHTML = isRequiredMessage(txtConfirmBankAccountNumberError.innerHTML);
            addClass(txtConfirmBankAccountNumberError, 'error');
            errorCount += 1;
        } else {
            if(!isAllNumeric(txtConfirmBankAccountNumber.value) || (txtBankAccountNumber.value !== txtConfirmBankAccountNumber.value)){
                txtConfirmBankAccountNumberError.innerHTML = isInvalidMessage(txtConfirmBankAccountNumberError.innerHTML);
                addClass(txtConfirmBankAccountNumberError, 'error');
                errorCount += 1;
            } else {
                removeClass(txtConfirmBankAccountNumberError, 'error');
            }
        }
    } else {
        if(txtCardNumber.value === ''){
            txtCardNumberError.innerHTML = isRequiredMessage(txtCardNumberError.innerHTML);
            addClass(txtCardNumberError, 'error');
            errorCount += 1;
        } else {
            if(!isAllNumeric(txtCardNumber.value)){
                txtCardNumberError.innerHTML = isInvalidMessage(txtCardNumberError.innerHTML);
                addClass(txtCardNumberError, 'error');
                errorCount += 1;
            } else {
                removeClass(txtCardNumberError, 'error');
            }
        }

        if(txtNameOnCard.value === ''){
            txtNameOnCardError.innerHTML = isRequiredMessage(txtNameOnCardError.innerHTML);
            addClass(txtNameOnCardError, 'error');
            errorCount += 1;
        } else {
            removeClass(txtNameOnCardError, 'error');
        }

        if(txtExpirationDate.value === ''){
            txtExpirationDateError.innerHTML = isRequiredMessage(txtExpirationDateError.innerHTML);
            addClass(txtExpirationDateError, 'error');
            errorCount += 1;
        } else {
            removeClass(txtExpirationDateError, 'error');
        }
        

        if(txtCVV.value === ''){
            txtCVVError.innerHTML = isRequiredMessage(txtCVVError.innerHTML);
            addClass(txtCVVError, 'error');
            errorCount += 1;
        } else {
            if(!isAllNumeric(txtCVV.value) || txtCVV.value.length !== 3){
                txtCVVError.innerHTML = isInvalidMessage(txtCVVError.innerHTML);
                addClass(txtCVVError, 'error');
                errorCount += 1;
            } else {
                removeClass(txtCVVError, 'error');
            }
        }

    }
    return errorCount === 0;
}

var clearErrors = function (){
    removeClass(txtBankAccountNumberError, 'error');
    removeClass(txtConfirmBankAccountNumberError, 'error');
    removeClass(txtLoanAccountNumberError, 'error');
    removeClass(txtRoutingNumberError, 'error');

    removeClass(txtCardNumberError, 'error');
    removeClass(txtCVVError, 'error');
    removeClass(txtExpirationDateError, 'error');
    removeClass(txtNameOnCardError, 'error');
}

var isRequiredMessage = function(message){
    let rtn = message.replace('invalid', 'required');
    return rtn;
}
var isInvalidMessage = function(message){
    let rtn = message.replace('required', 'invalid');
    return rtn;
}

var isAllNumeric = function (val){
    let isnum = /^\d+$/.test(val);
    console.log("isAllNumeric", isnum);
    return isnum;
}

var initForm = function() {
    handleClick('Check');
}


initForm();
