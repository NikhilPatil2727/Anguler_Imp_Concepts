import {
  Component,
  computed,
  effect,
  Input,
  signal,
  WritableSignal,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, FormsModule, NgIf, NgFor,RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  //properties
  // title = 'blast';
  // name = 'Angular';

  // handleClick(){
  //   this.otherFunctin();
  //   alert("Button Clicked");
  // }

  // otherFunctin(){
  //   console.log("Other Function Called");
  // }

  //   count= 0;

  //   increment(){
  //     this.count++;
  //   }

  //   decrement(){
  //     this.count--;
  //   }

  //   reset(){
  //     this.count=0;
  //   }
  //-------------------------------------------------------------------------

  //handling evnet

  // handleEvent(event:any){

  //     console.log("Event Handled", event);
  //      console.log("Event Handled", event.target.name);

  //   }
  //-------------------------------------------------------------------------

  //get and set input value
  // name='';
  // getValue(event:any){
  //   console.log("Input Value", event.target.value);
  //   this.name=event.target.value;
  // }

  // displyName="";
  // showName(){
  //   this.displyName=this.name;
  // }

  // setName(){
  //   this.name="Angular";
  // }
  //-------------------------------------------------------------------------

  // if else flow

  // isDispaly=true;

  // for loop

  // users = ['John', 'Jane', 'Doe', 'Smith'];

  // students = [
  //   { name: 'John', age: 20 },
  //   { name: 'Jane', age: 22 },
  //   { name: 'Doe', age: 21 },
  //   { name: 'Smith', age: 23 },
  // ];
  //-------------------------------------------------------------------------

  //singal is like useState in react but in angular we have signal to manage the state
  // count = signal(0);

  // Writable singnal and computed signal

  // count: WritableSignal<number> = signal(0);

  // Computed Signal
  // doubleCount = computed(() => this.count() * 2);

  // increase() {
  //   this.count.set(this.count() + 1);
  // }

  // effect in anguler

  // constructor() {
  //   effect(() => {
  //     console.log('Count Changed:', this.count());
  //   });
  // }
  // //-------------------------------------------------------------------------
  //    Two way data binding

  name = '';

  //-------------------------------------------------------------------------

  //Directives in Angular

  show = true;

  //ngFor directive

  // fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

  // students = [
  //   {
  //     id: 1,
  //     name: 'Nikhil',
  //     course: 'React',
  //   },
  //   {
  //     id: 2,
  //     name: 'Rahul',
  //     course: 'Angular',
  //   },
  //   {
  //     id: 3,
  //     name: 'Priya',
  //     course: 'Node.js',
  //   },
  // ];



}
