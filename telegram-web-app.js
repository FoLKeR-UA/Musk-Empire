// telegram-web-app.js

(function() {
    'use strict';

    // Функция для подмены скриптов
    function replaceScriptUrl() {
        const urlsToReplace = [
            'https://muskempire.io/js/telegram-web-app.js',
            'https://app.muskempire.io/js/telegram-web-app.js',
            'https://muskempire.io/js/telegram-web-app.js?v=1.0',
            'https://muskempiregame.io/js/telegram-web-app.js?v=1.0'
        ];
        const newUrl = 'https://raw.githubusercontent.com/yourusername/yourrepository/main/telegram-web-app.js';

        const scripts = document.getElementsByTagName('script');
        for (let script of scripts) {
            if (urlsToReplace.includes(script.src)) {
                const newScript = document.createElement('script');
                newScript.src = newUrl;
                newScript.type = 'text/javascript';
                script.parentNode.replaceChild(newScript, script);
                console.log('Script URL replaced:', newScript.src);
            }
        }
    }

    // Наблюдатель за изменениями в DOM
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length) {
                replaceScriptUrl();
            }
        });
    });

    const config = {
        childList: true,
        subtree: true
    };

    observer.observe(document.body, config);

    replaceScriptUrl();
})();
