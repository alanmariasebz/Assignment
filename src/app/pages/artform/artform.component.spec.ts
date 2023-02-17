import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtformComponent } from './artform.component';

describe('ArtformComponent', () => {
  let component: ArtformComponent;
  let fixture: ComponentFixture<ArtformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
