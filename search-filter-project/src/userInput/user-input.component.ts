import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-input.component.css']
})
export class UserInputComponent{
    @Output() searchTermChange = new EventEmitter<string>();
    searchTerm: string = '';
    onSearch(event:Event){
        this.searchTerm = (event.target as HTMLInputElement).value;
        this.searchTermChange.emit(this.searchTerm);
    }
}