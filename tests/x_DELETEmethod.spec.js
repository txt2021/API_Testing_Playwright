
const { test, expect } = require('@playwright/test');
const { DeletePage } = require('./pages/deleteMethodPage');


test("Should delete a user", async ({ request, baseURL }) => {
    const deletePage = new DeletePage(); 
    const delete_request = await deletePage.DELETE_request(request,baseURL);
    await deletePage.checkResponseTruthy(delete_request);
    await deletePage.checkResponsePositiveStatus(delete_request);
});

test("Should not delete a user with invalid ID", async ({ request, baseURL }) => {
    const deletePage = new DeletePage(); 
    const delete_request = await deletePage.DELETE_request_invalid(request,baseURL);
    await deletePage.checkResponseNegativeStatus(delete_request);
});

