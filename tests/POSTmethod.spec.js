
const { test, expect } = require('@playwright/test');
const { PostPage } = require('./pages/postMethodPage');

test("Should create a new user", async ({ request, baseURL }) => {
  const postPage = new PostPage(); 
  const post_request = await postPage.POST_request(request,baseURL);
  await postPage.checkResponseTruthy(post_request);
  await postPage.checkResponsePositiveStatus(post_request);
  await postPage.printResponse(post_request);

});

test("Should not create a new user with invalid email", async ({ request, baseURL }) => {
  const postPage = new PostPage(); 
  const post_request = await postPage.badEmail_POST_request(request,baseURL);
  await postPage.checkResponseNegativeStatus(post_request);
  await postPage.printResponse(post_request);
});

test("Should not create a new user with invalid gender", async ({ request, baseURL }) => {
  const postPage = new PostPage(); 
  const post_request = await postPage.badGender_POST_request(request,baseURL);
  await postPage.checkResponseNegativeStatus(post_request);
  await postPage.printResponse(post_request);
});
