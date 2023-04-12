class Job {
    constructor(name, industry, requiresDegree, field, payRate){
        this.name = name
        this.industry = industry
        this.requiresDegree = requiresDegree
        this.field = field
        this.payRate = payRate
    }
    getName(){
        return `${this.name} is the name.`;
    }
    getFieldAndIndustry(){
        return `The ${this.field} and ${this.industry} is the field and industry type.`;
    }
    getRequiresDegree(){
        return `${this.requiresDegree} is the required degrees or certifications.`;
    }
    getPayRate(){
        return `The pay-rate is ${this.payRate}.`;
    }
}
class CustomerServiceJobs extends Job {
    constructor(name, industry, requiresDegree, field, payRate, location){
        super(name, industry, requiresDegree, field, payRate);
        this.location = location
    }
    getLocation(){
        return `${this.location} is the location for this job.`;
    }
}
const RetailJobs = new Job ("Rue 21", "Shopping Store", "No Degrees Required", "Retail", "$12 an Hour");
console.log(RetailJobs.getName());
console.log(RetailJobs.getPayRate());
const CarSalesJobs = new Job ("KiaDealership", "Sales", "No Degrees Required", "Car Sales", "$14 an Hour");
console.log(CarSalesJobs.getName());
console.log(CarSalesJobs.getFieldAndIndustry());
const MedicalJobs = new Job ("EMS-Cross Medical", "Emerency Medical", "EMT Certification", "Licensed EMT", "$25 an Hour");
console.log(MedicalJobs.getName());
console.log(MedicalJobs.getRequiresDegree());

const Barista = new CustomerServiceJobs ("Starbucks", "Coffee making", "No Degrees Required", "A Barista", "$10 an Hour", "Austin, TX");
console.log(Barista.getName());
console.log(Barista.getFieldAndIndustry());
console.log(Barista.getLocation());