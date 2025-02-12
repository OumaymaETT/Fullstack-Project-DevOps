import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from '../user-service.service';
import { UserTypeService } from '../user-type.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [UserTypeService],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: User = new User();
  userTypes: any[] = [];

  constructor(
    private userService: UserService,
    private userTypeService: UserTypeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userTypeService.getUserTypes().subscribe((data) => {
      this.userTypes = data;
    });
  }

  onSubmit(): void {
    const userPayload = {
      name: this.user.name,
      firstName:this.user.firstName,
      email: this.user.email,
      userType: { id: this.user.userTypeId }
    } as User;

    this.userService.addUser(userPayload).subscribe(() => {
      this.router.navigate(['/users']);
    });
  }

}
