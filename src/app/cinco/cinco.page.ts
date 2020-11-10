import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cinco',
  templateUrl: './cinco.page.html',
  styleUrls: ['./cinco.page.scss'],
})
export class CincoPage implements OnInit {
  cartel:string;
  //Para recoger la informacion que se pasa como parametro del routing
  //usamos la clase ActivatedRoute
  constructor(public act:ActivatedRoute) {
    //La informacion debe llegar desde html (del home) que es desde
    //donde se envia, al ts de aqui.
    this.cartel=this.act.snapshot.paramMap.get('cartelito');
   }

  ngOnInit() {
  }

}
