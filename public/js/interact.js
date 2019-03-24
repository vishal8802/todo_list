$('nav').hover(() => {
    $('nav').toggleClass('show')
})


function done(x) {
    $.post('/done', {
        id: x.id
    }, () => {
        refresh()
    })
}

function del(x) {
    $.post('/delete', {
        id: x.id * (-1)
    }, () => {
        refresh()
    })
}