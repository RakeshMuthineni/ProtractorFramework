let homepage = require('../pages/homepage.js')




describe('demo calculator tests', function () {

    it('addition test', function () {
        // browser.get('http://juliemr.github.io/protractor-demo/');

        homepage.get('http://juliemr.github.io/protractor-demo/');

        // element(by.model('first')).sendKeys('2');

        homepage.enterFirstNumber('4');

        // element(by.model('second')).sendKeys('2');

        homepage.enterSecondNumber('3');


        // element(by.css('[ng-click="doAddition()"]')).click();
        homepage.clickGo();

        // let result = element(by.cssContainingText('.ng-binding','4'));

        // expect(result.getText()).toEqual('4 ');

        homepage.verifyResult('7');

        browser.sleep(3000);

    });
    it('addition test', function () {
        homepage.get('http://juliemr.github.io/protractor-demo/');
        homepage.enterFirstNumber('4');
        homepage.enterSecondNumber('3');
        homepage.clickGo1();
        homepage.verifyResult('7');
        browser.sleep(3000);

    });


});


