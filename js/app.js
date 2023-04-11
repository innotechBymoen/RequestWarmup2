function get_users_success(response) {
    let users_container = document.querySelector(`#users_container`);
    for(let i=0; i<response[`data`][`data`].length; i++) {
        users_container.insertAdjacentHTML(`beforeend`, 
            `<div>
                <p>${response[`data`][`data`][i][`first_name`]} ${response[`data`][`data`][i][`last_name`]}</p>
                <p>${response[`data`][`data`][i][`email`]}</p>
                <img src="${response[`data`][`data`][i][`avatar`]}" />
            </div><br/></br>`
        );
    }
}

function get_users_failure(error) {
    let users_container = document.querySelector(`#users_container`);
    users_container.insertAdjacentHTML(`beforeend`, `<p>Sorry, something has gone wrong. Please try again</p>`)
}

function get_users(details) {
    axios.request({
        url: `https://reqres.in/api/users`
    }).then(get_users_success).catch(get_users_failure);
}

let get_users_button = document.querySelector(`#get_users`);
get_users_button.addEventListener(`click`, get_users);

function post_user_success(response) {
    let post_user_container = document.querySelector(`#post_user_container`);
    post_user_container.insertAdjacentHTML(`beforeend`, 
        `<div>
            <p>${response[`data`][`job`]}</p>
            <p>${response[`data`][`name`]}</p>
            <p>${response[`data`][`createdAt`]}</p>
            <p>${response[`data`][`id`]}</p>
        </div>`
    );
}

function post_user_failure(error) {
    let post_user_container = document.querySelector(`#post_user_container`);
    post_user_container.insertAdjacentHTML(`beforeend`, `<p>Sorry, something has gone wrong. Please try again</p>`)
}

function post_users(details) {
    let name_input = document.querySelector(`#name_input`);
    let name_value = name_input[`value`];
    let job_input = document.querySelector(`#job_input`);
    let job_value = job_input[`value`];

    axios.request({
        url: `https://reqres.in/api/users`,
        method: `POST`,
        data: {
            name: name_value,
            job: job_value
        }
    }).then(post_user_success).catch(post_user_failure);
}

let post_user_button = document.querySelector(`#post_user`);
post_user_button.addEventListener(`click`, post_users);