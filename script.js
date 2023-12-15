const btns = document.querySelectorAll('.heading-secondary');
let src = true;
let srcPlus = 'assets/images/icon-plus.svg';
let srcMinus = 'assets/images/icon-minus.svg';

btns.forEach(btn => btn.addEventListener('click', showDescription));

function showDescription () {
    const li = this.parentNode;
    const paragraph = li.childNodes[3];
    paragraph.classList.toggle('d-none');
    this.childNodes[1].childNodes[0].src.includes('plus')?this.childNodes[0].src='assets/images/icon-minus.svg':
    this.childNodes[1].childNodes[0].src='assets/images/icon-plus.svg';
}