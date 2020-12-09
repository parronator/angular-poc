import { Injectable } from '@angular/core';
import {IRouter} from "./router";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class RouterService implements IRouter{

  constructor(private router: Router, private location: Location) {
  }

  getCurrentPath(): string {
    return this.router.url;
  }

  goBack(): void {
    this.location.back();
  }

  goForward(): void {
    this.location.forward();
  }

  goToRootPage(): void {
    this.router.navigate(["/"]);
  }

  navigate(path: string, queryParams?: any, extras?: any): void {
    this.router.navigate([path], {queryParams, ...extras},);
  }
}
