import { Persona } from './../persona';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seis',
  templateUrl: './seis.page.html',
  styleUrls: ['./seis.page.scss'],
})
export class SeisPage implements OnInit {
  persona:Persona;
  constructor(public act:ActivatedRoute) { 
    this.persona=JSON.parse(this.act.snapshot.paramMap.get('personaje'));
  }

  ngOnInit() {
  }

}
