import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private _httpService: HttpService) { } //( _ <-- this belongs only to this class)
  cakeForm:object;
  ratingForm:object;
  ngOnInit(){
    this.getCakes();
    this.cakeForm = { baker:"", url:""}
    this.ratingForm = { stars:Number, comment:""}
  }
  cakes = [];
  more: any;
  
  getCakes() {
    let observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log(data);  
      this.cakes = data['cakes'];
      // let tasks = data['tasks'];
      // for(let thing in tasks) {
      //     this.tasks.push(tasks[thing]);
      // }
      console.log(this.cakes)
  })
}
// showCake(cake){
//   this.more = cake;
//   let observable = this._httpService.show(cake);
//   observable.subscribe(data =>{
//     this.more = data['cake'];
//   })
// }
  create(){
    console.log(this.cakeForm)
    let observable = this._httpService.create(this.cakeForm);
    observable.subscribe((data:any) => {
      //console.log(data.task)
      this.cakeForm ={ baker: "", url: "" }
      // this.getTasks()
    })
  }
  rate(){
    console.log(this.ratingForm)
    let observable = this._httpService.addRating(this.ratingForm);
    observable.subscribe((data:any) =>{
      this.ratingForm ={stars:Number, comment:""}
    })
  }
}