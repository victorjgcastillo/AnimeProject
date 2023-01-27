import { Component, OnInit } from '@angular/core';
import { LocalLoadingService } from '../../services/local-loading.service';
import { LoadingService } from './services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit{
  isLoading: boolean = false;

  constructor(private loadingService: LoadingService){}
  ngOnInit(){

    this.loadingService.obs().subscribe((isLoading: boolean)=>{
      this.isLoading = isLoading
    })
  }
}
