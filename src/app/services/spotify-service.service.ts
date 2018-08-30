import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { 
    console.log("servicio listo");
    
  }
  getNewReleases(){

    //guardamos los headers en una constante
    
      const headers = new HttpHeaders({
      
        'Authorization':'Bearer BQC1DF7U0o7a1EqrmXhukXg33nINtQdqW_lGTVXxQxKldzBLcca2nFK1azqkX5NujhjPhJybwaPbqSfdBNM'
  
      });
      return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20',{headers});
                
  }
}
