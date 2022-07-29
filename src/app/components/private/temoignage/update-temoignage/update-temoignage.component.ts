import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { TemoignageService } from 'src/app/services/temoignage.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BaseService } from 'src/app/services/base.service';
@Component({
  selector: 'app-update-temoignage',
  templateUrl: './update-temoignage.component.html',
  styleUrls: ['./update-temoignage.component.scss'],
})
export class UpdateTemoignageComponent implements OnInit {
  myForm: FormGroup;
  selectedFile: any;
  imageUrl = `${BaseService.baseUrl}/`;
  constructor(
    private fb: FormBuilder,
    private temoignageService: TemoignageService,
    private router: Router,
    private route: ActivatedRoute,
    private toastr: ToastrService
  ) {
    this.myForm = this.fb.group({
      fullname: new FormControl('', [
        Validators.required,
        Validators.pattern("[A-Za-z .'-]+"),
        Validators.minLength(2),
      ]),
      contenu: new FormControl('', [Validators.required]),
    });
  }
  get fullname() {
    return this.myForm.get('firstname');
  }
  get contenu() {
    return this.myForm.get('lastname');
  }
  ngOnInit(): void {
    let id = this.route.snapshot.params?.['id'];
    this.temoignageService.getOneTemoignage(id).subscribe({
      next: (res) => {
        let temoignage = res;
        this.myForm.patchValue({
          fullname: temoignage.fullname,
          contenu: temoignage.content,
        });
        this.imageUrl += res.image;
      },
    });
  }
  save(event: any) {
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => {
      // called once readAsDataURL is completed
      this.imageUrl = (event.target as FileReader).result!.toString();
    };

    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }

  update() {
    let id = this.route.snapshot.params?.['id'];
    let data = this.myForm.value;
    let formData = new FormData();
    formData.append('fullname', data.fullname),
      formData.append('content', data.contenu),
      formData.append('picture', this.selectedFile);
    this.temoignageService.updateTemoignage(formData, id).subscribe({
      next: (result) => {
        this.toastr.success('la temoignage mise à jour avec succès ');
        this.router.navigate(['/admin/temoignages']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
