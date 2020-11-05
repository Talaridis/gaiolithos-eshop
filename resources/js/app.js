//AXIOSS
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


//sweetalert2 && toast
import swal from 'sweetalert2';
window.swal = swal;
const toast = swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});
window.toast = toast;

// DataTables
require('datatables.net-bs4');
require('datatables.net-buttons-bs4');

//theme
require('../theme/js/app');

