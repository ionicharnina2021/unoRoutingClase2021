import { Persona } from "./../persona";
import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  miCartel = "vendo fiat panda seminuevo";
  //esto no se puede porque solo permite string
  // miCartel=6;
  persona: Persona;
  constructor() {
    this.persona = new Persona("jose luis", 17);
  }
}
