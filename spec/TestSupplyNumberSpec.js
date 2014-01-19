describe("test the guess number",function(){
    var supply_number = '9301';
    beforeEach(function(){
        var guess_number;
    });

    afterEach(function(){
        clear()
    });

    it("should be '0A0B' when guess_number is '4567'",function(){
        var guess_number = '4567';
        var guess_result = check_supply_equal_guess_number(supply_number,guess_number);
        expect(guess_result).toBe('0A0B');
    });

    it("should be '1A0B' when guess_number is '5421'",function(){
        var guess_number = '5421';
        var guess_result = check_supply_equal_guess_number(supply_number,guess_number);
        expect(guess_result).toBe('1A0B');
    });

    it("should be '1A1B' when guess_number is '9473'",function(){
        var guess_number = '9473';
        var guess_result = check_supply_equal_guess_number(supply_number,guess_number);
        expect(guess_result).toBe('1A1B');
    });

    it("should be '2A2B' when guess_number is '1309'",function(){
        var guess_number = '1309';
        var guess_result = check_supply_equal_guess_number(supply_number,guess_number);
        expect(guess_result).toBe('2A2B');
    });

    it("should be '1A3B' when guess_number is '9013'",function(){
        var guess_number = '9013';
        var guess_result = check_supply_equal_guess_number(supply_number,guess_number);
        expect(guess_result).toBe('1A3B');
    });

    it("should be '4A0B' when guess_number is '9301'",function(){
        var guess_number = '9301';
        var guess_result = check_supply_equal_guess_number(supply_number,guess_number);
        expect(guess_result).toBe('4A0B');
    });



})
