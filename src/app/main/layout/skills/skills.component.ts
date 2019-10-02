import {Component, Input, OnInit} from '@angular/core';
import {fuseAnimations} from '../../../animations';
import {SkillsService} from '../../../services/skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: fuseAnimations
})
export class SkillsComponent implements OnInit {
  @Input() classicMode = false;
  @Input() mobileMode = false;
  activeSkillSet = 'General Skills';
  constructor(private skillItemService: SkillsService) { }

  ngOnInit() {
    this.setActiveSkillSet(this.skillItemService.getActiveSkill())
  }

  setActiveSkillSet(value) {
    this.activeSkillSet = value;
    this.skillItemService.setActiveSkill(value);
  }

}
