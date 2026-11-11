import {test as base}from "@playwright/test";
import { Registration } from "../pages/Registration";
type RegisterFixtures={
    Registerpage:Registration;
}
export const test=base.extend<RegisterFixtures>({
    Registerpage:async({page},use)=>{
        const Registerpage=new Registration(page);
      await page.goto("https://demowebshop.tricentis.com/register", {
    waitUntil: "domcontentloaded"
});
        await use(Registerpage);
    }
})