import { Component, ElementRef, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: UntypedFormGroup;
  @ViewChild('userId',{static:true}) userId: ElementRef | undefined;
  @ViewChild('password',{static:true}) userPassword: ElementRef | undefined;

  constructor(
    private router: Router,
    private formBuilder: UntypedFormBuilder,
    // private userService: UserService,
    // private commonService: CommonService,
    // private storageService: StorageService
  ) {
    this.loginForm = this.formBuilder.group({
      username: new UntypedFormControl('', [Validators.required]),
      password: new UntypedFormControl('', [Validators.required]),
    });
  }

  login() {
    if (this.loginForm.valid && this.userId?.nativeElement.value !== "" && this.userPassword?.nativeElement.value !== "") {
      const userId = this.loginForm.value.username;
      const userPassword = this.loginForm.value.password;

      console.log("user id",userId)
      console.log("user passowrd",userPassword)

      // this.commonService.startLoading();

      // this.userService.login(userId, userPassword).subscribe({
      //   next: (response: any) => {
      //     this.commonService.stopLoading();
      //     this.storageService.sessionStore('userId', response.userId);
      //     this.storageService.sessionStore('userEmail', response.userEmail);
      //     this.storageService.sessionStore('userName', response.userName);
      //     this.storageService.sessionStore('userCostCenter', response.userCostCentre);
      //       this.router.navigateByUrl('dashboard/it-support/my-expenses');


      //   },
      //   error: (err: any) => {
      //     this.commonService.stopLoading();
      //     // Handle specific error cases if needed
      //     const errorMessage = err.error?.message || 'Logging failed';
      //     this.commonService.showErrToast(errorMessage);
      //   },
      // });
    } else {
      // this.commonService.showErrToast('Please Fill all Fields');
    }
  }

}
