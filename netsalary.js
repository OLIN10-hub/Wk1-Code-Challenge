var prompt = require('prompt-sync')();

let basic_salary_I = prompt('Enter your basic salary ');
let basic_salary  = parseInt(basic_salary_I);
let benefits_I = prompt('Enter your benefits ');
let benefits = parseInt(benefits_I);
let gross_salary = basic_salary + benefits

function net_salary(gross_salary){
    let paye = 0
    let NHIF= 0
    let NSSF= 0

    //function to calculate paye
    
    if(gross_salary<=24000){
        paye= gross_salary*(0.1)
    } else if(gross_salary<=24001 && gross_salary<=32333){
        paye= gross_salary*(0.25)
    }else if(gross_salary<=32334 && gross_salary<=500000){
        paye= gross_salary*(0.3)}
    else if(gross_salary<=500001&& gross_salary<=800000){
            paye= gross_salary*(0.325)}
    else{paye= gross_salary*(0.35)
    }

//function to calculate NHIF

    if (gross_salary<=5999){
        NHIF=150
    }else if (gross_salary<=6000 && gross_salary<=7999){
        NHIF=300
    } else if (gross_salary<=8000 && gross_salary<=11999){
        NHIF=400}
    else if (gross_salary<=12000 && gross_salary<=14999){
            NHIF=500}
    else if (gross_salary<=15000 && gross_salary<=19999){
            NHIF=600}
    else if (gross_salary<=20000 && gross_salary<=24999){
        NHIF=750}
    else if (gross_salary<=25000 && gross_salary<=29999){
            NHIF=850}
    else if (gross_salary<=30000 && gross_salary<=34999){
        NHIF=900}
    else if (gross_salary<=35000 && gross_salary<=39999){
        NHIF=950}         
    else if (gross_salary<=40000 && gross_salary<=44999){
        NHIF=1000}
        else if (gross_salary<=45000 && gross_salary<=49999){
            NHIF=1100} 
    else if (gross_salary<=50000 && gross_salary<=59999){
        NHIF=1200}
    else if (gross_salary<=60000 && gross_salary<=69999){
        NHIF=1300}    
    else if (gross_salary<=70000 && gross_salary<=79999){
        NHIF=1400} 
    else if (gross_salary<=80000 && gross_salary<=89999){
        NHIF=1500}  
    else if (gross_salary<=90000 && gross_salary<=99999){
        NHIF=1600}  
    else
    {NHIF=1700} 
    //functiion to calculate NSSF

    if (gross_salary<=7000){
        NSSF= gross_salary*0.06
    } else{
        NSSF= 36000*0.06
    }

    //To calculate the net pay
    let deductions= NSSF+NHIF+paye
    let total_net_pay=gross_salary-deductions
        
     
    //create disp(lay net salary output
    const display_output= {
        grossIncome: gross_salary,
        Payee: paye,
        NHIF: NHIF,
        NSSF: NSSF,
        NetIncome: total_net_pay,
    } 
    
    return display_output
}
 console.log(net_salary (gross_salary))

