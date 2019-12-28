const puppeteer = require('puppeteer');
const express = require('express');
const app = express();
app.use(express.json())  

app.post('/', async(req, res) => {
    console.log("===>"+req.body)
    await main(req.body)
    res.send("success")
});

async function main(credentials) {
    try{
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.setViewport({width: 1200, height: 720})
        await page.goto(credentials.url, { waitUntil: 'networkidle0' }); 
        await page.type(credentials.userNameElement, credentials.userName);
        await page.type(credentials.passwordElement, credentials.password);
        await Promise.all([
            page.click(credentials.submit),
            page.waitForNavigation({ waitUntil: 'networkidle0' }),
        ]);
        await page.screenshot({ path: credentials.screenshot, fullPage: true })
        browser.close()
    }catch(err){
        console.log(err)
    } 
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on port ${port}`));
