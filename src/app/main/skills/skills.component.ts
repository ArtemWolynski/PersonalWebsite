import {Component, OnInit} from '@angular/core';
import {fuseAnimations} from '../../shared/animations';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {AppMode} from '../../core/enums/app-mode';
import {uiSelectAppMode} from '../../state/layout.selectors';
import {AppScreen} from '../../core/enums/app-screen';
import {skillsLoad, skillsSetActiveSkillSet} from '../../store/actions/skills.actions';
import {skillSelectActiveSkillSet, skillSelectSkillSets} from '../../state/skills.selectors';
import {SkillSet} from '../../core/models/skill-set';
import {ScreenTransitionService} from '../../services/screen-transition.service';
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
      tap((skillSet: SkillSet[]) => {
        this._store.dispatch(skillsSetActiveSkillSet( { activeSkillSet: skillSet[0] } ));
      })
    );

  constructor(private _store: Store,
              private _transitionService: ScreenTransitionService) { }

  ngOnInit() {
    this._store.dispatch(skillsLoad());
  }

  setActiveSkillSet(value: SkillSet, appMode: AppMode) {
    this._store.dispatch(skillsSetActiveSkillSet( { activeSkillSet: value } ));

    if (appMode === AppMode.MOBILE) {
      setTimeout(() => {
        this._transitionService.scrollToElement(value.name);
      })
    }
  }

  get AppMode() {
    return AppMode;
  }

  get AppScreen() {
    return AppScreen;
  }

}
