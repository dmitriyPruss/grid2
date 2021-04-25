const svgCollection = document.querySelectorAll('svg');
const paths = document.querySelectorAll('path');
const size = '60px';
const gridColor = '#e84545';
const flexColor = 'rgb(121, 56, 141)';
svgCollection.forEach(i => {
    i.setAttribute('style', `width: ${size}; height: ${size};`);
});

const gridContainer = document.getElementById('grid');
const flexContainer = document.getElementById('flex');
const footer = document.getElementsByTagName('footer')[0];
const buttons = document.querySelectorAll('.button');
Array.from(buttons).map( (i, index) => {
    i.addEventListener('click', function(){
        i.style.color = 'red';
        footer.textContent = '';
        if (index == 0) {
            gridContainer.hidden = false;
            flexContainer.hidden = true;
            paths.forEach(i => {
                i.setAttribute('style', `fill: ${gridColor};`);
            });             
        } else {
            gridContainer.hidden = true;
            flexContainer.hidden = false;
            paths.forEach(i => {
                i.setAttribute('style', `fill: ${flexColor};`);
            });
        };
        setTimeout(() => {
            footer.textContent = this.firstElementChild.innerHTML;
            i.style.color = '';
        }, 200);
    });
});