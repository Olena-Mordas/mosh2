import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators{
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null{
        if ((control.value as String).indexOf(' ')>=0){
            return {cannotContainSpace: true}
        }
        return null;
    }

    static shouldbeUnquie(control: AbstractControl): Promise<ValidationErrors | null>{
        return new Promise ((resolve, reject)=>{
            setTimeout(()=>{
                if ((control.value as String)==='alyona'){
                    resolve({shouldbeUnquie: true})
                }
                else resolve (null);
            },2000);
        })
        
        
    }
}