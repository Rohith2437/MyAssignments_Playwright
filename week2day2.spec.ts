import { chromium, firefox, test } from "@playwright/test";

test(`flipkart`, async()=>{ 

const browser = await firefox.launch(); 
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://www.flipkart.com/");
let title=await page.title();
let url= page.url();
console.log(`the title of the page is ${title}`)
console.log(`the title of the page is ${url}`)
})

test(`Red bus`, async()=>{ 

const browser = await chromium.launch(); 
const context = await browser.newContext();
const page = await context.newPage();

await page.goto("https://www.redbus.in/");
let title= await page.title();
console.log(`the title of the page is ${title}`)
let url= page.url();
console.log(`the title of the page is ${url}`)
})

