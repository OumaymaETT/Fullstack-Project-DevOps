import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user-service.service';
import { UserTypeService } from '../user-type.service';
import { User } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']

})
export class UserEditComponent implements OnInit {
  user: User = new User();
  userTypes: any[] = [];

  constructor(
    private userService: UserService,
    private userTypeService: UserTypeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('id'));

    this.userTypeService.getUserTypes().subscribe((data) => {
      this.userTypes = data;

      this.userService.getUser(userId).subscribe((data) => {
        this.user = data;

        if (this.user.userType && this.user.userType.id) {
          this.user.userTypeId = this.user.userType.id;
        }
      });
    });
  }


  onSubmit(): void {
    const userPayload = {
      id: this.user.id,
      name: this.user.name,
      firstName:this.user.firstName,
      email: this.user.email,
      userType: { id: this.user.userTypeId }
    } as User;

    this.userService.updateUser(this.user.id, userPayload).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }
}
