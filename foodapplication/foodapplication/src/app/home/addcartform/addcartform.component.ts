import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddttocartService } from 'src/app/addcart/addttocart.service';
import { AddmenuService } from 'src/app/addmenu.service';

@Component({
  selector: 'app-addcartform',
  templateUrl: './addcartform.component.html',
  styleUrls: ['./addcartform.component.css'],
})
export class AddcartformComponent implements OnInit {
  constructor(
    private serv: AddmenuService,
    private addtocart: AddttocartService,private _dialog:MatDialog
  ) {}
  name: string='';
  addcartform: any;

  ngOnInit(): void {
    this.name = this.serv.info;
    this.addcartform = new FormGroup({
      name: new FormControl('',   Validators.maxLength(6)),
      item: new FormControl(this.name),
      quantity: new FormControl('',Validators.required),
    });
  }


  get names() {
    return this.addcartform.get('name')
  }
  
  postdatatocart() {
    this.addtocart
      .addtocart(this.addcartform.value)
      .subscribe((data) => console.log(data));

    alert('Added Successfully');
    this.addcartform.reset();
    this._dialog.closeAll();
  }

// Accept only alphabet value
  alphaInput(e:any) {  
    var regex = new RegExp("^[a-zA-Z]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
        
    }
   
    e.preventDefault();
    return false;
  }

  onPaste(e:any) {
    e.preventDefault();
    return false;
  }

// Accept only alphabet value

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

}
