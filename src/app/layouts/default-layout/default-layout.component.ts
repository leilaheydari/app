import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { NavigationComponent } from '../../shared/navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GenericComponent } from '../../shared/generic/generic.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    GenericComponent,
    NavigationComponent,
    CommonModule,
    RouterOutlet
  ],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

}
