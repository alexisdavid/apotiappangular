import { Component} from '@angular/core';

// importamos el servicio para poder usarlo
import { SpotifyService } from '../../services/spotify-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
 cargado:boolean;
 artist: any[]= [];
 error:boolean;
 
  constructor(private spotify:SpotifyService) { 
    
  }
  

  // recibimos el termino de busqueda en la funcion
 search(termino: string){
  if(termino.length > 0){
    this.cargado = true;
    this.spotify.getArtists(termino).subscribe((data:any) => {
        this.artist=data
        this.cargado=false;
      })
  } else{
    this.artist = null;
  }



 }
}
