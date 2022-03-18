import { Component, OnInit } from '@angular/core';
import { InteractionService } from 'src/app/interaction.service';

@Component({
  selector: 'app-child-d',
  templateUrl: './child-d.component.html',
  styleUrls: ['./child-d.component.scss']
})
export class ChildDComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {
    this._interactionService.teacherMessage$.subscribe(
      message => {
        if(message === 'Good Morning!') {
          alert('Good morning teacher')
        } else if(message === 'Well Done!') {
          alert('Thank you teacher!')
        }
      }
    )
  }



}
