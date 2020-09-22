import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { Condominium } from 'src/app/core/models/condominium.model';
import { CondominiumService } from 'src/app/core/services/condominium.service';
import { USER_ROLE } from 'src/app/core/constants/global.constants';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loading: boolean;
  public loginFG: FormGroup;
  public condominiums: Condominium[];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private condominiumService: CondominiumService,
    private router: Router
  ){
  }

  reset(){
    this.loading = false;
    this.loginFG = this.fb.group({
      condominiumId: [null,[Validators.required]],
      email: ['',[Validators.email]],
      password: ['',[Validators.required]],
    });
    this.condominiums = [
      {id: 1, name: 'Condominio A', address: '', photo: '', status: true, url: ''},
      {id: 2, name: 'Condominio B', address: '', photo: '', status: true, url: ''},
    ]
  }

  getCondominiums(){
    this.condominiumService.getCondominiums().subscribe(
      (response: any)=>{
        this.condominiums = response;
      },
      (error: any)=>{
        console.log(error);
      }
    );
  }

  ngOnInit() {
    this.reset();
    this.getCondominiums();
  }

  onLogin(){
    if(this.loginFG.valid){
      this.loading = true;
      const loginRequest = Object.assign({},this.loginFG.value);

      this.authService.login(loginRequest)
        .subscribe(
          (response: any) => {
            localStorage.setItem('userLogged', JSON.stringify(response));
            if (response.role == USER_ROLE.ADMINISTRATOR) this.router.navigateByUrl('/users');
            if (response.role == USER_ROLE.OWNER) this.router.navigateByUrl('/payments');
            this.loading = false;
          },
          (error: any) => {
            if(loginRequest.condominiumId == 1){
              localStorage.setItem('userLogged', JSON.stringify({id:1, name: 'Lorena', email: 'lorena@gmail.com', role: 0}));
              this.router.navigateByUrl('/users');
            } else {
              localStorage.setItem('userLogged', JSON.stringify({id:1, name: 'Piero', email: 'piero@gmail.com', role: 1}));
              this.router.navigateByUrl('/payments');
            }
            this.loading = false;
          }
        );
    } else{
     console.log('Verifica los campos e intenta nuevamente', 'Formulario inválido');
    }
  }

}
