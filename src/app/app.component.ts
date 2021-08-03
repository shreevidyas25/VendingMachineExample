import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  snackList: any = [
    {
      name: 'Pepsi',
      cost: 40.00
    },
    {
      name: 'Coke',
      cost: 50.00
    },
    {
      name: 'sprite',
      cost: 35.00
    },
    {
      name: 'Snickers',
      cost: 30.00
    },
    {
      name: '5 star',
      cost: 10.00
    },
    {
      name: 'Lays',
      cost: 20.00
    }
  ]

  
  amount!: number
  sum: number = 0
  tens: number = 0
  fives: number = 0
  twos: number = 0
  ones: number = 0
  display: boolean = false
  msg: boolean = false
  disable: boolean = true
  disableUndo: boolean = true
  message: string = ''
  cost: any
  item: string = ''
  items: Array<string> = []

  subtract(cost: number, name: string) {
    this.display = false
    this.disableUndo = false
    this.cost = cost
    
    if(this.sum>=cost) {
      this.sum = this.sum - cost
      this.msg=false
      this.items.push(name)
    } else {
      this.msg=true
      this.message = 'Insufficient balance'
    }
    

  }

  reset(){
    this.sum=0
    this.display = false
    this.disableUndo = true
    this.message = ''
    this.amount = 0
    this.items = []
  }

  float2int(value: number){
    return value | 0
  }

  show(){
    let n = this.sum
   
      this.tens = this.float2int(n / 10)
      n=n%10
      this.fives = this.float2int(n / 5)
      n=n%5
      this.twos = this.float2int(n / 2)
      n=n%2
      this.ones = n

    this.display = true
    this.msg = false
  


  }
  checkinput($event: KeyboardEvent) {
    if(this.amount==0 || this.amount==undefined) {
      this.disable = true
      this.disableUndo = true
    }
    else {
      this.disable = false
    }
    this.display = false
    this.message = ''
  this.sum = parseInt((<HTMLInputElement>event?.target).value)
  }

  undo() {
    if(this.msg==false){
      this.sum = this.sum + this.cost
      this.items.splice(-1)
    }
    
    this.disableUndo = true
    this.msg = false
  }

}
