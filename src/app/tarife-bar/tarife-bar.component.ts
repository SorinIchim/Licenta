import { Component, OnInit, Input } from '@angular/core';
import { Produs } from '../tarife';
import { TarifeService } from '../tarife.service';

@Component({
  selector: 'app-tarife-bar',
  templateUrl: './tarife-bar.component.html',
  styleUrls: ['./tarife-bar.component.css']
})
export class TarifeBarComponent implements OnInit {
  @Input() produs: Produs;
  produse: Produs[];
  searchText;

  constructor(private tarifeService: TarifeService) { }

  ngOnInit(): void {
    this.getProduse();
  }

  getProduse(): void {
    this.tarifeService.getProduse().subscribe(produse => this.produse = produse);
  }

  save(): void {
    this.tarifeService.updateProdus(this.produs).subscribe();
  }

  add(denumire: string, pret: Number): void {
    denumire = denumire.trim();
    pret = pret;
    if (!denumire) { return; }
    this.tarifeService.addProdus({denumire, pret} as Produs).subscribe(produs => {
      this.produse.push(produs);
    })
  }

  delete(produs: Produs): void {
    this.produse = this.produse.filter(p => p !== produs);
    this.tarifeService.stergereProdus(produs).subscribe();
  }

}
