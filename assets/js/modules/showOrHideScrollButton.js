const buttonScrollToTop = document.querySelector('.scroll-to-top-button');

const showOrHideScrollButton = () => {
    if (window.scrollY > 400) {
        buttonScrollToTop.style.opacity = '100'
    } else {
        buttonScrollToTop.style.opacity = '0'
    }
};

export default showOrHideScrollButton;
