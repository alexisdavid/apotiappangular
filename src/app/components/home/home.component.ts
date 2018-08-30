import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newReleases:any[] =[];

  constructor( private service: SpotifyService) { 

    this.service.getNewReleases().subscribe( (releases:any) =>{
        console.log(releases.albums.items);
        this.newReleases=releases.albums.items;
                     
    });
  }

  ngOnInit() {
  }
  
}
