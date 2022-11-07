
const { test, expect } = require('@playwright/test');
const { GetPage } = require('./pages/getMethodPage');


test("Should get list of users", async ({ request, baseURL }) => {
    const getPage = new GetPage(); 
    const get_request = await getPage.GET_request(request,baseURL);
    await getPage.checkResponseTruthy(get_request);
    await getPage.checkResponsePositiveStatus(get_request);
    await getPage.printResponse(get_request);
});

test("Should get user by ID", async ({ request, baseURL }) => {
    const getPage = new GetPage(); 
    const get_user_by_id = await getPage.GET_User(request,baseURL);
    await getPage.checkResponseTruthy(get_user_by_id);
    await getPage.checkResponsePositiveStatus(get_user_by_id);
    await getPage.printResponse(get_user_by_id);
});

test("Should not get user by invalid ID", async ({ request, baseURL }) => {
    const getPage = new GetPage(); 
    const get_user_by_id = await getPage.GET_UserWirhWrongID(request,baseURL);
    await getPage.checkResponseNegativeStatus(get_user_by_id);
    await getPage.printResponse(get_user_by_id);
});
