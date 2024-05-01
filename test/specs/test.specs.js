

describe('Homework Web Automation', () => {
    it('Test Case 1 - Validate Login', async () => {
        await browser.url('https://www.saucedemo.com/')
        
        const username = await browser.$('#user-name')
        const password = await browser.$('#password')
        const loginButton = await browser.$('#login-button')

        await username.setValue('standard_user')
        await password.setValue('secret_sauce')

        console.log(`Value dari button ${await loginButton.getValue()}`)   
        await loginButton.click()
        
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    
    })

    it('Test Case 2 - Add To Cart Item', async () => {
        const addTocart = await browser.$('#add-to-cart-sauce-labs-backpack')
        const shoppingCart = await browser.$('#shopping_cart_container')

        await addTocart.click()
        await shoppingCart.click()

        const elem = await $('//*[@data-test="item-quantity"]')
        await expect(elem).toHaveText('1')

        await browser.pause(10000)

    })

})