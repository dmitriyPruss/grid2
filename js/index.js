const svgCollection = document.querySelectorAll('svg');
const paths = document.querySelectorAll('path');
const size = '60px';
const currentColor = '#e84545';
svgCollection.forEach(i => {
    i.setAttribute('style', `width: ${size}; height: ${size};`);
});
paths.forEach(i => {
    i.setAttribute('style', `fill: ${currentColor};`);
});

const gridContainer = document.getElementById('grid');
const flexContainer = document.getElementById('flex');
const footer = document.getElementsByTagName('footer')[0];
const buttons = document.querySelectorAll('.button');
Array.from(buttons).map( (i, index) => {
    i.addEventListener('click', function(){
        i.style.color = 'red';
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
            i.style.color = '';
        }, 200);
    });
});