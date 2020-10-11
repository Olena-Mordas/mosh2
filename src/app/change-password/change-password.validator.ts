import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';


export class PasswordValidators {
    static matchOld (c:FormControl): Promise<ValidationErrors| null>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if((c.value as String)!="111"){
                    resolve({matchOld: true});
                }
                else {
                    resolve(null);
                }
            }, 2000);
        })
    }

    static confirmPass (c:FormGroup): Promise<ValidationErrors| null>{
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                if((c.get('newPass').value as String)!=(c.get('confirmPass').value as String)){
                    resolve({confirmPass: true});
                }
                else {
                    resolve(null);
                }
            }, 2000);
        })
    }
}