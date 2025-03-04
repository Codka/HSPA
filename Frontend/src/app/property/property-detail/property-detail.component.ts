import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { Property } from 'src/app/model/property';
import { NgxGalleryOptions, NgxGalleryImage,NgxGalleryAnimation } from '@kolkov/ngx-gallery';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.css']
})
export class PropertyDetailComponent implements OnInit {
public propertyId: number;
property = new Property();
//for image gallery
galleryOptions: NgxGalleryOptions[];
galleryImages: NgxGalleryImage[];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private housingService: HousingService) { }

  ngOnInit() {
    this.propertyId = +this.route.snapshot.params['id'];
    this.route.data.subscribe(
      (data: Property) =>{
        this.property = data['prp'];
      }
    )

    // this.route.params.subscribe(
    //   (params) => {
    //     this.propertyId = +params['id'];
    //     this.housingService.getProperty(this.propertyId).subscribe(
    //       (data: Property) => {
    //         this.property = data;
    //       }
    //     );
    //   },error => this.router.navigate(['/'])
    // );

    this.galleryOptions = [
      {
        width: '100%',
        height: '465px',
        thumbnailsColumns: 4,
        imageAnimation: NgxGalleryAnimation.Slide,
        preview: true
      }
    ];

    this.galleryImages = [
      {
        small: 'assets/images/internal-1.jpeg',
        medium: 'assets/images/internal-1.jpeg',
        big: 'assets/images/internal-1.jpeg'
      },
      {
        small: 'assets/images/internal-2.jpeg',
        medium: 'assets/images/internal-2.jpeg',
        big: 'assets/images/internal-2.jpeg'
      },
      {
        small: 'assets/images/internal-3.jpeg',
        medium: 'assets/images/internal-3.jpeg',
        big: 'assets/images/internal-3.jpeg'
      },
      {
        small: 'assets/images/internal-4.jpeg',
        medium: 'assets/images/internal-4.jpeg',
        big: 'assets/images/internal-4.jpeg'
      },
      {
        small: 'assets/images/internal-5.jpeg',
        medium: 'assets/images/internal-5.jpeg',
        big: 'assets/images/internal-5.jpeg'
      }
    ];   

  }
}
