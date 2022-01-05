class pageOne{
    get from() {return $("#src")}
    get to() {return $("#dest")}
    get placeList(){ return $$("//*[@class='autoFill homeSearch']/li")}
    get currentDate(){ return $('.current')}
    get getdateField(){ return $('#onward_cal')}
    async openBrowser(url) {
        await browser.url(url);
    }

    async setFrom(value){
        await this.from.setValue(value)
        await browser.pause('2000');
        if (await this.placeList.length > 0) {
            await this.placeList[0].click();
        }
    }
    
    async setTo(value){
        await this.to.setValue(value)
        if (await this.placeList.length > 0) {
            await this.placeList[0].click();
        }

    }

    async setCurrentDate(){
        await this.getdateField.click()
        await browser.pause('1000');
        await this.currentDate.click();
    }
}

module.exports = new pageOne()
