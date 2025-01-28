export class Animal {
    id_figurina: number;
    razza_animale: string;
    specie_animale: string;
    area_provenienza: string;
    rischio_estinzione : boolean;
    image : string;
    constructor(id_figurina: number, razza_animale: string, specie_animale: string, area_provenienza: string, rischio_estinzione : boolean, image : string) {
        this.id_figurina = id_figurina;
        this.razza_animale = razza_animale;
        this.specie_animale = specie_animale;
        this.area_provenienza = area_provenienza;
        this.rischio_estinzione = rischio_estinzione;
        this.image = image;
    }        
}