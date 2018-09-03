import { Injectable } from '@angular/core';
// importamos el HttpClient para conectar ala api
import { HttpClient, HttpHeaders} from '@angular/common/http';

// importamos el observable map para filtrar la informacion

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("servicio listo");
    
  }

  // centralizacion de la url y los headersmap
  getQuery(query:string){

    const url = `https://api.spotify.com/v1/${query}`;

    // heders de la peticion al api de spotify
    const headers = new HttpHeaders({
        
      'Authorization':'Bearer BQDL2cnLZTxIYAeNJn7OD-aLfCxg68T3IMkoUDuO63by6xPyoj7MuNjiZDjksE_Y_1B2CpbOXMPtlN9tBVc'
  
    });

    return this.http.get(url,{headers});
  };

  //----------------------------funciones de los componentes-------------------------------------------------

  // funcion cargada en el home 
 getNewReleases(){

     return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items));
               
  };



  // funcion de la busqueda
  getArtist( termino: string){
 
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe(map(data => data['artists'].items));
                
  }
}
