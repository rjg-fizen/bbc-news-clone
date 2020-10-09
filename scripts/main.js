const moreMenu = document.getElementById('more-menu');
const moreButton = document.getElementById('more');
const subHeader = document.getElementById('sub-header');
const moreMenuUl = document.getElementById('more-menu-ul');

let menuExpanded = false;

moreButton.onclick = () => { 
    if (!menuExpanded)
    {
        subHeader.classList.replace('shrink-sub-header', 'grow-sub-header');
        moreMenu.classList.replace('hide-menu', 'show-menu');
        setTimeout(() => { 
            moreMenuUl.style.display = 'block';
        }, 400)
        menuExpanded = true;
    }
    else 
    {
        subHeader.classList.replace('grow-sub-header', 'shrink-sub-header');
        moreMenu.classList.replace('show-menu', 'hide-menu');


        moreMenuUl.style.display = 'none';
        menuExpanded = false;
    }
}