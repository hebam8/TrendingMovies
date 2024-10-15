import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService } from '../carts.service';




@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  constructor(private _CartService:CartService) { }

  ngOnInit(): void {
  }
  cartID:any=localStorage.getItem('cartID')
//64e8bfb9df808200347f3458
shippingAddress:FormGroup=new FormGroup({
  details: new FormControl(null),
  phone: new FormControl(null),
  city: new FormControl(null),

})

navigatOut(url:string){
window.location.href=url

}
handelForm(shippingAddress:FormGroup,cartID:any){
  console.log(shippingAddress.value);
this._CartService.onlinePayment(shippingAddress.value,cartID).subscribe({
  next:(response:any)=>{ this.navigatOut(response.session.url)
  console.log(response.session.url)}
  ,
  error:(err)=> console.log(err)

})
}


}


