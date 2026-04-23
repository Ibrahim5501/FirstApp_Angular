import { Component } from '@angular/core';
import { EventService } from 'src/Services/event.service';
import { MemberService } from 'src/Services/member.service';
import { ChartDataset, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  nbMembers: number = 0;
  nbEvents: number = 0;
  nbTools: number = 0;

  nbTeachers: number = 0;
  nbStudents: number = 0;

  chartOptions: ChartOptions = {};

  chartDataDoughnut: ChartDataset[] = [
    {
      label: 'Events Lieux',
      data: []
    }
  ];
  chartLabelsDoughnut: string[] = [];

  chartDataPie: ChartDataset[] = [
    {
      data: []
    }
  ];
  chartLabelsPie: string[] = ['Teacher', 'Student'];

  chartDataLine: ChartDataset[] = [
    {
      label: 'Nombre d\'événements par membre',
      data: []
    }];
    chartLabelsLine: string[] = [];

  constructor(private MS: MemberService, private ES: EventService) {
    this.MS.GetAllMembers().subscribe((data) => {
      this.nbMembers = data.length;
      this.nbTeachers = data.filter(m => m.type == 'Teacher').length;
      this.nbStudents = data.filter(m => m.type == 'Student').length;
      this.chartDataPie = [{data: [this.nbTeachers, this.nbStudents]}];
      this.chartLabelsLine = data.map(m => m.name);
      this.chartDataLine = [{
        label: 'Nombre d\'événements par membre',
        data: data.map(m => m.tab_Events.length)
      }];
    });
    this.ES.GetAllEvents().subscribe((data) => {
      this.nbEvents = data.length;
      const lieux = [...new Set(data.map(e => e.place))];
      this.chartLabelsDoughnut = lieux;
      this.chartDataDoughnut = [{
        data: lieux.map(l => data.filter(e => e.place == l).length)
      }];
    });
  }
}
