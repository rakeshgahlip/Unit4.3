import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-get-details",
  templateUrl: "./get-details.component.html",
  styleUrls: ["./get-details.component.css"],
})
export class GetDetailsComponent implements OnInit {
  data: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getElectivesData();
  }
  getElectivesData() {
    this.dataService.getAllElectivesData().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  addStudent(data) {
    this.dataService.addStudent(data).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  updateStudent(data) {
    this.dataService.updateElectives(data).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  findStudent() {
    this.dataService.findStudent().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  deleteStudent(data: string) {
    this.dataService.deleteStudent(data).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
}
