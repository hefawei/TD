describe("only guess six times",function(){
    beforeEach(function(){
        localStorage.guess_times = '0';
        localStorage.supply_number = '9301';
        click_start_game_button(false);
        click_guess_number_button(true);
    });

    afterEach(function(){
        clear();
    })

    it("should be alert 猜测成功 when you are correct at your first time",function(){
        guess_correct();
        expect(show_alert("猜测成功")).toBe("猜测成功");
    });

    it("should be alert 猜测成功 when you are correct at your sixth time",function(){
        guess_correct();
        guess_wrong(5);
        expect(show_alert("猜测成功")).toBe("猜测成功");
    });

    it("should be alert 猜测失败 when you are wrong after your six times",function(){
        var random_number = localStorage.getItem('random_number');
        guess_correct();
        guess_wrong(6);
        expect(show_alert("猜测失败,您已经猜测6次，数字是"+random_number)).toBe("猜测失败,您已经猜测6次，数字是"+random_number);
    });




})