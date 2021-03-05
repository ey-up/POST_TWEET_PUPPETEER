const puppeteer = require('puppeteer');


const username = 'write your username';
const password = 'write your password';
const tweet = `write what you want`;

let browser = null;
let page = null;

(async () => {
    browser = await puppeteer.launch({ headless: false });
    page = await browser.newPage();
    page.setViewport({
      width:2000,
      height:1000,
      isMobile:false
    })

    
    await page.goto('https://twitter.com/login', {waitUntil:'networkidle2'});
 
    await page.$eval('span[class="css-901oao css-16my406 r-poiln3 r-bcqeeo r-qvutc0"]',el=>{
        console.log("response", el)
        console.log(el.textContent)
        el.textContent="selamlarr efenim"
    },{delay:1})
    await page.type('input[name="session[username_or_email]"] ',username,{delay:1});
    await page.type('input[name="session[password]"]',password,{delay:1});
    await page.$eval('input[name="session[password]"]',el =>el.type="text")
    await page.click('div[class="css-18t94o4 css-1dbjc4n r-urgr8i r-42olwf r-sdzlij r-1phboty r-rs99b7 r-1w2pmg r-1fz3rvf r-usiww2 r-1pl7oy7 r-snto4y r-1ny4l3l r-1dye5f7 r-o7ynqc r-6416eg r-lrvibr"] ')

    
    
    await page.waitForSelector('a[aria-label="Tweet"]');
    await page.click('a[aria-label="Tweet"]');
    
    await page.waitForSelector('div[data-testid="tweetButton"]');
    await page.keyboard.type(tweet);
    await page.click('div[data-testid="tweetButton"]');
    

     
})();