import {Component} from '@angular/core';
import {IUser,IUserProfile} from '../../models/user.model';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@
Component({
    selector: 'login-form',
    template: require('./login-form.component.html'),
    styles: [require('./login-form.component.css')]


})
export class LoginFormComponent {
loginForm: FormGroup;
email : FormControl;
password: FormControl;

constructor(builder: FormBuilder) {
    this.email = new FormControl('', [Validators.required, Validators.minLength(5)]);
    this.password = new FormControl('', [
        Validators.required, 
        this.hasPunctuation('&', 'ampersandRequired'),
this.hasPunctuation('!', 'ausrufezeichenRequired')]);

    this.loginForm = builder.group({
        email: this.email,
        password: this.password
    });
}
    login() {
        console.log(this.loginForm.value);
    }
     hasAtSign(input: FormControl) {
        const has = input.value.indexOf('@') >= 0;
        return has ? null : { hasAt:true};
    }

    hasPunctuation (punctuation: string, errorType: string) {
        return (input: FormControl) => { return input.value.indexOf(punctuation) >= 0 ? null : { [errorType]: true } };
    }


}