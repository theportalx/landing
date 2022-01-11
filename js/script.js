// baseUrl = "http://localhost:4200/"
baseUrl = "https://app.dataset.at/"


document.querySelector('.second-button').addEventListener('click', function () {
    document.querySelector('.animated-icon').classList.toggle('open');
//     document.querySelector('#navbarToggleExternalContent10').classList.toggle('collapse')
});

document.querySelector('.claim-button').addEventListener('click', function () {
    var username = document.getElementById("username").value;
    if(username.length > 3){
        window.open(baseUrl + 'auth/signup?username=' + username, '_blank');
    }
});

document.querySelector('.early-access-button').addEventListener('click', function () {
    window.open(baseUrl + 'auth/signup', '_blank');
});
