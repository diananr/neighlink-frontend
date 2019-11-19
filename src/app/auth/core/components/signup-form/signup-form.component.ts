import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { CondominiumService } from 'src/app/core/services/condominium.service';
import { Condominium } from 'src/app/core/models/condominium.model';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public loading: boolean;
  public signupFG: FormGroup;
  public condominiums: Condominium[];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private condominiumService: CondominiumService,
    private router: Router
  ) { }

  reset(){
    this.loading = false;
    this.signupFG = this.fb.group({
      condominiumId: ['',[Validators.required]],
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.email]],
      password: ['',[Validators.required]],
      role: [0, ,[Validators.required]],
    });
    this.condominiums = [];
  }

  getCondominiums(){
    this.condominiumService.getCondominiums().subscribe(
      (response: any)=>{
        this.condominiums = response;
      },
      (error: any)=>{
        console.log('error', error);
      }
    );
  }

  ngOnInit() {
    this.reset();
    this.getCondominiums();
  }

  onSignup(){
    if(this.signupFG.valid){
      this.loading = true;
      const signupRequest = Object.assign({},this.signupFG.value);

      this.authService.signup(signupRequest)
        .subscribe(
          (response: any) => {
            if (response) {
              this.router.navigateByUrl('/');
            }
            this.loading = false;
          },
          (error: any) => {
            this.loading = false;
          }
        );
    } else{
     console.log('Verifica los campos e intenta nuevamente', 'Formulario inválido');
    }
  }

}
