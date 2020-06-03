import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jocuri',
  templateUrl: './jocuri.component.html',
  styleUrls: ['./jocuri.component.css']
})
export class JocuriComponent implements OnInit {
  biliard1 = 'assets/Imagini/biliard1.jpg';
  biliard2 = 'assets/Imagini/biliard2.jpg';
  bowling1 = 'assets/Imagini/bowling1.jpg';
  bowling2 = 'assets/Imagini/bowling2.jpg';
  darts1 = 'assets/Imagini/darts1.jpg';
  darts2 = 'assets/Imagini/darts2.jpg';
  
  constructor() { }

  ngOnInit(): void {
  }

}
