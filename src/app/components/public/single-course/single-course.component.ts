import { Component, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainingService } from 'src/app/services/training.service';
import { UserService } from 'src/app/services/user.service';
import { BaseService } from 'src/app/services/base.service';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { InscriptionService } from 'src/app/services/inscription.service';
import { Inscription } from 'src/app/models/inscription';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-single-course',
  templateUrl: './single-course.component.html',
  styleUrls: ['./single-course.component.scss'],
})
export class SingleCourseComponent implements OnInit {
  myForm: any = FormGroup;
  training: any;
  student: any[] = [];
  isInscrit: boolean = false;
  trainingList: any[] = [];
  isAdmin: boolean = false;
  baseUrl = `${BaseService.baseUrl}/`;
  constructor(
    private fb: FormBuilder,
    private trainingService: TrainingService,
    private route: ActivatedRoute,
    private router: Router,
    private inscriptionService: InscriptionService,
    private userService: UserService,
    private toastr: ToastrService
  ) {
    let formControls = {
      fullname: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      telephone: new FormControl('', [Validators.required]),
    };
    this.myForm = this.fb.group(formControls);
  }
  get fullname() {
    return this.myForm.get('fullname');
  }
  get email() {
    return this.myForm.get('email');
  }
  get telephone() {
    return this.myForm.get('telephone');
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id'];
    let user = JSON.parse(localStorage.getItem('user')!);
    if (user) {
      this.myForm.patchValue({
        fullname: user.fullname,
        email: user.email,
        telephone: user.telephone,
      });
    }
    this.trainingService.getOneTraining(id).subscribe({
      next: (res) => {
        this.training = res;
        this.trainingService
          .getAllRelatedTrainings(this.training.category._id)
          .subscribe({
            next: (result) => {
              this.trainingList = result;
            },
            error: (err) => {
              console.log(err);
            },
          });
      },
      error: (err) => {
        console.log(err);
      },
    });
    this.isAdmin = this.userService.isLoggedInAsAdmin();
    this.isInscri(id)
  }

  single(id: string) {
    this.isInscri(id)
    this.trainingService.getOneTraining(id).subscribe({
      next: (res) => {
        this.training = res;
        this.router.navigate(['/courses/' + id]);
      },
      error: (error) => {
        this.router.navigate(['/page404']);
      },
    });
  }
  inscrire(id: string) {
    let data = this.myForm.value;

    let inscription = new Inscription(
      data.fullname,
      data.email,
      data.telephone
    );
    this.inscriptionService.addInscription(inscription, id).subscribe({
      next: (res) => {
        this.toastr.success('tu as été inscrit avec succès');
      },
      error: (err) => {
        this.toastr.error(err.error.message);
      },
    });
  }

  isInscri(id: string) {
    if (localStorage.getItem('token')) {
      let user = JSON.parse(localStorage.getItem('user')!);
      this.inscriptionService.getInscriptionsOftraining(id).subscribe({
        next: (res) => {
          this.student = res.find(
            (inscription: any) => inscription.email == user.email
          );
          if (this.student) {
            this.isInscrit = true;
          } else {
            this.isInscrit = false;
          }
        },
      });
    }
  }
}
