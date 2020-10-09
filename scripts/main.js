const moreMenu = document.getElementById('more-menu');
const moreButton = document.getElementById('more');
const subHeader = document.getElementById('sub-header');
const moreMenuUl = document.getElementById('more-menu-ul');

let menuExpanded = false;

moreButton.onclick = () => { 
    if (!menuExpanded)
    {
        
        moreMenu.classList.replace('hide-menu', 'show-menu');
        setTimeout(() => { 
            moreMenuUl.style.display = 'block';
            subHeader.style.height = '140px';
        }, 400)
        menuExpanded = true;
    }
    else 
    {
        subHeader.style.height = '90px';
        moreMenu.classList.replace('show-menu', 'hide-menu');

        setTimeout(() => { 
            subHeader.style.height = '90px';
        }, 400)


        moreMenuUl.style.display = 'none';
        menuExpanded = false;
    }
}