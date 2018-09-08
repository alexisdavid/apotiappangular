import { Component, OnInit } from '@angular/core';

// cargamos el servicio para usarlo
import { SpotifyService } from '../../services/spotify-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  error:boolean
  cargado:boolean = true;
  messageError:string;

  newReleases:any[] =[];
            // iniciamos la variable del servicio
                        // |
                        // V
  constructor( private service: SpotifyService) { 
        this.error=false;
  // llamamos la funcion get del servicio (getNewreleases)


    this.service.getNewReleases().subscribe( (data:any) =>{
        console.log(data);
        this.newReleases=data;
        this.cargado=false;
                     
    }, (errorServicio) =>{
      this.cargado = false;
      this.error = true;
      this.messageError = errorServicio.error.error.message;
      console.log();
      

    });
  }

  ngOnInit() {
  }
  
}
