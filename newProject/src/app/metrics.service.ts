import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface Metrics {
  id: number;
  name: string;
  cpuUsage: number;
  memoryUsage: number;
  networkUsage: number;
  storageUsage: number;
  graph: string;
}

@Injectable({
  providedIn: 'root'
})
export class MetricsService {
  private baseUrl = 'https://localhost:7170/api/'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getMetrics(): Observable<Metrics[]> {
    const metricsUrl = `${this.baseUrl}/api/Metrics`; // Replace with the actual API endpoint
    return this.http.get<Metrics[]>(metricsUrl);
  }
}
