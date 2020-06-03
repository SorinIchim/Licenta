import { Component, OnInit } from '@angular/core';
import { Produs } from '../tarife';
import { TarifeService } from '../tarife.service';

@Component({
  selector: 'app-tarife-bar-uv',
  templateUrl: './tarife-bar-uv.component.html',
  styleUrls: ['./tarife-bar-uv.component.css']
})
export class TarifeBarUVComponent implements OnInit {
  produse: Produs[];

  constructor(private tarifeService: TarifeService) { }

  ngOnInit(): void {
    this.getProduse();
  }

  getProduse(): void {
    this.tarifeService.getProduse().subscribe(produse => this.produse = produse);
  }

}
