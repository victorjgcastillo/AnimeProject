import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  //paso 1 crear el servicio

  loadingSubject = new Subject<boolean>();

  constructor() { }

  next(newValue: any){
    this.loadingSubject.next(newValue)
  }//funcion para que envie el valor al subject con el el next

  obs(){
    return this.loadingSubject;
  }//funcion para que me devuelva los valores enviados
}
