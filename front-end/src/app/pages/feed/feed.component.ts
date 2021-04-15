import {Component, OnInit} from "@angular/core";
import {Post} from "../../models/post";

// core components

@Component({
    selector: "app-home",
    templateUrl: "./feed.component.html",
    styleUrls: ["feed.component.scss"]
})
export class FeedComponent implements OnInit {
    public posts: Post[];
    public focus: boolean;

    constructor() {
    }

    ngOnInit() {

    }

    openSearch() {
        document.body.classList.add("g-navbar-search-showing");
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-showing");
            document.body.classList.add("g-navbar-search-show");
        }, 150);
        setTimeout(function () {
            document.body.classList.add("g-navbar-search-shown");
        }, 300);
    }

    closeSearch() {
        document.body.classList.remove("g-navbar-search-shown");
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-show");
            document.body.classList.add("g-navbar-search-hiding");
        }, 150);
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-hiding");
            document.body.classList.add("g-navbar-search-hidden");
        }, 300);
        setTimeout(function () {
            document.body.classList.remove("g-navbar-search-hidden");
        }, 500);
    }

}
