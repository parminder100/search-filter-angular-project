import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'search-filter-project';


  filteredUser: string[] = [];
  @Input() userlist:string[] =[
    "Rahul kumar", "Varun sharma", "Nikhil singh", "Shivansh singh", "Harsh sharma",
    "Pankaj sharma", "Naksh singh", "Harshit sharma", "Anshul singh", "Sandeep tewatia",
    "Lalit tewatia", "Nitesh singh"
  ]
  @Input() searchTerm: string ='';

  onSearchTermChange(searchTerm:any){
    this.searchTerm = searchTerm;
  }
}
