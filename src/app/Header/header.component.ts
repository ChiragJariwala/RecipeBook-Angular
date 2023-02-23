import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent {
  @Output() featcherSelected = new EventEmitter<string>();


  appTitle: string = 'Recipe Book';


  onSelect(featcher : string){
    this.featcherSelected.emit(featcher);
  }

}
