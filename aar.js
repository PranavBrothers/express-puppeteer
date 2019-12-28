const puppeteer = require('puppeteer');

function preload() {
    window.name="winCC"
}

async function main(credentials) {
    try{
        const puppeteer = require('puppeteer');
        (async () => {
          const browser = await puppeteer.launch({headless:false})
          const page = await browser.newPage();
          await page.evaluateOnNewDocument(preload);
          const navigationPromise = page.waitForNavigation()
          await page.goto('utl')
         
          await page.waitForSelector('table #btnLogin')
          
          await page.evaluate( function(){
              try{
                document.getElementsByName('username_txt')[0].value='xx';
                document.getElementsByName('j_password')[0].value='xx';
                captchaEnabled=false;
                login();
              }catch(error){
                  console.log(error)
              }
          } );
          await navigationPromise
          await page.screenshot({ path: credentials.screenshot, fullPage: true })
          await browser.close()
        })()
    }catch(err){
        console.log(err)
    } 
}
 
main(aar);
