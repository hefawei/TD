create_random_number = function () {
    var init_number = '';
    for (var i = 0; i < 4; i++) {
        var random_number = Math.floor(Math.random() * 10);
        while (check_is_random_number(random_number, init_number) == true) {
            random_number = Math.floor(Math.random() * 10);
        }
        init_number += random_number;
    }
    console.log(init_number)
    localStorage.setItem('random_number', init_number);
    localStorage.guess_times = '0';
    return init_number;
}

check_is_random_number = function (random_number, init_number) {
    return _.some(init_number, function (num) {
        return num == random_number
    })
}


check_number_is_random_or_not = function () {
    var numbers = [];
    for (var i = 0; i < 1000; i++) {
        var random_number = create_random_number();
        numbers.push({'random_number': random_number})
    }
    if (get_max_length(numbers).length < 10) {
        return true;
    }
}

get_max_length = function (numbers) {
    var max_length = _.max(get_numbers_group(numbers), function (list) {
        return list.length;
    })
    return max_length;
}

get_numbers_group = function (numbers) {
    var numbers_group = _.groupBy(numbers, function (list) {
        return list.random_number;
    })
    var numbers_group_list = [];
    _.map(numbers_group, function (value, key) {
        numbers_group_list.push({'number': key, 'length': value.length})
    })
    return numbers_group_list;
}


check_number_is_repeat_or_not = function (random_number) {
    if (random_number != '') {
        for (var i = 0; i < 3; i++) {
            return compare_random_number(random_number, i)
          }
    }
    return false;
}

compare_random_number = function (random_number, i) {
    for (var j = i + 1; j < 4; j++) {
        console.log('产生的随机数是')
        if (random_number[i] == random_number[j]) {
            return true;
        }
    }
}




