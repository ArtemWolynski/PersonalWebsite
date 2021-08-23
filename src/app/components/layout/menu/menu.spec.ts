import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MenuComponent } from './menu.component';
import { initialState } from '../../../store/reducers/navigation.reducer';

describe('Menu component test', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuComponent],
      imports: [],
      providers: [provideMockStore({ initialState })],
    });

    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
  });

  test('should exist', () => {
    expect(component).toBeDefined();
  });
});
