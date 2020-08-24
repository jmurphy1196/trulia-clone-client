export default function () {
    let mobileLinks = document.querySelectorAll('.m');
                mobileLinks = Array.from(mobileLinks);
                mobileLinks.forEach((link) => {
                    const classString = link.classList[0].split('-')[1];
                    link.addEventListener('click', () => {
                        let display;
                        switch (classString) {
                            case 'user':
                                 display = document.querySelector('.user-submenu').style.display;
                                if (display == '' || display == 'none') {
                                    document.querySelector('.user-submenu').style.display = 'flex';
                                    document.querySelector('.user-arrow').style.transform = 'rotate(180deg)';
                                } else { document.querySelector('.user-submenu').style.display = 'none';  document.querySelector('.user-arrow').style.transform = 'rotate(0deg)';}
                                break;
                            case 'buy':
                                display = document.querySelector('.buy-submenu').style.display;
                                if (display == '' || display == 'none') {
                                    document.querySelector('.buy-submenu').style.display = 'flex';
                                    document.querySelector('.buy-arrow').style.transform = 'rotate(180deg)';
                                } else { document.querySelector('.buy-submenu').style.display = 'none';  document.querySelector('.buy-arrow').style.transform = 'rotate(0deg)';}
                                break;
                            default: break;
                                
                        }
                    });
                })
}