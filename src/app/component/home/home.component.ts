import { Component } from '@angular/core';

import { ScriptHomeService } from 'src/app/services/script-home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private _script: ScriptHomeService){
    _script.cargar(["scriptHome"])
  }
  
    

}
