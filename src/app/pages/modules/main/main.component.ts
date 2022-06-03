import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {
  public tableData = [
    {
      title: 'Este mes',
      color: '#0d6efd',
      tableData: [
        {
          id: 1,
          description: 'Adjustar objetivos',
          color: '#ffa500',
          img: 'https://media.istockphoto.com/photos/portrait-of-beautiful-young-woman-with-blonde-hair-picture-id1258148390?k=20&m=1258148390&s=612x612&w=0&h=HUNFqYoX9hq-Y0lPEep7fBN4Of4ko3JVkQcfLbQnBbY=',
          status: 'En curso',
          percent: 20,
          endDate: '1654261677653',
          range: 100,
        },
        {
          id: 1,
          description: 'Adjustar objetivos',
          color: '#dc1e2b',
          img: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
          status: 'Listo',
          percent: 50,
          endDate: '1654261677653',
          range: 100,
        },
        {
          id: 1,
          description: 'Adjustar objetivos',
          color: '#3fc05c',
          img: 'https://p0.pikist.com/photos/876/44/portrait-woman-face-female-woman-face-beautiful-woman-face-women-face-fashion-adult.jpg',
          status: 'Detenido',
          percent: 100,
          endDate: '1654261677653',
          range: 100,
        },
        {
          id: 1,
          description: 'Adjustar objetivos',
          color: '#dc1e2b',
          img: 'data:image/jpeg;base64,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',
          status: 'En curso',
          percent: 90,
          endDate: '1654261677653',
          range: 100,
        },
        {
          id: 1,
          description: 'Adjustar objetivos',
          color: '#3fc05c',
          img: 'https://cdn.pixabay.com/photo/2021/04/05/12/39/man-6153298_1280.jpg',
          status: 'En curso',
          percent: 20,
          endDate: '1654261677653',
          range: 100,
        },
      ],
    },
    {
      title: 'Próximo mes',
      color: '#8425a3',
      tableData: [
        {
          id: 1,
          description: 'Adjustar objetivos',
          color: '#ffa500',
          img: 'data:image/jpeg;base64,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',
          status: 'En curso',
          percent: 1,
          endDate: '1654261677653',
          range: 100,
        },
        {
          id: 1,
          description: 'Adjustar objetivos',
          color: '#ffa500',
          img: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
          status: 'En curso',
          percent: 12,
          endDate: '1654261677653',
          range: 100,
        },
        {
          id: 1,
          description: 'Adjustar objetivos',
          color: '#3fc05c',
          img: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBmYWNlfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
          status: 'En curso',
          percent: 60,
          endDate: '1654261677653',
          range: 100,
        },
        {
          id: 1,
          description: 'Adjustar objetivos',
          color: '#dc1e2b',
          img: 'https://media.istockphoto.com/photos/portrait-of-beautiful-young-woman-with-blonde-hair-picture-id1258148390?k=20&m=1258148390&s=612x612&w=0&h=HUNFqYoX9hq-Y0lPEep7fBN4Of4ko3JVkQcfLbQnBbY=',
          status: 'En curso',
          percent: 40,
          endDate: '1654261677653',
          range: 100,
        },
      ],
    },
  ];
}
