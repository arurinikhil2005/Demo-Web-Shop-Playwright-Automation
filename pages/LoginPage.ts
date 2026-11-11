import { type Page, type Locator } from '@playwright/test';
export class LoginPage{
    readonly emailInput!:Locator;
    readonly passwordInput!:Locator;
    readonly loginButton!:Locator;
    readonly logoutLink!:Locator;
    readonly errorMessage!:Locator;
    constructor(page:Page){
        this.emailInput=page.getByLabel("Email");
        this.passwordInput=page.getByLabel("Password");
        this.loginButton=page.getByRole('button',{name:"Log in"});
        this.logoutLink=page.getByRole('link',{name:"Log out"});
        this.errorMessage=page.getByText("Login was unsuccessful. Please correct the errors and try again.");

    }
 async enterEmail(email:string){
    await this.emailInput.fill(email)
 }
 async enterPassword(pass:string){
    await this.passwordInput.fill(pass)
 }
 async Clicklogin(){
    await this.loginButton.click()
 }
}
