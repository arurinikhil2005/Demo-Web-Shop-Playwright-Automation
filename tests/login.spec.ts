import { test } from "../fixtures/loginFixtures"
import { LoginData } from '../testData/loginData'
import { expect } from '@playwright/test';
test.describe("Login module",()=>{

test('Valid Login', async ({ loginPage }) => {

    await loginPage.enterEmail(LoginData.validuser.email)
    await loginPage.enterPassword(LoginData.validuser.pass)
    await loginPage.Clicklogin();
     await expect(loginPage.logoutLink).toBeVisible();

});

test('Invalid Email', async ({ loginPage }) => {

    await loginPage.enterEmail(LoginData.invaliduser.email)
    await loginPage.enterPassword(LoginData.invaliduser.pass)
    await loginPage.Clicklogin();
    await expect(loginPage.logoutLink).not.toBeVisible();
    await expect(loginPage.errorMessage).toBeVisible();

});
test("invalid password",async({loginPage})=>{
  await loginPage.enterEmail(LoginData.invalidpassword.email);
  await loginPage.enterPassword(LoginData.invalidpassword.pass);
  await loginPage.Clicklogin();
  await expect(loginPage.logoutLink).not.toBeVisible();
  await expect(loginPage.errorMessage).toBeVisible();

});
test('empty',async({loginPage})=>{
  await loginPage.enterEmail(LoginData.emptyuser.email);
  await loginPage.enterPassword(LoginData.emptyuser.pass);
  await loginPage.Clicklogin();
   await expect(loginPage.errorMessage).toBeVisible();

});
});
