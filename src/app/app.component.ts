  import { Component } from '@angular/core';
  import { RouterOutlet } from '@angular/router';
  import { LoginComponent } from './login/login.component';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet,LoginComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
  })
  export class AppComponent {
    //properties
    title = 'blast';
    name = 'Angular';

    // handleClick(){
    //   this.otherFunctin();
    //   alert("Button Clicked");
    // }

    // otherFunctin(){
    //   console.log("Other Function Called");
    // }
      
    count= 0;
    
    increment(){
      this.count++;
    }

    decrement(){
      this.count--;
    }

    reset(){
      this.count=0;
    }
  }