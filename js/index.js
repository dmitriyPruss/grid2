const svgCollection = document.querySelectorAll('svg');
const paths = document.querySelectorAll('path');
svgCollection.forEach(i => {
    let size = '60px';
    i.setAttribute('style', `width: ${size}; height: ${size};`);
});
paths.forEach(i => {
    let currentColor = '#e84545';
    i.setAttribute('style', `fill: ${currentColor};`);
});

const gridContainer = document.getElementById('grid');
const flexContainer = document.getElementById('flex');
const footer = document.getElementsByTagName('footer')[0];
const buttons = document.querySelectorAll('.button');
Array.from(buttons).map( (i, index) => {
    i.addEventListener('click', function(){
        footer.textContent = '';
        if(index == 0){
            gridContainer.hidden = false;
            flexContainer.hidden = true; 
        } else{
            gridContainer.hidden = true;
            flexContainer.hidden = false; 
        }
        setTimeout(() => {
            footer.textContent = this.firstElementChild.innerHTML;
        }, 300)
    });
});