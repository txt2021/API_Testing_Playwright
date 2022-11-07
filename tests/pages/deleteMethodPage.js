const { expect } = require('@playwright/test');
const { Page } = require('./page.js');



const validID = 6042;
const invalidID = 1;


exports.DeletePage = class DeletePage extends Page{   
    constructor(page) {
        super(page);
        this.page = page;
        }

        async DELETE_request(request,url){
            const response = await super.deleterequest(request,url,validID);
            return response;
          }
          

        async DELETE_request_invalid(request,url){          
            const response = await super.deleterequest(request,url,invalidID);
            return response;
           
        }

        async checkResponseTruthy(response){
          await expect(response.ok()).toBeTruthy();
        }

        async checkResponsePositiveStatus(response){
          await expect(response.status()).toBe(204);
        }

        async checkResponseNegativeStatus(response){
          await expect(response.status()).toBe(404);
        }

        async printResponse(response){
          await console.log(await response.json());
        }

}