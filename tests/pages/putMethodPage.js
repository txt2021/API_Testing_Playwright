const { expect } = require('@playwright/test');
const { Page } = require('./page.js');


const validID = 5727;
const secondvalidID = 5803;
const invalidID = 1;
const userName = "Tester";
const invalidUserEmaile = "asadd";


exports.PutPage = class PutPage extends Page{   
    constructor(page) {
        super(page);
        this.page = page;
        }

        async PUT_request(request,url){
          const response = await super.putrequest(request,url,validID,userName);
          return response;
        }

        async PUT_request_withInvalidID(request,url){
            const response = await super.putrequest(request,url,invalidID,userName);
            return response;
          }

        async PUT_request_withInvalidEmail(request,url){
            const response = await super.putrequestInvalid(request,url,secondvalidID,invalidUserEmaile);
            return response;
          }

        async checkResponseTruthy(response){
          await expect(response.ok()).toBeTruthy();
        }

        async checkResponsePositiveStatus(response){
          await expect(response.status()).toBe(200);
        }

        async checkResponseNegativeStatus(response){
          await expect(response.status()).toBe(404);
        }

        async checkResponseNegativeStatus422(response){
          await expect(response.status()).toBe(422);
        }

        async printResponse(response){
          await console.log(await response.json());
        }

}