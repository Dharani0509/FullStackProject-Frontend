export class Employee {
    
        // id: number;
        // firstName: string;
        // lastName: string;
        // emailId: string;
    
        // constructor(id: number, firstName: string, lastName: string, emailId: string) {
        //     this.id = id;
        //     this.firstName = firstName;
        //     this.lastName = lastName;
        //     this.emailId = emailId;
        // }
        constructor(
            public id: number = 0,
            public firstName: string = '',
            public lastName: string = '',
            public emailId: string = ''
          ) {}
    }
    