import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'students-details-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
	loginFormModel: any = {
		username: "",
		password: ""
	};

	constructor(
		public authService: AuthService,
		public router: Router
	) {}

	login(form: any) {
		console.log(form);
		
		this.authService.login().subscribe(
			()=> {
				console.log("Entra");
				if (this.authService.isLoggedIn) {

					const navigationExtras: NavigationExtras = {
						queryParamsHandling: 'preserve',
						preserveFragment: true
					};

					this.router.navigate(['/citas'], navigationExtras);
				}
			}
		);
	}
	
	logout() {
		this.authService.logOut();
	}
}
