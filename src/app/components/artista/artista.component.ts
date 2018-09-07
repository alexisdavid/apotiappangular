import { Component} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotifyService } from '../../services/spotify-service.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent {

  cargando:boolean;
    artista: any = {};
    toptracs: any[] = [];
  constructor(private router:ActivatedRoute,private spotify:SpotifyService) { 

    this.cargando = true;
    this.router.params.subscribe(params => {
      // llamamos la funcion para obtener el artista y le pasamos el id de la url
     this.getArtist(params['id']);
     this.getTopTracs(params['id'])
  
        });
  
}
getArtist(id:string){

    this.cargando = true;
  		this.spotify.getArtist(id).subscribe(data => {
          console.log(data);
          this.artista=data;
          this.cargando=false;
      });
            
     
}

getTopTracs(id:string){
  this.spotify.getTopTracs(id).subscribe(tracs => {
    
    this.toptracs = tracs;
    console.log(tracs);
    
    
  });
}


}
