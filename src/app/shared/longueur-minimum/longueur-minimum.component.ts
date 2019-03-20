import { ValidatorFn, AbstractControl } from '@angular/forms';

export class ZonesValidator {
    static longueurMinimum(): ValidatorFn {
        //Sous ANGULAR dans les validateurs pour indiquer un succès retourner NULL autrement retourner une clé-valeur JSON
        return (longueur: AbstractControl): {[key:string]:boolean}|null => {
            if(longueur.value.toString().trim().length>2){
                return null;
            }
            return { 'nbreCaracteresInsuffisants': true };
        }
    }
}