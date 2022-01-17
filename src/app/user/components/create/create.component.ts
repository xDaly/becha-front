import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { NgxUiLoaderService } from "ngx-ui-loader";
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import Stepper from 'bs-stepper';
import { NgForm } from '@angular/forms';
import { UserinfoService } from '../../services';
import { AnnounceService } from '../../services';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Location, Category, SubCategory } from '../../models';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  @ViewChild('content') content: any;
  @ViewChild('contentt') contentt: any;
  @ViewChild('fileinput2') myInputVariable: ElementRef;
  maxChars = 3000;
  role = '';
  chars = 0;
  private stepper: Stepper;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  context: any;
  imgResultAfterCompress: string = '';
  values: any[] = []
  arrimages: any[] = [];
  mainImage = '';
  userinfo: any
  toasts: any[] = [];
  Locations: Location[] = [];
  Categories: Category[] = [];
  SubCategories: SubCategory[] = [];

  constructor(private router: Router, private toast: ToastrService, private http: HttpClient, private ngxService: NgxUiLoaderService, config: NgbModalConfig, private modalService: NgbModal, private user: UserinfoService, private announce: AnnounceService) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    const a = document.querySelector('#stepper1')
    if (a != null) {
      this.stepper = new Stepper(a, {
        linear: false,
        animation: true
      })
    }
    this.user.getInfo().then(res => {
      this.userinfo = res
    })

    this.getLocations()
    this.getCategories()
  }


  fileChangeEvent(event: any): void {
    this.ngxService.start()
    this.imageChangedEvent = event;
    this.open(this.content);
    this.ngxService.stop()
  }

  fileChangeEvent2(event: any): void {
    this.ngxService.start()
    this.imageChangedEvent = event;
    this.open2(this.contentt);
    this.ngxService.stop()

  }

  imageCropped(event: any) {
    this.croppedImage = event.base64;
    // console.log("cropped", this.croppedImage)
    //this.arrimages.push(this.croppedImage);

  }

  imageLoaded(image: any) {
    console.log("imageLoaded");

  }

  cropperReady() {
    console.log('Cropper ready');
  }

  loadImageFailed() {
    console.log('Load failed');
  }

  addimage() {
    if (this.croppedImage) {
      this.mainImage = this.croppedImage;
      this.imageChangedEvent = null
      this.croppedImage = null
    }
  }

  addarrimg() {
    if (this.croppedImage) {
      this.arrimages.push(this.croppedImage);
      this.imageChangedEvent = null
      this.croppedImage = null
      this.myInputVariable.nativeElement.value = "";
    }
  }

  deleteMain() {
    return this.mainImage = ''
  }

  delete(i: any) {
    this.ngxService.start()
    this.arrimages.splice(i, 1);
    this.ngxService.stop()
  }


  open(content: any) {
    this.modalService.open(content);
  }

  open2(contentt: any) {
    this.modalService.open(contentt);
  }

  next() {
    this.stepper.next();
  }


  onSubmit(f: NgForm) {
    this.ngxService.start()
    f.value.FingerPrint = this.userinfo.FingerPrint
    f.value.Device_Info = this.userinfo.Device_Info
    f.value.User_Agent = this.userinfo.User_Agent
    f.value.pub_image = this.mainImage
    f.value.images = this.arrimages
    f.value.token = this.announce.encrypt(f.value.FingerPrint)
    if (f.value.images.length < 4) {
      this.toast.error('Please upload atleast 4 images')
    }
    if (f.value.images.length >= 4) {
      this.http.post('http://localhost:81/api/announce', f.value).subscribe((res: any) => {
        if (res.success) {
          this.toast.success(res.message);
          // this.router.navigate(['/home'])
        } else {
          this.toast.warning(res.message);
        }
      })
    }

    this.ngxService.stop()
  }

  getLocations() {
    this.announce.getLocations().subscribe((res: any) => {
      this.Locations.push(...res.locations)
    })
  }

  getCategories() {
    this.announce.getCategories().subscribe((res: any) => {
      this.Categories.push(...res.categories)
      this.getSubCategories(this.Categories[0].name)
    })
  }
  getSubCategories(categoryName: string) {
    this.announce.getSubCategories(categoryName).subscribe((res: any) => {
      this.SubCategories = res.subCategories
    })
  }


}
