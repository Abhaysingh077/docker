import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddmenuService } from '../addmenu.service';
import { FooditemService } from '../home/fooditem.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
})
export class AdmindashboardComponent implements OnInit {
  constructor(
    private _addfood: AddmenuService,
    private _getfood: FooditemService
  ) {}
  showFiller = false;
  addFood: any;
  getfooddata: any;
  ngOnInit(): void {
    this.getFood();
    this.addFood = new FormGroup({
      id: new FormControl(''),
      item: new FormControl(''),
      image: new FormControl(''),
      price: new FormControl(''),
      category: new FormControl(''),
    });
  }
  // Accept only alphabet
  alphaInput(e: any) {
    var regex = new RegExp('^[a-zA-Z]+$');
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      return true;
    }

    e.preventDefault();
    return false;
  }

  onPaste(e: any) {
    e.preventDefault();
    return false;
  }
  // Accept only alphabet

  // accept only positive integer number expect 0
  numberInput(e: any) {
    var regex = new RegExp('^[1-9]+$');
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      return true;
    }

    e.preventDefault();
    return false;
  }

  onPaste1(e: any) {
    e.preventDefault();
    return false;
  }
  // accept only positive integer number expect 0

  getFood() {
    this._getfood.getFooddata().subscribe((data) => {
      this.getfooddata = data;
    });
  }

  addMenu() {
    console.log(this.addFood.value);
    this._addfood.addfood(this.addFood.value).subscribe((data) => {
      alert('Registratered Succefully');
      this.addFood.reset();
    });
  }

  deleteFood(id: number) {
    this._addfood.deleteFood(id).subscribe(() => {
      this.getFood();
    });
  }
}
