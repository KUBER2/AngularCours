import { Component } from "@angular/core";

@Component({
    selector:'success-alert',
    template: '<h2>Sucess<h2>',
    styles:[`
    h2{
        color:green;
        background-color:grey;
        width:400px;
    }
    `]
})
export class SuccessAlert{

}