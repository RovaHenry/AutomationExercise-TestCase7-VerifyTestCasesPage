const {By} = require('selenium-webdriver');

class TestCasePage {
    constructor(driver) {
        this.driver = driver;
        this.tcButton = By.xpath("//div[@id='slider-carousel']//div[@class='item active']//a[@href='/test_cases']/button[@class='btn btn-success']");
        this.verifyTC = By.xpath("//b[.='Test Cases']");
    }

    async testCaseButton() {
        await this.driver.findElement(this.tcButton).click();
    }

    async navigate(destinationURL){
        await this.driver.get(destinationURL);
    }
    async verifyTestCase() {
        const tc = await this.driver.findElement(this.verifyTC);
        return tc;
    }

}

module.exports = TestCasePage;