import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  mesaj= new FormGroup({
    nume: new FormControl(''),
    prenume: new FormControl(''),
    email: new FormControl(''),
    mesajTxt: new FormControl(''),
  });

  maps = 'assets/Imagini/maps.jpg';
  constructor() { }
  onSubmit(){
    //Salveaza datele in baza de date

    //trimite un mesaj - Va multumim pentru mesaj

    //Sterge valorile mesajului si lasa inputurile goale.
  }
  ngOnInit(): void {
  }

}
