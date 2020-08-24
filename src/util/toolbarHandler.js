export default function () {
    let toolbarBtns = document.querySelectorAll('.f');
    console.log(toolbarBtns);
    toolbarBtns = Array.from(toolbarBtns);
    toolbarBtns.forEach((btn) => {

        let classString = btn.classList[0].split('-')[0]; //name of class for btn pressed used to know which submenu to turn on
        console.log(classString);
        btn.addEventListener('click', () => {
            let subMenu;
            switch (classString) {
                case 'price':
                    clearToolbarBackgroundColor();
                    turnOffToolbars(1);
                    subMenu = document.querySelector('.price-submenu').style.display; 
                    if (subMenu == undefined || subMenu == '' || subMenu == 'none') { document.querySelector('.price-submenu').style.display = 'flex'; btn.style.backgroundColor = 'rgba(0,0,0,0.1)'; break; }
                    else { document.querySelector('.price-submenu').style.display = 'none'; btn.style.backgroundColor = 'white'; break; }
                case 'beds': 
                clearToolbarBackgroundColor();
                turnOffToolbars(2);
                subMenu = document.querySelector('.beds-submenu').style.display; 
                if (subMenu == undefined || subMenu == '' || subMenu == 'none') { document.querySelector('.beds-submenu').style.display = 'flex'; btn.style.backgroundColor = 'rgba(0,0,0,0.1)'; break; }
                else { document.querySelector('.beds-submenu').style.display = 'none'; btn.style.backgroundColor = 'white'; break; }
                case 'sales':
                    clearToolbarBackgroundColor();
                    turnOffToolbars(3);
                    subMenu = document.querySelector('.sales-submenu').style.display; 
                    if (subMenu == undefined || subMenu == '' || subMenu == 'none') { document.querySelector('.sales-submenu').style.display = 'flex';btn.style.backgroundColor = 'rgba(0,0,0,0.1)';  break; }
                    else { document.querySelector('.sales-submenu').style.display = 'none'; btn.style.backgroundColor = 'white'; break; }
                    
                default: break;
            }
        })
    })
}

const turnOffToolbars = (btn) => {
    switch (btn) {
        case 1:
            document.querySelector('.beds-submenu').style.display = 'none';
            document.querySelector('.sales-submenu').style.display = 'none'; break;
        case 2:
            document.querySelector('.price-submenu').style.display = 'none';
            document.querySelector('.sales-submenu').style.display = 'none'; break;
        case 3:
                document.querySelector('.price-submenu').style.display = 'none';
            document.querySelector('.beds-submenu').style.display = 'none'; break;
        default: 
        document.querySelector('.price-submenu').style.display = 'none';
            document.querySelector('.beds-submenu').style.display = 'none';
            document.querySelector('.sales-submenu').style.display = 'none';    break;
            

    }
}

const clearToolbarBackgroundColor = () => {
    let toolbarBtns = document.querySelectorAll('.f');
    toolbarBtns = Array.from(toolbarBtns);
    toolbarBtns.forEach((btn) => {
        btn.style.backgroundColor = 'white';
    })
}