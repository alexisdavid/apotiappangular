import { Component} from '@angular/core';

// importamos el servicio para poder usarlo
import { SpotifyService } from '../../services/spotify-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  {
 artist: any[]= [];
  constructor(private spotify:SpotifyService) { }


  // recibimos el termino de busqueda en la funcion
 search(termino: string){
  //  llamamos la funcion del servicio
  this.spotify.getArtist(termino)
      .subscribe((data:any) => {
        console.log(data);
        
        this.artist=data
      })
 }
}
