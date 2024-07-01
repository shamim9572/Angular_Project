import { Component } from '@angular/core';
import { ProductCardComponent } from '../../component/product-card/product-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // type = 5;
  type = [1,2,3,4,5,6];

}
