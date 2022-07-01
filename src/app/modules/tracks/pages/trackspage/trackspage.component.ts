import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import * as data from '../../../../data/tracks.json';


@Component({
  selector: 'app-trackspage',
  templateUrl: './trackspage.component.html',
  styleUrls: ['./trackspage.component.css']
})
export class TrackspageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> =[
  ]
  tracksRandom: Array<TrackModel> =[ ]
  listObservers$: Array<Subscription> = []



  constructor(private trackService: TrackService) { }

  ngOnInit(): void {
    this.loadDataAll()
    this.loadDataRandom()
   
    
  }

 async loadDataAll(): Promise<any>{


    this.tracksTrending = await this.trackService.getAllTracks$().toPromise()
    
  }

  loadDataRandom():void{

    this.trackService.getAllRandom$().subscribe( 
      (response: TrackModel[]) =>{
        this.tracksRandom = response
        console.log(response)

      }
    )
  }
  ngOnDestroy(): void {
   

  }


}
