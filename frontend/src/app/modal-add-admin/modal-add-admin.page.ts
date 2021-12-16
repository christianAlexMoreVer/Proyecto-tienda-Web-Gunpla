import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-add-admin',
  templateUrl: './modal-add-admin.page.html',
  styleUrls: ['./modal-add-admin.page.scss'],
})
export class ModalAddAdminPage implements OnInit {

  private nombreUser: any;
  private apellidos: any;
  private contrasena: any;
  private correoElectronico: any;

  constructor(private modalController: ModalController, private router: Router) { }

  ngOnInit() {
  }

  createAdmin(){
    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        query: `
                mutation{
                  createAdmin(nombre: \"`+this.nombreUser+`\", apellidos: \"`+this.apellidos+`\", contrasena: \"`+this.contrasena+`\", correoElectronico: \"`+this.correoElectronico+`\", imgUser: \"Default.png\", admin: 1){
                  nombre
            }
          }`
      })
    })
      .then(res => res.json())
  }

}
