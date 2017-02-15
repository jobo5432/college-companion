import delay from './delay';
import _ from 'underscore';

const institutions = [
    {id: 1, subdomain: 'faber', name: 'Faber College'},
    {id: 2, subdomain: 'adams', name: 'Adams College'},
    {id: 3, subdomain: 'sclsu', name: 'South Central Louisiana State University'},
    {id: 4, subdomain: 'esu', name: 'Eastern State University'},
    {id: 5, subdomain: 'harris', name: 'Harris University'},
    {id: 6, subdomain: 'columbus', name: 'Columbus University'},
    {id: 7, subdomain: 'greendale', name: 'Greendale Community College'},
    {id: 8, subdomain: 'ula', name: 'University of Los Angeles'},
    {id: 9, subdomain: 'harrison', name: 'Harrison University'},
    {id: 10, subdomain: 'pcu', name: 'Port Chester University'},
    {id: 11, subdomain: 'hillman', name: 'Hillman College'}
];


class InstitutionApi{
    static getAllInistitutions(){
        return new Promise((resolve, reject) =>{
            setTimeout(() =>{
                let allInstitutions = Object.assign([], institutions).sort((a, b) =>{
                    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
                });

                resolve(allInstitutions);
            }, delay);
        });
    }

  static getSingleInstitution(id){
    return new Promise((resolve, reject) =>{
      setTimeout(() =>{
        let institution = _.find(institutions, (institution) =>{
          if(Number.isInteger(id)){
            return institution.id === id;
          }

          return institution.subdomain === id;
        });
        resolve(Object.assign({}, institution));
      }, delay);
    });
  }
}

export default InstitutionApi;
