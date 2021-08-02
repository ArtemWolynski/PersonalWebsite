import {Component, Input, OnInit} from '@angular/core';
import {particlesSettings, particlesStyle} from '../../shared/configs/particles';
import {Store} from '@ngrx/store';
import {selectUiState} from '../../state/layout.selectors';
import {LayoutState} from '../../core/models/layout-state';
import {AppMode} from '../../core/enums/app-mode';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {
  myStyle = particlesStyle;
  myParams = particlesSettings;

  width: number = 100;
  height: number = 100;

  appMode: AppMode;

  constructor(private store: Store) {
    this.store.select(selectUiState).subscribe((uiState: LayoutState) => {
      this.appMode = uiState.appMode;
    })
  }

  get AppMode() {
    return AppMode;
  }

  ngOnInit() {
    this.myParams.particles.number.value = window.innerWidth / 50;
  }

}
