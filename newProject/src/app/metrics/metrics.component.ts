// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-metrics',
//   templateUrl: './metrics.component.html',
//   styleUrls: ['./metrics.component.css']
// })
// export class MetricsComponent {

// }

// metrics.component.ts
import { Component, OnInit } from '@angular/core';
import { MetricsService } from '../metrics.service';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.css']
})
export class MetricsComponent implements OnInit {
  resources: any[] = []; // Initialize with the correct data structure
  constructor(private metricsService: MetricsService) {} // Inject your metrics service

  ngOnInit(): void {
    // Fetch resources and metrics data here
    // Example: You can use a service to fetch data and populate the resources array
    // this.resources = this.metricsService.getResourcesWithMetrics();
  }
  fetchMetrics(): void {
    // Use your metrics service to fetch data from the backend
    this.metricsService.getMetrics().subscribe(
      (data: any) => {
        this.resources = data; // Assuming data contains your metric values
      },
      (error: any) => {
        console.error('Error fetching metrics:', error);
      }
    );
  }
}
