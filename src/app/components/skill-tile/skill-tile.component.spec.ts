import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTileComponent } from './skill-tile.component';

describe('SkillTileComponent', () => {
  let component: SkillTileComponent;
  let fixture: ComponentFixture<SkillTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
