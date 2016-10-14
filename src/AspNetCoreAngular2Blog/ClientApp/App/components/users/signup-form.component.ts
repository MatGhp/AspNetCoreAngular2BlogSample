import {Component} from '@angular/core';
import {IUser,IUserProfile} from '../../models/user.model';

@
Component({
    selector: 'signup-form',
    template: require('./signup-form.component.html'),
    styles: [require('./signup-form.component.css')]


})
export class SignupFormComponent {
    user = <IUser>{};

        onSubmit(form : any){
            console.log(form.value);
        }
}