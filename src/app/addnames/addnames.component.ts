import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Names } from '../names';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-addnames',
  templateUrl: './addnames.component.html',
  styleUrls: ['./addnames.component.scss']
})
export class AddnamesComponent implements OnInit {
  nombre :Names = new Names();
  names: Names;
  constructor(private namesService:NamesService,private router:Router){

  }

  ngOnInit(): void {
  }

  añadirname() {
    this.namesService.addName(this.nombre).subscribe({
      next: data => {
        console.log(data);
      },
      error: error => {
        console.log(error);
      }
    });
  }
  iraddname(){
    this.router.navigate([`/nombres`])
  }
  
  
  onSubmit(){
    this.añadirname();
  }
}
