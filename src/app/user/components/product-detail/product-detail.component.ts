import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnounceService } from '../../services';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @ViewChild('inputElement', { static: false }) inputElement: any;
  @ViewChildren('inputElement') inputElements: any;
  productlink: any
  productinfo: any
  imgurl = "http://localhost:81/productimages/"
  id: any
  images: any
  showed: any
  constructor(private route: ActivatedRoute, private announce: AnnounceService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id
    this.getAnnounceById()

    window.scrollTo(0, 0)
    this.productlink = window.location.href
  }
  copyInputMessage(inputElement: any) {
    inputElement.select();
    document.execCommand('copy');
    inputElement.setSelectionRange(0, 0);
  }
  getAnnounceById() {
    this.announce.getAnnounceById(this.id).subscribe((res: any) => {
      this.productinfo = res.announce
      this.images = res.images
      this.showed = "http://localhost:81/productimages/" + this.images[0].id + "." + this.images[0].extention
    })
  }

  select(id: any, extention: any) {
    this.showed = this.imgurl + id + "." + extention
  }


}
