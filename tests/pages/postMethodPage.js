const { expect } = require('@playwright/test');
const { Page } = require('./page.js');


const user_name = "Taofiq";
const user_status = "inactive";
const user_gender= "Male";
const bad_email = "wrong.email.com"
const bad_gender = "unknown";
var randomEmail = require('random-email');
const user_email = randomEmail();


exports.PostPage = class PostPage extends Page{   
    constructor(page) {
        super(page);
        this.page = page;
        }

        async POST_request(request,url){
          const response = await super.postrequest(request,url,user_name,user_email,user_status,user_gender);

          return response;
        }

        async badEmail_POST_request(request,url){
          const response = await super.postrequest(request,url,user_name,bad_email,user_status,user_gender);

          return response;
        }

        async badGender_POST_request(request,url){
          const response = await super.postrequest(request,url,user_name,user_email,user_status,bad_gender);

          return response;
        }

        async checkResponseTruthy(response){
          await expect(response.ok()).toBeTruthy();
        }

        async checkResponsePositiveStatus(response){
          await expect(response.status()).toBe(201);
        }

        async checkResponseNegativeStatus(response){
          await expect(response.status()).toBe(422);
        }

        async printResponse(response){
          await console.log(await response.json());
        }

}