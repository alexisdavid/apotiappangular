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

  // centralizacion de la url y los headers
  getQuery(query:string){

    const url = `https://api.spotify.com/v1/${query}`;

    // heders de la peticion al api de spotify
    const headers = new HttpHeaders({
        
      'Authorization':'Bearer BQCPbabiT7TVse9r0mpBe06uk1_01aP-FkxdwIF7n7z7WfYfE2JtcAyes1w0mcAHPpDflO03qv_Ovi2mXzE'
  
    });

    return this.http.get(url,{headers});
  };

  //----------------------------funciones de los componentes-------------------------------------------------

  // funcion cargada en el home 
 getNewReleases(){

     return this.getQuery('browse/new-releases?limit=15').pipe(map(data => data['albums'].items));
               
  };



  // funcion de la busqueda
  getArtist( termino: string){
 
    return this.getQuery(`search?q=${ termino }&type=artist&limit=15`).pipe(map(data => data['artists'].items));
                
  }
}
