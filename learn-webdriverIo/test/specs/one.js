const pageOne = require('../pageObject/pageOne');

describe('Bussing Booking Page', () => {
    it('Title Validation', async ()=>  {
        await pageOne.openBrowser('https://www.redbus.in/');
        await browser.maximizeWindow()
        expect(await browser.getTitle()).toContain("redBus");
        await pageOne.setFrom('OOTY')
        await browser.pause('2000');
        await pageOne.setTo('Chennai')
        await browser.pause('2000');
        await pageOne.setCurrentDate();
        // await browser.pause('5000');
    })
    it('Title Validation expecte to fail', async function()  {
        this.retries(1);
        await pageOne.openBrowser('https://www.redbus.in/');
        await browser.maximizeWindow()
        expect(await browser.getTitle()).toContain("blue");
        await pageOne.setFrom('OOTY')
        await browser.pause('2000');
        await pageOne.setTo('Chennai')
        await browser.pause('2000');
        await pageOne.setCurrentDate();
        // await browser.pause('5000');
    })
    it('Title Validation', async ()=>  {
        await pageOne.openBrowser('https://www.redbus.in/');
        await browser.maximizeWindow()
        expect(await browser.getTitle()).toContain("redBus");
        await pageOne.setFrom('OOTY')
        await browser.pause('2000');
        await pageOne.setTo('Chennai')
        await browser.pause('2000');
        await pageOne.setCurrentDate();
        // await browser.pause('5000');
    })
});
