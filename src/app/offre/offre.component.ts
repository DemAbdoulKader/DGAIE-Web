import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-offre',
    templateUrl: './offre.component.html',
    styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {
    rentalOfferForm: FormGroup;

    constructor(private fb: FormBuilder) {
        this.rentalOfferForm = this.fb.group({
            // Définissez ici vos champs et validations
        });
    }

    ngOnInit(): void {
        // Initialisation des données si nécessaire
    }

    onSubmit() {
        // Gestion de la soumission du formulaire
        if (this.rentalOfferForm.valid) {
            // Traitez ici la soumission du formulaire
        }
    }
}
