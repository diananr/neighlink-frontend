import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  public signupFG: FormGroup;
  public loading: boolean;

  constructor(private fb: FormBuilder, private authService: AuthService,
    private router: Router) { }

  reset(){
    this.loading = false;
    this.signupFG = this.fb.group({
      code: ['',[Validators.required]],
      name: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.email]],
      password: ['',[Validators.required]],
    })
  }

  ngOnInit() {
    this.reset();
  }

  onSignup(){
    if(this.signupFG.valid){
      const signupRequest = {
        code: this.signupFG.value.code,
        name: this.signupFG.value.name,
        lastName: this.signupFG.value.lastName,
        email: this.signupFG.value.email,
        password: this.signupFG.value.password,
      }

      this.loading = true;
      this.authService.signup(signupRequest)
        .subscribe(
          (response: any) => {
            this.router.navigateByUrl('/');
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
