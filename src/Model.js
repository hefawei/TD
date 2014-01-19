function clear() {
    localStorage.random_number = '';
    click_guess_number_button(false);
    click_start_game_button(false);
    show_alert('');
}

get_input_guess_number = function () {
    return document.getElementById('input_guess_number').value;
}

show_alert = function (content) {
    return document.getElementById('output content').innerHTML = content;
}

click_start_game_button = function (blooen) {
    return document.getElementById('start game').disabled = blooen;
}

click_guess_number_button = function (blooen) {
    return document.getElementById('guess').disabled = blooen;
}

guess_correct = function () {
    var guess_number = get_input_guess_number();
    guess_number == '9301';
    document.getElementById('guess').click();
}

guess_wrong = function (guess_times) {
    var guess_number = get_input_guess_number();
    for (var i = 0; i < guess_times; i++) {
        guess_number != '9301';
        document.getElementById('guess').click();
    }

}

function reset(){
    localStorage.random_number = '';
    click_guess_number_button(false);
    click_start_game_button(false);
    show_alert('');

}

