import { Component, Input, Output } from "@angular/core";

@Component({
    selector: 'app-user-data',
    templateUrl: './user-data.component.html'
})
export class UserDataComponent{
    @Input() userlist:string[] = [];
    @Input() searchTerm: string ="";
    filteredUser: string[] = [];

    ngOnChanges(){
        this.filteredUser = this.userlist.filter((user:any)=>user.toLowerCase().includes(this.searchTerm.toLowerCase()))
    }
}