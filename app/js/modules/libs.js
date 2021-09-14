/*=====================================BURGER MENU======================================*/
const burgerOpener = (burgerID, menuSelector, menuLinksSelector) => {

    const burgerBtn = document.getElementById(burgerID),
        menu = document.querySelector(menuSelector),
        links = document.querySelector(menuLinksSelector);

    let isOpen = true;

    burgerBtn.addEventListener('click', () => {

        if (isOpen) {

            burgerBtn.classList.add('active');
            menu.classList.add('opened');
            document.body.style.overflowY = 'hidden';
            isOpen = false;
        } else {

            burgerBtn.classList.remove('active');
            menu.classList.remove('opened');
            document.body.style.overflowY = 'scroll';
            isOpen = true;
        }
    });

    links.forEach((link) => {
        link.addEventListener('click', () => {

            burgerBtn.classList.remove('active');
            menu.classList.remove('open');
            document.body.style.overflowY = 'scroll';
            isOpen = true;
        });
    });
}
/*======================================================================================*/


/*=====================================MODAL OPENER=====================================*/
const modalOpener = () => {

    function bindModal(overlaySelector, formID, openBtnSelector, closeBtnSelector, inputWrapperSelector = null, errorLabel = null) {

        const overlay = document.querySelector(overlaySelector),
            modal = document.getElementById(formID),
            openBtn = document.querySelectorAll(openBtnSelector),
            closeBtn = document.querySelectorAll(closeBtnSelector);

        let removeScroll = calcScroll();
        let isWrapper = false;

        if(inputWrapperSelector !== null) {
            const wrappers = document.querySelectorAll(inputWrapperSelector),
                labels = document.querySelectorAll(errorLabel);
            isWrapper = true;
        }

        if(modal !== null) {

            openBtn.forEach(btn => {

                btn.addEventListener('click', () => {
    
                    overlay.classList.add('active');
                    modal.classList.add('active');
                    document.body.style.overflowY = 'hidden';
                    document.body.style.marginRight = `${scroll}px`; 
                });
            });

            closeBtn.forEach(btn => {

                btn.addEventListener('click', () => {
                    
                    overlay.classList.remove('active');
                    modal.classList.remove('active');
                    document.body.style.overflowY = 'scroll';
                    document.body.style.marginRight = `0px`; 

                    if(isWrapper) {
                        clearErrors(labels, wrappers);
                        Reset(modal);
                    }
                });
            });

            overlay.addEventListener('click', (e) => {

                if(e.target === overlay) {
    
                    overlay.classList.remove('active');
                    modal.classList.remove('active');
                    document.body.style.overflowY = 'scroll';
                    document.body.style.marginRight = `0px`; 

                    if(isWrapper) {
                        clearErrors(labels, wrappers);
                        Reset(modal);
                    }
                }
            });

        };

    };
    
}

function calcScroll() {
        
    let div = document.createElement('div');

    div.style.width = '50px';
    div.style.height = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';

    document.body.appendChild(div);

    let scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();

    return scrollWidth;
}

function clearErrors(labelError, inputsError) {

    labelError.forEach(item => {
            item.style.display = 'none';
    });

    inputsError.forEach(item => {
        item.classList.remove('_error');
    });
}

function Reset(form) {
    form.reset();
}
/*======================================================================================*/

export { burgerOpener, modalOpener };