import {Injectable, OnInit} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IconRegistryService {

  constructor( private iconRegistry: MatIconRegistry,
               private http: HttpClient,
               private domSanitizer: DomSanitizer) {
  }

  registerIcons(): void {
    this.iconRegistry.addSvgIcon('rocket',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/rocket.svg"));

    this.iconRegistry.addSvgIcon('pc',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/pc.svg"));

    this.iconRegistry.addSvgIcon('speedometer',
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/icons/speedometer.svg"));

  }
}
