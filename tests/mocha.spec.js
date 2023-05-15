const { chromium } = require('playwright')
const expect = require('chai').expect

let browser
let page

before(async () => {
    browser = await chromium.launch();
})

after(async () => {
    await browser.close();
})

beforeEach(async () => {
    page = await browser.newPage();
})

afterEach(async () => {
    await page.close();
})

it('First mocha test', async () => {
    await page.goto('https://www.exmple.com')
    expect('h1').to.exist
})
//test mod master
// add another line
