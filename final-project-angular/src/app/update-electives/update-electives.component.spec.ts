import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UpdateElectivesComponent } from "./update-electives.component";

describe("UpdateElectivesComponent", () => {
  let component: UpdateElectivesComponent;
  let fixture: ComponentFixture<UpdateElectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateElectivesComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateElectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
