import { Component } from '@angular/core';
import { ButtonComponent } from '../../generics/button/button.component';

@Component({
  selector: 'app-generic',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './generic.component.html',
  styleUrl: './generic.component.scss'
})
export class GenericComponent {

}
