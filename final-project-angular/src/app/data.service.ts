import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private API_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  public getAllElectivesData() {
    return this.httpClient.get(`${this.API_URL}/findAllStudents`);
  }

  public addStudent(data) {
    return this.httpClient.post(`${this.API_URL}/addStudent`, data);
  }
  public updateElectives(data) {
    return this.httpClient.post(`${this.API_URL}/updateElectives`, data);
  }
  public findStudent() {
    return this.httpClient.get(`${this.API_URL}/findStudent`);
  }
  public deleteStudent(data) {
    return this.httpClient.delete(`${this.API_URL}/deleteStudent`, data);
  }
}
