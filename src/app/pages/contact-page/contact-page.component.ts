import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  pruebaSubject = new Subject();

  ngOnInit(): void {

    this.pruebaSubject.subscribe((msg)=>{
      console.log(msg);

    })

    this.pruebaSubject.next('hola se me escucha?')



  }
}
