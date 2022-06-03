import { Component,  } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent  {

  public tableData = [
    {
      title: 'Este mes',
      color: '#0d6efd',
      tableData: [
        {
          id: 1,
          descrption: 'Adjustar objetivos',
          color: '#ffa500',
          img: 'man1.jpg',
          status: 'En curso',
          percent: 20,
          endDate: Date.now(),
          range: 100
        },
        {
          id: 1,
          descrption: 'Adjustar objetivos',
          color: '#dc1e2b',
          img: 'man2.jpg',
          status: 'Listo',
          percent: 50,
          endDate: Date.now(),
          range: 100
        },
        {
          id: 1,
          descrption: 'Adjustar objetivos',
          color: '#3fc05c',
          img: 'women.jpg',
          status: 'Detenido',
          percent: 100,
          endDate: Date.now(),
          range: 100
        },
        {
          id: 1,
          descrption: 'Adjustar objetivos',
          color: '#dc1e2b',
          img: 'man2.jpg',
          status: 'En curso',
          percent: 90,
          endDate: Date.now(),
          range: 100
        },
        {
          id: 1,
          descrption: 'Adjustar objetivos',
          color: '#3fc05c',
          img: 'women.jpg',
          status: 'En curso',
          percent: 20,
          endDate: Date.now(),
          range: 100
        }
      ]
    },
    {
      title: 'Próximo mes',
      color: '#8425a3',
      tableData: [
        {
          id: 1,
          descrption: 'Adjustar objetivos',
          color: '#ffa500',
          img: 'mai1.jpg',
          status: 'En curso',
          percent: 1,
          endDate: Date.now(),
          range: 100
        },
        {
          id: 1,
          descrption: 'Adjustar objetivos',
          color: '#ffa500',
          img: 'women.jpg',
          status: 'En curso',
          percent: 12,
          endDate: Date.now(),
          range: 100
        },
        {
          id: 1,
          descrption: 'Adjustar objetivos',
          color: '#3fc05c',
          img: 'man2.jpg',
          status: 'En curso',
          percent: 60,
          endDate: Date.now(),
          range: 100
        },
        {
          id: 1,
          descrption: 'Adjustar objetivos',
          color: '#dc1e2b',
          img: 'man1.jpg',
          status: 'En curso',
          percent: 40,
          endDate: Date.now(),
          range: 100
        }
      ]
    }
  ];
  
}
