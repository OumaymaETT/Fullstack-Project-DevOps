import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeUserEditComponent } from './type-user-edit.component';

describe('TypeUserEditComponent', () => {
  let component: TypeUserEditComponent;
  let fixture: ComponentFixture<TypeUserEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeUserEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeUserEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
