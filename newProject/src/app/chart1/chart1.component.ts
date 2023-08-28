// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-chart1',
//   templateUrl: './chart1.component.html',
//   styleUrls: ['./chart1.component.css']
// })
// export class Chart1Component {

// }

import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart1', // Component selector
  templateUrl: './chart1.component.html', // HTML template file
  styleUrls: ['./chart1.component.css'] // CSS styling file
})
export class Chart1Component implements AfterViewInit {
  @ViewChild('chartContainer', { static: false }) chartContainer!: ElementRef;

  ngAfterViewInit() {
    this.displayChart1(); // Call the method to display the first chart
  }

  displayChart1() {
    // Chart1 display logic
    // You can implement the logic to create and display the first pie chart here
    // Example:
    const chartData1 = {
      labels: ['Percentage Cpu', 'Memory', 'NetworkIn','NetworkOut'],
      datasets: [{
        data: [2.8, 14.3, 62.3,30.17],
        backgroundColor: ['red', 'green', 'blue', 'Orange']
      }]
    };

    const ctx = this.chartContainer.nativeElement.getContext('2d');

    if (ctx instanceof CanvasRenderingContext2D) {
      new Chart(ctx, {
        type: 'pie',
        data: chartData1,
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
