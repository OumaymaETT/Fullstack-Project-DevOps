import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserTypeService } from '../user-type.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-type-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './type-user-list.component.html',
  styleUrls: ['./type-user-list.component.css']

})
export class TypeUserListComponent implements OnInit {
  userTypes: any[] = [];

  constructor(private userTypeService: UserTypeService, private router: Router) {}
  ngOnInit(): void {
    this.userTypeService.getUserTypes().subscribe((data) => {
      this.userTypes = data;
    });
  }

  deleteUserType(id: number): void {
    this.userTypeService.deleteUserType(id).subscribe(() => {
      this.userTypes = this.userTypes.filter(type => type.id !== id);
    });
  }

  editUserType(id: number): void {
    this.router.navigate(['/edit-type-user', id]);
  }
  goToAddUser():void{
    this.router.navigate(['/add-type-user']);
  }
}
