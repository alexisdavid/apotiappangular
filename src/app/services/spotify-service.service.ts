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

  // primer funcion cargada en el home
  // getNewReleases(){

  //   //guardamos los headers en una constante
    
  //     const headers = new HttpHeaders({
      
  //       'Authorization':'Bearer BQC_U3HV3c64jQcP_W1QB1L9OLETMUc7HJ5sGIv9gNx6PCUiFNA8xEjG2DqNrV27QcU2e8qS143KWH7rPdY'
  
  //     });

  //     // retornamos respuesta al home
  //     return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers})


    // funcion cargada en el home 
    getNewReleases(){

      //guardamos los headers en una constante
      
        const headers = new HttpHeaders({
        
          'Authorization':'Bearer BQC_U3HV3c64jQcP_W1QB1L9OLETMUc7HJ5sGIv9gNx6PCUiFNA8xEjG2DqNrV27QcU2e8qS143KWH7rPdY'
    
        });
  
        // retornamos respuesta al home
        return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers})
                
  }
  // funcion de la busqueda
  getArtist( termino: string){

    //guardamos los headers en una constante
    
      const headers = new HttpHeaders({
      
        'Authorization':'Bearer BQC_U3HV3c64jQcP_W1QB1L9OLETMUc7HJ5sGIv9gNx6PCUiFNA8xEjG2DqNrV27QcU2e8qS143KWH7rPdY'
  
      });
      return this.http.get(`https://api.spotify.com/v1/search?q=${ termino }&type=artist&limit=15`,{headers});
                
  }
}
