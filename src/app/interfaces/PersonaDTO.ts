export class PersonaDTO{
    constructor(user:string,password:string,
        surname: string,company_email:string,personal_email: string,
        city:string, active:boolean,created_Date:Date){
            this.user=user;
            this.password=password;
            this.surname=surname;
            this.company_email=company_email;
            this.personal_email=personal_email;
            this.city=city;
            this.active=active;
            this.created_Date=created_Date;

    }
    user:string;
    password:string;
    surname: string;
    company_email:string;
    personal_email: string;
    city:string;
    
    active:boolean;
    created_Date:Date;
}