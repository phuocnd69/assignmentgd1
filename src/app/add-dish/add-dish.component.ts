import { Component, OnInit } from '@angular/core';
import { Dish } from '../Dish';
import { DishService } from '../dish.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss']
})
export class AddDishComponent implements OnInit {
    dish: Dish = new Dish();
  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
addDish(){
  this.dishService.addDish(this.dish).subscribe(data => 
    this.router.navigateByUrl('/admin/dish-manager'));
}
}
