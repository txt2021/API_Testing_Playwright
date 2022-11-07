const { expect } = require('@playwright/test');


class Page {
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
      this.page = page;
        }
  
   

    async postrequest(request,url,username,useremail,userstatus,usergender){
      const response = await request.post(`${url}public/v2/users`, {
        data: {
          name: username,
          email: useremail,
          status: userstatus,
          gender: usergender,
        },
      })
      return response;
    }

    async getrequest(request,url){
      const response = await request.get(`${url}public/v2/users/`);
      return response;
    }

    async getUserByID(request,url,user_id){
      const response = await request.get(`${url}public/v2/users/`, {
        params: {
          id: user_id,
        },
      });
      return response;
    }

    async putrequest(request,url,userID,userName){
      const response = await request.put(`${url}public/v2/users/${userID}`, {
        data: {
          name: userName,
        },
      });
      return response;
    }

    async putrequestInvalid(request,url,userID,userEmail){
      const response = await request.put(`${url}public/v2/users/${userID}`, {
        data: {
          email: userEmail,
        },
      });
      return response;
    }

    async deleterequest(request,url,userID){
      const response = await request.delete(`${url}public/v2/users/${userID}`);
      return response;
    }
    

   
  
  
  }
module.exports = { Page };