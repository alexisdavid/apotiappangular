import { Component,  Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styles: []
})
export class TarjetaComponent  {

  @Input() items: any[] = [];
  constructor( private router:Router) { }


  
verArtista(id:any){
  // console.log(id);
  
  let artistaId;
  if(id.type === 'artist'){
    artistaId = id.id;
  }else{
    artistaId = id.artists[0].id;
  }

 this.router.navigate(['/artist',artistaId])
  






}
 

}
