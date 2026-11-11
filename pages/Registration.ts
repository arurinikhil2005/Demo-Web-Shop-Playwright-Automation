import { type Page,type Locator } from "@playwright/test";
export class Registration {
    readonly gender:Locator;
readonly male:Locator;
readonly femaleRadio:Locator 
readonly fisrtname : Locator;
readonly lastname:Locator;
readonly email:Locator;
readonly pass:Locator;
readonly confirm:Locator;
readonly regbutton:Locator;
readonly validationErrors: Locator;
readonly validationSummary: Locator;
constructor(page:Page){
    this.gender=page.getByLabel("Gender:")
    this.male=page.getByRole('radio', { name: 'Male', exact: true });
    this.femaleRadio=page.getByRole('radio', { name: 'Female', exact: true });
    this.fisrtname=page.getByLabel("First name:");
    this.lastname=page.getByLabel("Last name:");
    this.email=page.getByLabel("Email:");
    this.validationErrors = page.locator('.field-validation-error');
this.validationSummary = page.locator('.validation-summary-errors');
    
this.pass = page.getByRole('textbox', {
    name: 'Password:',
    exact: true
});

this.confirm = page.getByRole('textbox', {
    name: 'Confirm password:',
    exact: true
});

    this.regbutton = page.getByRole('button', {
    name: 'Register',
    exact: true
});
}

    async Selectmale(){
      await this.male.check();

    }
    async Selectfemale(){
        await this.femaleRadio.check()
    }
    async First(Firstname:string){ 
        await this.fisrtname.fill(Firstname)
    }
    async Last(Lastname:string){
        await this.lastname.fill(Lastname)
    }
    async Emailgenerate(emais:string){
        await this.email.fill(emais)
    }
    async Pass(password:string){
        await this.pass.fill(password)
    }
    async Confirm(Confirmpass:string){
        await this.confirm.fill(Confirmpass)
    }
    async  Button(){
        await this.regbutton.click()
    }
}
