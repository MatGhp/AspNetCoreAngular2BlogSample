import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SignupFormComponent } from './signup-form.component';
import { LoginFormComponent } from './login-form.component';
import {UserService} from './user.service';

const ROUTES = [
            { path: 'signup', component: SignupFormComponent },
            { path: 'login', component: LoginFormComponent }];
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        SignupFormComponent,
        LoginFormComponent
    ],
    providers: [UserService],

    exports: [SignupFormComponent,LoginFormComponent]
})
export class UserModule {
 static forRoot(): ModuleWithProviders {
    return {
      ngModule: UserModule,
      providers: [UserService]
    }
  }
}
