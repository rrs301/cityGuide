import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullNewsComponent } from './full-news.component';

describe('FullNewsComponent', () => {
  let component: FullNewsComponent;
  let fixture: ComponentFixture<FullNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullNewsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FullNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
