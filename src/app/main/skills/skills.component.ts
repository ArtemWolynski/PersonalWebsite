import {Component, Input, OnInit} from '@angular/core';
import {fuseAnimations} from '../../shared/animations';
import {SkillsService} from './skills.service';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppMode} from '../../core/enums/app-mode';
import {uiSelectAppMode} from '../../state/layout.selectors';
import {AppScreen} from '../../core/enums/app-screen';
import {skillsLoad, skillsSetActiveSkillSet} from '../../store/actions/skills.actions';
import {skillSelectActiveSkillSet, skillSelectSkillSets} from '../../state/skills.selectors';
import {SkillSet} from '../../core/models/skill-set';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: fuseAnimations
})
export class SkillsComponent implements OnInit {

  appMode$: Observable<AppMode> = this._store.select(uiSelectAppMode);

  activeSkillSet$ = this._store.select(skillSelectActiveSkillSet);

  skillSets$ = this._store.select(skillSelectSkillSets)
    .pipe(
      tap((skillSet: SkillSet[]) => this.setActiveSkillSet(skillSet[0]))
    );

  constructor(private _skillService: SkillsService,
              private _store: Store) { }

  ngOnInit() {
    this._store.dispatch(skillsLoad());
  }

  setActiveSkillSet(value: SkillSet) {
    this._store.dispatch(skillsSetActiveSkillSet( { activeSkillSet: value } ));
  }

  get AppMode() {
    return AppMode;
  }

  get AppScreen() {
    return AppScreen;
  }

}
