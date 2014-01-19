describe("create a random four-digit number",function(){

    afterEach(function(){
        clear()
    });

    it("should be random",function(){
        var random_number = create_random_number();
        var random = check_number_is_random_or_not();
        expect(random).toEqual(true);
    });

    it("should be a four-digit number",function(){
        var random_number = create_random_number();
        expect(random_number.length).toEqual(4);
    });

    it("should be integer",function(){
        var random_number = create_random_number();
        expect(isNaN(random_number)).toEqual(false);
    });

    it("should be not repeat",function(){
        var random_number = create_random_number();
        var number_repeat = check_number_is_repeat_or_not(random_number);
        expect(number_repeat).not.toEqual(false);
    });


})