import { Routes } from "@angular/router";
import { LoginComponent } from "../../pages/examples/login/login.component";
import { RegisterComponent } from "../../pages/examples/register/register.component";

export const AuthLayoutRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "login",
        component: LoginComponent
      }
    ]
  },
  {
    path: "",
    children: [
      {
        path: "register",
        component: RegisterComponent
      }
    ]
  }
];
