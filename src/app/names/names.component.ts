import { Component, OnInit } from '@angular/core';
import { Names } from '../names';
import { NamesService } from '../names.service';

@Component({
  selector: 'app-names',
  templateUrl: './names.component.html',
  styleUrls: ['./names.component.scss']
})
export class NamesComponent implements OnInit {

  names:Names[];

  constructor(private namesService:NamesService){}

  ngOnInit(): void {
    this.obtenerNames();
  }

  private obtenerNames(){
    this.namesService.obtenerNombres().subscribe(data =>{
      this.names = data;
    });
  }
}

