
//include axios as http library

window.axios = require('axios')

window.axios.defaults.headers.common['X-Request-With'] = 'XMLHttpRequest';

let token = document.head.querySelector('meta[name="csrf_token"]');

if(token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not fond in meta tag.');
}