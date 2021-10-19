import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Gunpla } from '../models/gunplas';
import { GunplaService } from '../services/gunpla.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public gunplas: Array<Gunpla> = [];

  constructor(private router: Router, private gunplaService: GunplaService) {}
  

  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo(){
    this.gunplaService.getGunplas().subscribe((g: Array<Gunpla>) => {
      this.gunplas = g;
    })
  }

  addAnotherGunpla(){
    this.router.navigateByUrl("/form-add");
  }

  deleteGunpla(idMaquetaEliminar: number){
    this.gunplaService.deleteGunpla(idMaquetaEliminar).subscribe(() => {
      this.loadInfo();
    });
  }

}
