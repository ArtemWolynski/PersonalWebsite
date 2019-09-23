import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import {SkillsService} from '../../services/skills.service';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-skill-tile',
  templateUrl: './skill-tile.component.html',
  styleUrls: ['./skill-tile.component.scss']
})
export class SkillTileComponent implements OnInit, OnDestroy {
  @Input() text;
  @Input() icon;
  private _unsubscribeAll: Subject<any>;
  isActive: boolean;


  constructor(private skillItemService: SkillsService) {
    this._unsubscribeAll = new Subject<any>();
  }
  ngOnInit() {
    this.subscribeToCurrentActiveItem();
  }

  ngOnDestroy() {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  subscribeToCurrentActiveItem() {
    this.skillItemService.activeSkill
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((activeSkill) => {
        console.log(activeSkill, this.text);
        this.isActive = activeSkill === this.text;
      })
  }
}
