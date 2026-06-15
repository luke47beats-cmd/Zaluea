const form = document.querySelector('form');
const input = document.querySelector('input');

form.addEventListener('submit', async event => {
    event.preventDefault();
    window.navigator.serviceWorker.register('./sw.js', {
        scope: __uv$config.prefix
    }).then(() => {
        let url = input.value.trim();
        if (!isUrl(url)) url = 'https://www.google.com/search?q=' + url;
        else if (!(url.startsWith('https://') || url.startsWith('http://'))) url = 'http://' + url;


        window.location.href = __uv$config.prefix + __uv$config.encodeUrl(url);
    });
});

function isUrl(val = ''){
    if (/^http(s?):\/\//.test(val) || val.includes('.') && val.substr(0, 1) !== ' ') return true;
    return false;
};

function quickLink(url1) {
    window.location.href = __uv$config.prefix + url1;
}

// Rotating tips
const tips = [
    "Sea otters hold hands to float",
    "luke is goated",
    "welp",
    "bello and cosmicdust is goated"
];

let tipIndex = 0;
const tipsEl = document.getElementById('rotating-tips');

function showTip() {
    tipsEl.classList.remove('tip-visible');
    tipsEl.classList.add('tip-hidden');
    setTimeout(() => {
        tipsEl.textContent = tips[tipIndex];
        tipsEl.classList.remove('tip-hidden');
        tipsEl.classList.add('tip-visible');
        tipIndex = (tipIndex + 1) % tips.length;
    }, 400);
}

showTip();
setInterval(showTip, 10000);
