fetch('/api/user', {
    credentials: 'same-origin',
    headers: {

        'X-Requested-with' : 'XMLHttpRequest',
        'X-XSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
    }
})






