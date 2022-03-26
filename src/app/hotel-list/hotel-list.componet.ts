import { Component, OnInit } from "@angular/core";
import { IHotel } from "./hotel";
@Component({
      selector: 'app-hotel-list',
      templateUrl: './hotel-list.component.html',
      styleUrls: ['./hotel-list.component.css']
})
export class HotelListComponent implements OnInit{
    public title = "Liste des Hotels";

    public hotels: IHotel[] = [
      {
        hotelId:1,
        hotelName: 'Buea sweet life',
        description: 'belle vue et au bord de la mer',
        prix: 40000,
        imageUrl:'assets/img/hotel-room.jpg'
      }, {
        hotelId:2,
        hotelName: 'Marakech',
        description: 'belle vue et au bord de la mer',
        prix: 60000,
        imageUrl:'assets/img/indoors.jpg'
      }, {
        hotelId:3,
        hotelName: 'cheraton',
        description: 'Profiter de la vue sur les montagne',
        prix: 90000,
        imageUrl:'assets/img/the-interior.jpg'
      }, {
        hotelId:4,
        hotelName: 'Alize',
        description: 'Magnifique cadre pour votre sejour',
        prix: 70000,
        imageUrl:'assets/img/window.jpg'
      }, {
        hotelId:4,
        hotelName: 'cheraton',
        description: 'belle vue et au bord de la plage',
        prix: 20000.00,
        imageUrl:'assets/img/mood1.jpg'
      }, {
        hotelId:4,
        hotelName: 'cheraton',
        description: 'belle vue et prêt de la tour eifel',
        prix: 60000.0,
        imageUrl:'assets/img/mood2.jpg'
      },
    ];
    public showBadge: boolean = false;

    public toogleIsNewBadge(): void{
              this.showBadge = !this.showBadge;
    }

    public hotelFilter = 'mot';

    ngOnInit(): void {

    }


}
