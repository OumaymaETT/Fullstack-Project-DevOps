import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserTypeService } from '../user-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './type-user-form.component.html',
  styleUrls: ['./type-user-form.component.css']
})
export class TypeUserFormComponent {
  userType: { type: string } = { type: '' };

  constructor(private userTypeService: UserTypeService, private router: Router) {}

  onSubmit(): void {
    this.userTypeService.addUserType(this.userType).subscribe(() => {
      this.router.navigate(['/type-users']);
    });
  }
}
