import { Ietudiant } from "./ietudiant";

export class Etudiant implements Ietudiant {
    _nom: string;
    _prenom: string;
    _rue: string;
    _cp: string;
    _ville: string;
    _couriel: string;
    _genre: string;
    _age: number;
    _idCand: number;
    constructor(
        _nom: string,
        _prenom: string,
        _rue: string,
        _cp: string,
        _ville: string,
        _couriel: string,
        _genre: string,
        _age: number,
        _idCand: number
    ) {
        this._nom = _nom,
            this._prenom = _prenom,
            this._rue = _rue,
            this._cp = _cp,
            this._ville = _ville,
            this._couriel = _couriel,
            this._genre = _genre,
            this._age = _age,
            this._idCand = _idCand
    }
}