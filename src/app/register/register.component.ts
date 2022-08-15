import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 

  constructor() { }
  visible:boolean=true;
  changetype :boolean=true;
 
  ngOnInit(): void {
  }
  add(f:any){
    let data=f.value
  console.log(data)
  }
  b(b:any){
    
  }

  viewpass(){
    this.visible=!this.visible;
    this.changetype=!this.changetype;
  }
}