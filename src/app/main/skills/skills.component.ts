import {Component, Input, OnInit} from '@angular/core';
import {fuseAnimations} from '../../shared/animations';
import {SkillsService} from '../../services/skills.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppMode} from '../../core/enums/app-mode';
import {selectAppMode} from '../../state/layout.selectors';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: fuseAnimations
})
export class SkillsComponent implements OnInit {

  appMode$: Observable<AppMode> = this._store.select(selectAppMode);

  activeSkillSet = 'Front End';

  constructor(private _skillItemService: SkillsService,
              private _store: Store) { }

  ngOnInit() {
    this.setActiveSkillSet(this._skillItemService.getActiveSkill())
  }

  get AppMode() {
    return AppMode;
  }

  setActiveSkillSet(value) {
    this.activeSkillSet = value;
    this._skillItemService.setActiveSkill(value);
  }

}
