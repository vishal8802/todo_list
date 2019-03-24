$('#add').click(() => {
    if ($('#taskname').val() == '') {
        alert('task empty')
        return
    }
    $.post('/todo', {
        taskname: $('#taskname').val(),
        description: $('#desc').val()
    }, (data) => {
        refresh()
    })
})

function refresh() {
    $('#list').empty()
    let listdata = ''
    $.get('/todos', (data) => {
        for (let item of data) {
            if (item.done === true) {
                listdata += `<tr class='faded'><td>${item.id}</td>`
            } else {
                listdata += `<tr><td>${item.id}</td>`
            }
            listdata += `<td>${item.name}</td>`
            listdata += `<td>${item.description}</td>`
            listdata += `<td>
                            <button class='btn-trash' id='-${item.id}' onclick='del(this)'>
                                <i style='font-size:20px' class="far fa-trash-alt"></i>
                            </button>
                        </td>`
            if (item.done === false) {
                listdata += `<td style='text-align:right;'><button onclick='done(this)' class = 'btn-done' id = '${item.id}'> Done? </button></td></tr>`
            } else {
                listdata += `<td style='text-align:right;font-size:20px;color:green'>
                                <i class="fas fa-1x fa-check-circle"></i>
                            </td></tr>`
            }

        }
        $('#list').html(listdata)
    })
}
refresh()