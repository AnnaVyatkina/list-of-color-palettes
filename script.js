const tabs = document.querySelectorAll('.accordion-tab');

const reset = () => tabs.forEach((tab) => tab.classList.remove('expand'));

function activate(e) {
    if (!e.target.matches('.accordion-tab > h2')) return;
    reset();
    tabs[e.target.dataset.index].classList.add('expand');
}

const init = () => tabs[0].classList.add('expand');

window.addEventListener('load', init, false);
window.addEventListener('click', activate, false);