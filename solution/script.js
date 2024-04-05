

const accountImage = document.getElementById("accountImage");
const accountImageLabel = document.getElementById("accountImageLabel");

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

function handleClick(myRadio) {
    console.log(accountImage);
    if(myRadio.value === 'Debit'){
        accountImage.src = 'cvv.png';
        accountImageLabel.innerHTML = `Where can I find the CVV number?`;
    } else {
        accountImage.src = 'check.png';
        accountImageLabel.innerHTML = `Where can I find the routing<br>and account number?`;
    }
}