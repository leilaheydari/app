






// import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
// import { CommonModule, isPlatformBrowser } from '@angular/common';
// import * as FullCalendar from '@fullcalendar/core';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import jalaliPlugin from '@fullcalendar/jalali';


// interface Participant {
//   name: string;
//   image: string;
// }

// @Component({
//   selector: 'app-timelines',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './timelines.component.html',
//   styleUrl: './timelines.component.scss'
// })
// export class TimelinesComponent implements AfterViewInit {
//   constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

//   ngAfterViewInit() {
//     if (isPlatformBrowser(this.platformId)) {
//       this.initializeFullCalendar();
//     }
//   }

//   private initializeFullCalendar() {
//     const calendarElement: any = document.getElementById('calendar');
//     const locale = 'fa';
//     const calendar = new FullCalendar.Calendar(calendarElement, {

//       // plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
//       // // header: false,

//       plugins: [dayGridPlugin, jalaliPlugin],
//       locale: locale,
//       headerToolbar: {
//         left: 'prev,next today',
//         center: 'title',
//         right: 'dayGridMonth,timeGridWeek,timeGridDay',
//       },

//       views: {
//         timeGridWeek: {
//           titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' },
//           columnHeaderFormat: { weekday: 'long' }
//         },
//         dayGridMonth: {
//           titleFormat: { year: 'numeric', month: 'long' }
//         }
//       },

//       // defaultView: 'timeGridWeek',
//       eventTimeFormat: {
//         hour: 'numeric',
//         minute: '2-digit',
//         meridiem: 'short'
//       },
//       events: [
//         {
//           title: 'جلسه 1',
//           start: '2023-12-10T10:00:00',
//           end: '2023-12-10T12:00:00',
//           participants: [
//             { name: 'شرکت‌کننده 1', image: './../../../../../assets/images/a7.png' },
//             { name: 'شرکت‌کننده 2', image: './../../../../../assets/images/a1.png' },
//           ]
//         },
//         {
//           title: 'جلسه 2',
//           start: '2023-12-12T14:00:00',
//           end: '2023-12-12T16:00:00',
//           participants: [
//             { name: 'شرکت‌کننده 3', image: './../../../../../assets/images/a10.png' },
//             { name: 'شرکت‌کننده 4', image: './../../../../../assets/images/a2.png' },
//           ]
//         },
//         // رویدادهای دیگر
//       ],
//       eventContent: function (arg) {
//         const participantIcons = (arg.event.extendedProps['participants'] as Participant[]).map((participant: Participant) => {
//           return `<img src="${participant.image}" class="calendar-icon" title="${participant.name}" />`;
//         }).join('');
//         return { html: `<div>${arg.timeText}${participantIcons}</div>` };
//       }
//     });

//     calendar.render();
//   }
// }




import { Component, AfterViewInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import * as FullCalendar from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import jalaliMoment from 'jalali-moment';

interface Participant {
  name: string;
  image: string;
}

@Component({
  selector: 'app-timelines',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './timelines.component.html',
  styleUrls: ['./timelines.component.scss']
})
export class TimelinesComponent implements AfterViewInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initializeFullCalendar();
    }
  }

  private initializeFullCalendar() {
    const calendarElement: any = document.getElementById('calendar');
    const locale = 'fa';
    const calendar = new FullCalendar.Calendar(calendarElement, {
      plugins: [dayGridPlugin],
      locale: locale,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay',
      },
      views: {
        timeGridWeek: {
          titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' },
          columnHeaderFormat: { weekday: 'long' }
        },
        dayGridMonth: {
          titleFormat: { year: 'numeric', month: 'long' }
        }
      },
      eventTimeFormat: {
        hour: 'numeric',
        minute: '2-digit',
        meridiem: 'short'
      },
      events: [
        {
          title: 'جلسه 1',
          start: '2023-12-10T10:00:00',
          end: '2023-12-10T12:00:00',
          participants: [
            { name: 'شرکت‌کننده 1', image: './../../../../../assets/images/a7.png' },
            { name: 'شرکت‌کننده 2', image: './../../../../../assets/images/a1.png' },
          ]
        },
        {
          title: 'جلسه 2',
          start: '2023-12-12T14:00:00',
          end: '2023-12-12T16:00:00',
          participants: [
            { name: 'شرکت‌کننده 3', image: './../../../../../assets/images/a10.png' },
            { name: 'شرکت‌کننده 4', image: './../../../../../assets/images/a2.png' },
          ]
        },
        // رویدادهای دیگر
      ],
      eventContent: function (arg) {
        const participantIcons = (arg.event.extendedProps['participants'] as Participant[]).map((participant: Participant) => {
          return `<img src="${participant.image}" class="calendar-icon" title="${participant.name}" />`;
        }).join('');
        return { html: `<div>${arg.timeText}${participantIcons}</div>` };
      }
    });

    calendar.render();
  }
}
