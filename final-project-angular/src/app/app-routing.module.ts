import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { GetDetailsComponent } from "./get-details/get-details.component";
import { SignupComponent } from "./signup/signup.component";
import { UpdateElectivesComponent } from "./update-electives/update-electives.component";

const routes: Routes = [
  { path: "", redirectTo: "get-details", pathMatch: "full" },
  { path: "get-details", component: GetDetailsComponent },
  { path: "signup-student", component: SignupComponent },
  { path: "update-electives-data", component: UpdateElectivesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
