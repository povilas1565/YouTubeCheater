//imports
const puppeteer            = require('puppeteer-extra')
const pluginProxy          = require('puppeteer-extra-plugin-proxy')
const AdblockerPlugin      = require('puppeteer-extra-plugin-adblocker')
const StealthPlugin        = require('puppeteer-extra-plugin-stealth')
const newFP                = require('./utils/newFP')
const {puppeteer_settings} = require('./settings/puppeteer_settings')

//defines
puppeteer.use(StealthPlugin())
puppeteer.use(AdblockerPlugin())

//main function
const create_brand = async (email, pass) => {
    const browser = await puppeteer.launch(puppeteer_settings)
    const page = await browser.newPage()
    await newFP(page)
    await page.goto('http://www.youtube.com/create_channel?action_create_new_channel_redirect=true', {waitUntil: 'domcontentloaded'})
}
