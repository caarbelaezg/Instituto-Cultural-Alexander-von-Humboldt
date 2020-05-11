var accItem = document.getElementsByClassName('accordion-item');
var accHD = document.getElementsByClassName('accordion-link');

for (let i = 0; i < accHD.length; i++) {
    accHD[i].addEventListener('click', toggleItem, false);
}

function toggleItem() {
    var itemClass = this.parentNode.className;
    for (let i = 0; i < accItem.length; i++) {
        accItem[i].className = 'accordion-item close';
    }
    if (itemClass == 'accordion-item close') {
        this.parentNode.className = 'accordion-item open';
    }
}