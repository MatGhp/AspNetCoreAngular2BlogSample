import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignupFormComponent } from './signup-form.component';
import { LoginFormComponent } from './login-form.component';
import {UserService} from './user.service';



@NgModule({
    declarations: [
        SignupFormComponent,
        LoginFormComponent 
    ],
    providers:[UserService],
    imports: [CommonModule],
    exports:[UserModule]
})
export class UserModule {
}

