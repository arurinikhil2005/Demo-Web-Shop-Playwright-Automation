import { expect } from "@playwright/test";
import{test} from "../fixtures/regFixtures";
import { generateRandomEmail} from "../utils/randomemail";
test.describe("Register module",()=>{
test("verify 5 emails", async ({ Registerpage, page }) => {

    for (let i = 0; i < 5; i++) {
        await page.goto(
            "https://demowebshop.tricentis.com/register",
        
    { waitUntil: "domcontentloaded" }
        );
    

        await Registerpage.Selectmale();
        await Registerpage.First("Nikhil");
        await Registerpage.Last("Paul");
        await Registerpage.Emailgenerate(generateRandomEmail());
        await Registerpage.Pass("Test@1234");
        await Registerpage.Confirm("Test@1234");

        await Registerpage.Button();

        await expect(
            page.getByText("Your registration completed", {
                exact: true
            })
        ).toBeVisible();
    }
});
test("Verify required field validation", async ({ Registerpage, page }) => {
    

    await Registerpage.Button();

    await expect(
        Registerpage.validationErrors.first()
    ).toBeVisible();

    
});

test("Verify invalid email validation", async ({ Registerpage }) => {
    await Registerpage.Selectmale();
    await Registerpage.First("Nikhil");
    await Registerpage.Last("Paul");
    await Registerpage.Emailgenerate("nikhil@");
    await Registerpage.Pass("Test@1234");
    await Registerpage.Confirm("Test@1234");

    await Registerpage.Button();

    await expect(
        Registerpage.validationErrors.first()
    ).toBeVisible();
});
test("Verify mismatched password validation", async ({ Registerpage }) => {
    await Registerpage.Selectmale();
    await Registerpage.First("Nikhil");
    await Registerpage.Last("Paul");
    await Registerpage.Emailgenerate(generateRandomEmail());

    await Registerpage.Pass("Test@1234");
    await Registerpage.Confirm("Test@5678");

    await Registerpage.Button();

    await expect(
        Registerpage.validationErrors
    ).toBeVisible();
});


test("Verify existing email validation", async ({ Registerpage, page }) => {
    const email = generateRandomEmail();

    await Registerpage.Selectmale();
    await Registerpage.First("Nikhil");
    await Registerpage.Last("Paul");
    await Registerpage.Emailgenerate(email);
    await Registerpage.Pass("Test@1234");
    await Registerpage.Confirm("Test@1234");
    await Registerpage.Button();

    await expect(
        page.getByText("Your registration completed", { exact: true })
    ).toBeVisible();

    await page.goto(
        "https://demowebshop.tricentis.com/register",
             
    { waitUntil: "domcontentloaded" }
    );

    await Registerpage.Selectmale();
    await Registerpage.First("Nikhil");
    await Registerpage.Last("Paul");
    await Registerpage.Emailgenerate(email);
    await Registerpage.Pass("Test@1234");
    await Registerpage.Confirm("Test@1234");
    await Registerpage.Button();

    await expect(
        Registerpage.validationSummary
    ).toBeVisible();
});
});