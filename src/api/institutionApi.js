import axios from 'axios';

class InstitutionApi{
  static getAllInistitutions(){
    return axios.get('https://api.myjson.com/bins/17il09').then( response =>{
      let allInstitutions = Object.assign([], response.data).sort((a, b) =>{
        return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
      });
      return allInstitutions;
    });
  }
}

export default InstitutionApi;