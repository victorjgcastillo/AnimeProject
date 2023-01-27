import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/shared/components/loading/services/loading.service';
import { AnimesService } from 'src/app/shared/services/animes.service';
import { LocalLoadingService } from 'src/app/shared/services/local-loading.service';


@Component({
  selector: 'app-animes-page',
  templateUrl: './animes-page.component.html',
  styleUrls: ['./animes-page.component.scss']
})
export class AnimesPageComponent implements OnInit{
  years: number[] = defaultYears;
  searchText: string = "";
  animes: any;
  constructor(private loadingServices: LoadingService, private animesService: AnimesService){}
  ngOnInit(): void {

    this.search(null, defaultYears)
    }

  search(text: string | null, years: number[]){
    //PASO 3 poner loading a true para mostrar el loading
    this.loadingServices.next(true)
    this.animesService.getAnimes(`anime?page%5Boffset%5D=0&page%5Blimit%5D=20${text? "&filter%5Btext%5D=" + text: ""}&sort=-user_count&filter%5Byear%5D=${years[0]}..${years[1]}`).subscribe((res: any) =>{
      console.log(res.data);
      this.animes= res.data
      this.loadingServices.next(false)//PASO 4 poner loading a false para quitarlo el loading
    })
  }
}

const defaultYears = [1907, 2023]
