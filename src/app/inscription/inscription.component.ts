import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  registrationForm: FormGroup;
  currentStep = 0;

  constructor(private formBuilder: FormBuilder) {
    this.registrationForm = this.formBuilder.group({
      ifu: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      entreprise: ['', Validators.required],
      boitePostale: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirmePassword: ['', Validators.required],
      residence: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.updateStep();
  }

  updateStep(): void {
    const formSteps = document.querySelectorAll('.form-step') as NodeListOf<HTMLElement>;
    const prevButton = document.getElementById('prevButton') as HTMLButtonElement;
    const nextButton = document.getElementById('nextButton') as HTMLButtonElement;
    const submitButton = document.getElementById('submitButton') as HTMLButtonElement;

    formSteps.forEach((step, index) => {
      step.classList.toggle('active', index === this.currentStep);
    });

    prevButton.style.display = this.currentStep === 0 ? 'none' : 'block';
    nextButton.style.display = this.currentStep === formSteps.length - 1 ? 'none' : 'block';
    submitButton.style.display = this.currentStep === formSteps.length - 1 ? 'block' : 'none';
  }

  goToNextStep(): void {
    if (this.currentStep < 2) {
      this.currentStep++;
      this.updateStep();
    }
  }

  goToPreviousStep(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
      this.updateStep();
    }
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      // Logique pour envoyer le formulaire
      console.log('Formulaire soumis avec succès', this.registrationForm.value);
    } else {
      console.log('Formulaire non valide');
    }
  }

  prevStep(): void {
    if (this.currentStep > 0) {
      this.goToPreviousStep();
    }
  }

  nextStep(): void {
    if (this.currentStep < 2) {
      this.goToNextStep();
    }
  }
}
