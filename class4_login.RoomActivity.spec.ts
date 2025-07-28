import { test } from "@playwright/test";

test(`learn css using leaftaps`, async({page})=>{ //page fixture we are using to avoid the the 3 line for opening the browser

    await page.goto("https://login.salesforce.com/?locale=in");

     await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`); //#idvalue is given

     await page.locator(`#password`).fill(`RaviSalesTest#1432`);

     await page.locator(`#Login`).click();

     await page.waitForTimeout(3000);

}
)