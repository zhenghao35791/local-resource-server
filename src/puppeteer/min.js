const { mn, url2 } = require('../config/puppeteer_config')
const srcToImg = require('../helper/srcToImg')
const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url2);
        console.log(`got to ${url2}`)

        await page.setViewport({
            width: 1920,
            height: 1080
        })
        console.log('reset viewport')

        await page.focus('#kw') // 获取id为kw的对象（输入框）的焦点
        await page.keyboard.sendCharacter('狗') // 模拟键盘输入搜索条件
        await page.click('.s_search') // 模拟点击
        console.log('go to search list page')


        page.on('load', async () => {
            // 等待page加载完成
            console.log('page loading done, start fetch..')
            const srcs = await page.evaluate( () => {
                const images = document.querySelectorAll('img.main_img') // 取到所有页面上的main——img class
                return Array.prototype.map.call(images, img => img.src) // 返回src地址的m数组
            })
            console.log(`get ${srcs.length} pages, start download images`)

            srcs.forEach(async src => {
                // sleep
                await page.waitFor(200)
                // 根据src路径转为img，下载到mn目录下
                await srcToImg(src, mn)
            })

            await browser.close();
        })
    }
    catch (err) {
        console.log(err)
    }
})();
