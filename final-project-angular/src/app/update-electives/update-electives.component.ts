import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update-electives",
  templateUrl: "./update-electives.component.html",
  styleUrls: ["./update-electives.component.css"],
})
export class UpdateElectivesComponent implements OnInit {
  data: any = [];
  constructor() {}

  ngOnInit(): void {
    // console.log(window.history.state, "data");
    this.data = window.history.state;
  }
  onSubmit(name) {
    console.log("testing", name);
  }
}
