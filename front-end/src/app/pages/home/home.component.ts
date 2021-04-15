import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-presentation",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  test: Date = new Date();
  isCollapsed = true;
  constructor() {}

  ngOnInit() {}
}
