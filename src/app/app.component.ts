    import { Component, Input } from '@angular/core';
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

    //handling evnet 

    
      // handleEvent(event:any){

      //     console.log("Event Handled", event);
      //      console.log("Event Handled", event.target.name);

      //   }


      //get and set input value
      name='';
      getValue(event:any){
        console.log("Input Value", event.target.value);
        this.name=event.target.value;
      }
    

      displyName="";
      showName(){
        this.displyName=this.name;
      }

      setName(){
        this.name="Angular";
      }






    }