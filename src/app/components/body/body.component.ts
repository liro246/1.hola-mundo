import{ Component} from '@angular/core';

@Component({
    selector:'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent{

    mostrar=true;
    frase:any={
<<<<<<< Updated upstream
        mensaje:"Un gran poder requiere una gran responsabilidad - Julián Cambio",
=======
        mensaje:"Prueba mensaje Lino MK",
>>>>>>> Stashed changes
        autor:"Ben Parker"
    }

    personajes:string[]=['el','ella','ellos'];
}