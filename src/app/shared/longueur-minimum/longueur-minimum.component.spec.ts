import { ZonesValidator } from "./longueur-minimum.component";
import { AbstractControl } from '@angular/forms';

describe('longueur zone Validator',() => {
    it('une chaine avec 10 espaces est invalide',() => {
        //Prépare une variable pour manipuler le validateur
        let validator = ZonesValidator.longueurMinimum(3);
        let control = { value: '          ' };
        //Faire l'appel du validateur
        let result = validator(control as AbstractControl);
        //Comparer le résultat OBTENU avec le résultat PRÉVU
        expect(result['nbreCaracteresInsuffisants']).toBe(true);
    });

    it('une phrase avec des mots est valide',() => {
        //Prépare une variable pour manipuler le validateur
        let validator = ZonesValidator.longueurMinimum(3);
        let control = { value: 'Vive angular'};
        //Faire l'appel du validateur
        let result = validator(control as AbstractControl);
        //Comparer le résultat OBTENU avec le résultat PRÉVU
        expect(result).toBeNull();
    });
    it('une phrase avec 3 espaces, des mots et ensuite 3 espaces est valide',() => {
        //Prépare une variable pour manipuler le validateur
        let validator = ZonesValidator.longueurMinimum(3);
        let control = { value: '   je le veux   '};
        //Faire l'appel du validateur
        let result = validator(control as AbstractControl);
        //Comparer le résultat OBTENU avec le résultat PRÉVU
        expect(result).toBeNull();
    });
    it('une phrase avec 1 espace et 2 caractères est invalide',() => {
        //Prépare une variable pour manipuler le validateur
        let validator = ZonesValidator.longueurMinimum(3);
        let control = { value: ' xx'};
        //Faire l'appel du validateur
        let result = validator(control as AbstractControl);
        //Comparer le résultat OBTENU avec le résultat PRÉVU
        expect(result['nbreCaracteresInsuffisants']).toBe(true);
    });
    it('une phrase avec 2 espaces et 1 caractère est invalide',() => {
        //Prépare une variable pour manipuler le validateur
        let validator = ZonesValidator.longueurMinimum(3);
        let control = { value: '  x'};
        //Faire l'appel du validateur
        let result = validator(control as AbstractControl);
        //Comparer le résultat OBTENU avec le résultat PRÉVU
        expect(result['nbreCaracteresInsuffisants']).toBe(true);
    });
    it('une phrase avec 3 espaces et 3 caractères est valide',() => {
        //Prépare une variable pour manipuler le validateur
        let validator = ZonesValidator.longueurMinimum(3);
        let control = { value: '   xxx'};
        //Faire l'appel du validateur
        let result = validator(control as AbstractControl);
        //Comparer le résultat OBTENU avec le résultat PRÉVU
        expect(result).toBeNull();
    });
    it('une phrase avec 5 espaces, 5 caractères et 5 espaces est valide',() => {
        //Prépare une variable pour manipuler le validateur
        let validator = ZonesValidator.longueurMinimum(3);
        let control = { value: '     xxxxx     '};
        //Faire l'appel du validateur
        let result = validator(control as AbstractControl);
        //Comparer le résultat OBTENU avec le résultat PRÉVU
        expect(result).toBeNull();
    });
    it('une chaîne nulle est invalide',() => {
        //Prépare une variable pour manipuler le validateur
        let validator = ZonesValidator.longueurMinimum(3);
        let control = { value: null};
        //Faire l'appel du validateur
        let result = validator(control as AbstractControl);
        //Comparer le résultat OBTENU avec le résultat PRÉVU
        expect(result['nbreCaracteresInsuffisants']).toBe(true);
    });
});