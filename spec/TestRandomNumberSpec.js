describe("test the create random number",function(){
    beforeEach(function(){
        var random_number = create_random_number();
    });

    it("should be '4A0B' when guess number equal random number",function(){
        var guess_number;
        var random_number = create_random_number();
        guess_number=random_number;
        var guess_result = check_supply_equal_guess_number(random_number,guess_number);
        expect(guess_result).toEqual('4A0B');
    });



    afterEach(function(){
        clear()
    });



})
