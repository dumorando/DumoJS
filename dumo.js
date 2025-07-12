/**
 * -=-DumoJS-=-
 * A library for libraries.
 * 
 * made specifically for use by me ( :) ), the modern alternative to javascript.dumorando.com
 */

(() => {
    function loadscript(url, sync) {
        if (sync) {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            xhr.send(null);
            
            const newscript = document.createElement("script");
            newscript.innerText = xhr.responseText;
            document.body.appendChild(newscript);
        } else {
            return new Promise((resolve, reject) => {
                const newscript = document.createElement('script');
                newscript.src = url;
                newscript.onload = () => resolve();
                newscript.onerror = reject;

                document.body.appendChild(newscript);
            });
        }
    }

    class DumoJS {
        constructor() {
            this.cdn_source = 'https://cdn.jsdelivr.net/npm/';
        }

        load_library(library, config = {}) {
            const url = config.noSource ? library : this.cdn_source + library;
            return loadscript(url, false); 
        }

        load_library_sync(library, config = {}) {
            const url = config.noSource ? library : this.cdn_source + library;
            return loadscript(url, true); 
        }

        config(new_conf) {
            for (const [key, val] of Object.entries(new_conf)) {
                this[key] = val;
            }
        }
    }

    // window._djs_loadscript = loadscript;
    window.DumoJS = new DumoJS();
})();