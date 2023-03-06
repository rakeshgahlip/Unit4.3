import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { GetDetailsComponent } from "./get-details/get-details.component";
import { SignupComponent } from "./signup/signup.component";
import { UpdateElectivesComponent } from "./update-electives/update-electives.component";

@NgModule({
  declarations: [
    AppComponent,
    GetDetailsComponent,
    SignupComponent,
    UpdateElectivesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
