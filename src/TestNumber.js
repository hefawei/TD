check_supply_equal_guess_number = function(number,guess_number){
    var count_A = 0,count_B = 0;
    for(var i=0;i<4;i++){
        count_A = get_count_number_of_A(number,guess_number,count_A,i);
        count_B = get_count_number_of_B(number,guess_number,count_B,i);
    }
    statistic_number_of_guess();
    return count_A+'A'+count_B+'B';
}

get_count_number_of_A = function(number,guess_number,count_A,i){
    var A = count_A;
    for(var j=0;j<4;j++){
        if(number[i] == guess_number[j] && i==j){
            A = A + 1;
        }
    }
    return A;
}

get_count_number_of_B = function(number,guess_number,count_B,i){
    var B = count_B;
    for(var j=0;j<4;j++){
        if(number[i] == guess_number[j] && i != j){
            B = B + 1;
        }
    }
    return B;
}

statistic_number_of_guess = function(){
    var times = JSON.parse(localStorage.guess_times);
    times = times + 1;
    localStorage.setItem('guess_times',JSON.stringify(times));
}

judge_game_is_start_or_not = function(){
    var random_number = localStorage.random_number;
    if(random_number == ''){
        show_alert('游戏尚未开始');
        return;
    }
    judge_guess_number_format_right_or_not(random_number);
}

judge_guess_number_format_right_or_not = function(random_number){
    var guess_number = get_input_guess_number();
       if(guess_number.length !=4 || check_number_is_repeat_or_not(random_number) == true){
           show_alert('数字格式错误，请重新输入');
           return;
       }
    return check_guess_number_equal_random_number(random_number,guess_number)
}

check_guess_number_equal_random_number = function(random_number,guess_number){
    var guess_times = JSON.parse(localStorage.guess_times);
    var guess_result = check_supply_equal_guess_number(random_number,guess_number);
    if(guess_result == '4A0B' && guess_times<=5){
        show_alert('猜测成功');
        click_guess_number_button(true);
    }
    judge_guess_failed(random_number,guess_number,guess_times,guess_result);
}

judge_guess_failed = function(random_number,guess_number,guess_times,guess_result){
    if(guess_result != '4A0B' && guess_times == 5){
        show_alert('猜测失败，您已经猜测了6次，数字是'+ random_number);
        click_guess_number_button(true);
    }
    judge_continue_guess(guess_number,guess_times,guess_result);
}

judge_continue_guess = function(guess_number,guess_times,guess_result){
    console.log('结果是:'+guess_number+guess_times+guess_result)
    if(guess_result != '4A0B' && guess_times<5 && guess_number.length == 4){
        show_alert(guess_result);
    }
}

