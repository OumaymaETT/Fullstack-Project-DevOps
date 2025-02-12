import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserTypeService } from '../user-type.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-type-user-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './type-user-edit.component.html',
  styleUrls: ['./type-user-edit.component.css']
})
export class TypeUserEditComponent implements OnInit {
  userType: { id: number; type: string } = { id: 0, type: '' };

  constructor(
    private userTypeService: UserTypeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userTypeId = Number(this.route.snapshot.paramMap.get('id'));

    this.userTypeService.getUserType(userTypeId).subscribe((data) => {
      this.userType = data;
    });
  }

  onSubmit(): void {
    this.userTypeService.updateUserType(this.userType.id, this.userType).subscribe(() => {
      this.router.navigate(['/type-users']);
    });
  }
}
