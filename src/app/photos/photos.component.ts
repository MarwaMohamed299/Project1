// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-photos',
//   templateUrl: './photos.component.html',
//   styles: [
//   ]
// })
// export class PhotosComponent {

// }
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
 styles: []
})
export class PhotosComponent {
  photos: any;

  constructor(private route: ActivatedRoute, private service: ServiceService) { }

   ngOnInit(): void {
     const albumId = this.route.snapshot.params['albumId'];
     this.service.GetPhotosByAlbumId(albumId).subscribe({
       next: (response) => {
        console.log(response)
         this.photos = JSON.parse(JSON.stringify(response))
         console.log(this.photos.url)
       },
       error: (err) => {
         console.log(err);
       }
     });
   }


}