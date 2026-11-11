import {test as base}from"@playwright/test";
import { LoginPage } from "../pages/LoginPage";
type MyFixtures={
    loginPage:LoginPage;

};
export const test=base.extend<MyFixtures>({
    loginPage:async({page},use)=>{
        const loginPage=new LoginPage(page);
await page.goto("https://demowebshop.tricentis.com/login", {
    waitUntil: "domcontentloaded"
});
await use(loginPage)
    }
});
