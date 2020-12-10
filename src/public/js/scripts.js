$('#username').focus(function () {
    $('#user-list').removeClass('d-none');
});

$('#username').blur(function () {
    $('#user-list').addClass('d-none');
});

const ul = $('#user-list ul');

function getLiValue() {
    console.test('test')
    $('li').click(function () {
        console.log($(this).innerText)
        console.dir($('#username'))
        $('#username').value = $(this).innerText
    })
}

function getUsers() {
    fetch('http://localhost:8080/contacts')
        .then(response => response.json())
        .then(users => {
            users.data.forEach(user => {
                ul.append(`<li id=${user.id}>${user.name}</li>`)
            })
        })
        .then(() => getLiValue())
}



getUsers();