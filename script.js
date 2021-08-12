let todosHtml = '';
let list = document.querySelector('#elements');

function drawTodos(todos) {
    todos.forEach((todo) => {
        todosHtml += `
        <li todo-id="${todo.id}">
            <span> ${todo.title}</span>
            <input class="complete" action="completion" type="checkbox" ${todo.isCompleted === "1" ? 'checked' : ''}>
            <span class="remove_btn" action="remove">x</span>
        </li>`;
    });

    list.innerHTML = todosHtml;

    document.querySelectorAll('span[action="remove"]').forEach((removeEl) => {
        removeEl.addEventListener('click', () => {
            let data = new FormData();
            data.append("id", removeEl.parentElement.getAttribute('todo-id'));

            fetch('http://localhost/connection/remove.php', {
                    method: 'post',
                    body: data,
                })
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    drawTodos(response)
                })
        });
    });

    document.querySelectorAll('input[action="completion"]').forEach((checkbox) => {
        checkbox.addEventListener('click', () => {
            let data = new FormData();
            data.append("id", checkbox.parentElement.getAttribute('todo-id'));
            data.append("isCompleted", checkbox.checked ? 1 : 0);

            fetch('http://localhost/connection/edit.php', {
                    method: 'post',
                    body: data,
                })
                .then((response) => {
                    return response.json();
                })
                .then((response) => {
                    drawTodos(response)
                })

        });
    });

    todosHtml = '';
}



fetch('http://localhost/connection/backend.php')
    .then((response) => {
        return response.json();
    })
    .then((todos) => {
        drawTodos(todos);
    });



console.log(todosHtml)

let input = document.querySelector('#add');
let btn = document.querySelector('#btn');
let elements = document.getElementsByTagName('li');

btn.addEventListener('click', () => {
    if (!input.value) {
        alert('debil');
    } else {
        let data = new FormData();
        data.append("title", input.value);

        fetch('http://localhost/connection/add.php', {
                method: 'post',
                body: data,
            })
            .then((response) => {
                return response.json();
            })
            .then((response) => {
                drawTodos(response)
            })
    }
});