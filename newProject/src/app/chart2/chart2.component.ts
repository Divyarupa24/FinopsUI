// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-chart2',
//   templateUrl: './chart2.component.html',
//   styleUrls: ['./chart2.component.css']
// })
// export class Chart2Component {

// }

import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart2', // Component selector
  templateUrl: './chart2.component.html', // HTML template file
  styleUrls: ['./chart2.component.css'] // CSS styling file
})
export class Chart2Component implements AfterViewInit {
  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;

  ngAfterViewInit() {
    this.displayChart2(); // Call the method to display the second chart
  }

  displayChart2() {
    // Chart2 display logic
    // You can implement the logic to create and display the second pie chart here
    // Example:
    const chartData2 = {
      labels: ['PercentageCPU', 'Memory', 'NetworkIN','NetworkOut'],
      datasets: [{
        data: [0.42, 10.85, 71.3,17.9],
        backgroundColor: ['purple', 'orange', 'yellow','Pink']
      }]
    };

    const ctx = this.chartContainer.nativeElement.getContext('2d');

    if (ctx instanceof CanvasRenderingContext2D) {
      new Chart(ctx, {
        type: 'pie',
        data: chartData2,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          // Other options...
        }
      });
    } else {
      console.error("ctx is not a CanvasRenderingContext2D");
    }
  }
}
