console.log('YES!!');

const companies = [
            {
                name: 'Apple',
                profit: 3763
            },
             {
                name: 'IBM',
                profit: 2333
            }
        ];

function getCompanies() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(companies)
        }, 2000)
    });
}


export default {
   getCompanies 
}