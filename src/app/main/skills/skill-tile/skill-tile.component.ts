import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

@Component({
  selector: 'app-skill-tile',
  templateUrl: './skill-tile.component.html',
  styleUrls: ['./skill-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SkillTileComponent {
  @Input() text: string;
  @Input() icon: string;
  @Input() isActive: boolean;
}
