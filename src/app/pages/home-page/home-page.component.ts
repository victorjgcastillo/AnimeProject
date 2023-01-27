import { Component, OnInit } from '@angular/core';
import { AnimeInterface } from 'src/app/shared/models/Anime.interface';
import { AnimesService } from 'src/app/shared/services/animes.service';
import { LocalLoadingService } from 'src/app/shared/services/local-loading.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit { //1. se coloca implement OnInit y se declara la funcion ngOnInit
animes: any = {};
//animesPopEm?: AnimeInterface[];
//animesTrending?: AnimeInterface[];
//animesMostWanted?: AnimeInterface[];
//animesAvg?: AnimeInterface[];
//animesPop?: AnimeInterface[];//3. se declara la variable
  constructor(private animeSService: AnimesService){}
ngOnInit(): void {
//2.esta funcion se ejecuta cuando el componente se inicializa
console.log('Aqui estoy');

this.getAnimes("trending/anime?limit=6", "animesTrending")
this.getAnimes("anime?filter%5Bstatus%5D=current&page%5Blimit%5D=6&sort=-user_count", "animesPopEm")
this.getAnimes("anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count","animesMostWanted")
this.getAnimes("trending/anime?limit=6", "animesAvg")
this.getAnimes("anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=6&sort=-user_count", "animesPop")

    //console.log(res.data);
    //this.animes = res.data.map((anime:any) => ({attributes: {...anime.attributes, averageRating: Number(anime.attributes.averageRating) / 10}}));
    //console.log(this.animes);//4.luego se debe ir a TS de GALLERY
}


  getAnimes(filter: string, animesVarKey:any){
    this.animeSService.getAnimes(filter).subscribe((res: any) => {
      this.animes[animesVarKey]= res.data.map((anime:any) => ({attributes: {...anime.attributes, averageRating: Number(anime.attributes.averageRating) / 10}}));
   //para filtrar los animes en el buscador
  })
}

}
