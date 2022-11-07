
const { test, expect } = require('@playwright/test');
const { PutPage } = require('./pages/putMethodPage');


test("Should update a user info", async ({ request, baseURL }) => {
    const putPage = new PutPage(); 
    const put_request = await putPage.PUT_request(request,baseURL);
    await putPage.checkResponseTruthy(put_request);
    await putPage.checkResponsePositiveStatus(put_request);
    await putPage.printResponse(put_request);
});

test("Should not update a user info with invalid ID", async ({ request, baseURL }) => {
    const putPage = new PutPage(); 
    const put_request = await putPage.PUT_request_withInvalidID(request,baseURL);
    await putPage.checkResponseNegativeStatus(put_request);
    await putPage.printResponse(put_request);
});

test("Should not update a user info with invalid request parameter", async ({ request, baseURL }) => {
    const putPage = new PutPage(); 
    const put_request = await putPage.PUT_request_withInvalidEmail(request,baseURL);
    await putPage.checkResponseNegativeStatus422(put_request);
    await putPage.printResponse(put_request);
});
