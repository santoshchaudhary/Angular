import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-parent-d',
  templateUrl: './parent-d.component.html',
  styleUrls: ['./parent-d.component.scss']
})
export class ParentDComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
  }

  greetStudent() {
    this._interactionService.sendMessage('Good Morning!')
  }

  appreciateStudent() {
    this._interactionService.sendMessage('Well Done!')
  }
}
