const { expect } = require('@playwright/test');
const { Page } = require('./page.js');



const validID = 4433;
const invalidID = 1;


exports.GetPage = class GetPage extends Page{   
    constructor(page) {
        super(page);
        this.page = page;
        }

        async GET_request(request,url){
          const response = await super.getrequest(request,url);
          return response;
        }

        async GET_User(request,url){
            const response = await super.getUserByID(request,url,validID);
            return response;
          }

        async GET_UserWirhWrongID(request,url){
            const response = await super.getUserByID(request,url,invalidID);
            return response;
          }


        async checkResponseTruthy(response){
          await expect(response.ok()).toBeTruthy();
        }

        async checkResponsePositiveStatus(response){
          await expect(response.status()).toBe(200);
        }

        async checkResponseNegativeStatus(response){
          await expect(response.status()).toBe(200);
        }

        async printResponse(response){
          await console.log(await response.json());
        }

}