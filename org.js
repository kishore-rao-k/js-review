
const { readFileSync } = require('fs');

let orgData = JSON.parse(readFileSync('./organisation.json', 'utf8'));

// Get all employees across all divisions working on projects with a budget exceeding $150,000

function budgetExceeding() {
    let result  = [];
    let div = orgData.organisation.divisions;
    // console.log(div);
    for(let i =0;i<div.length;i++){
            let dep = div[i].departments;
            // console.log(dep);
            for(let j =0;j<dep.length;j++){
                let emp = dep[j].employees;
                // console.log(emp);
                for(let k =0;k<emp.length;k++ ){
                    let proj = emp[k].projects;
                    // console.log(emp[k].name)
                    for(let l=0;l<proj.length;l++){
                        let budget = proj[l].budget;
                        
                        if(budget > 150000 && (!result.includes(emp[k].name))){
                            result.push(emp[k].name);
                        }
                    
                }
            }
        }

    }
    return result;
        
}

function budgetExceedingForEach() {
    let result  = [];
    let div = orgData.organisation.divisions;
 
    div.forEach(division => {
            let dep = division.departments;

            dep.forEach(department =>{
                let emp = department.employees;
              
                emp.forEach(employee =>{
                    let proj = employee.projects;
           
                    proj.forEach(project => {
                        let budget = project.budget;
                        
                        if(budget > 150000 && (!result.includes(employees.name))){
                            result.push(employees.name);
                        }
                    
                });
            });
        });

    });
    return result;
        
}

console.log(budgetExceedingForEach());
