import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormControl,
  FormGroup,
  FormBuilder,
} from '@angular/forms';
import { TemoignageService } from 'src/app/services/temoignage.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-temoignage',
  templateUrl: './add-temoignage.component.html',
  styleUrls: ['./add-temoignage.component.scss']
})
export class AddTemoignageComponent implements OnInit {
  myForm: FormGroup;
  selectedFile: any;
  imageUrl = 'assets/img/avatar.png';
  constructor(
    private fb: FormBuilder,
    private temoignageService: TemoignageService,
    private router: Router,
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

  ngOnInit(): void {}

  save(event: any) {
    let reader = new FileReader();

    reader.readAsDataURL(event.target.files[0]); // read file as data url

    reader.onload = (event) => {
      // called once readAsDataURL is completed
      this.imageUrl = (event.target as FileReader).result!.toString();
    };

    this.selectedFile = event.target.files[0];
  }

  add() {
    let data = this.myForm.value;
   

    let formData = new FormData();

    formData.append('fullname', data.fullname);
    formData.append('contenu', data.contenu);
    formData.append('picture', this.selectedFile);

    this.temoignageService.addTemoignage(formData).subscribe({
      next: (result) => {
        console.log(result);
        this.toastr.success('temoignage ajoutée avec succès');
        this.router.navigate(['/admin/temoignages']);
      },
      error: (err) => {
        this.toastr.error(err.message);
        console.log(err);
      },
    });
  }
}

