import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'partie-frontend';

  constructor(private router: Router) {}

  goToUsers() {
    this.router.navigate(['/users']);
  }

  goToAddUser() {
    this.router.navigate(['/adduser']);
  }

  goToUserTypes() {
    this.router.navigate(['/type-users']);
  }

  goToAddUserType() {
    this.router.navigate(['/add-type-user']);
  }

  // Nouvelle méthode pour modifier un type utilisateur
  goToEditUserType(id: number) {
    this.router.navigate(['/edit-type-user', id]);
  }
}
