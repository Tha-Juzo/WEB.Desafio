const btnResponsive = document.querySelector('#btn_responsive');
const menu = document.querySelector('.menu');

btnResponsive.addEventListener('click', () =>{
    menu.classList.toggle('active');
});

const ddMenu = document.querySelector('.btt_drop');
const ddContent = document.querySelector('.content');

ddMenu.addEventListener('click', () =>{
    ddContent.classList.toggle('active');

});

function volta(){
    window.history.back();
}