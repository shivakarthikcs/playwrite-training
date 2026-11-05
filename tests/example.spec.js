import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://accounts.google.com/v3/signin/identifier?continue=https://mail.google.com/mail/u/0/&emr=1&followup=https://mail.google.com/mail/u/0/&osid=1&passive=1209600&service=mail&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S-1140006235:1793861218860573');
  await page.getByRole('textbox', { name: 'Email or phone' }).click();
  await page.getByRole('textbox', { name: 'Email or phone' }).fill('shivakarthik.cs@gmail.com');
  await page.getByRole('button', { name: 'Next' }).click();
});