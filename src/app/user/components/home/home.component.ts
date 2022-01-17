import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AnnounceService } from '../../services';
import { Location, Category, SubCategory } from '../../models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgurl = "http://localhost:81/announceimages/"


  announces: any[] = []
  Locations: Location[] = [];
  Categories: Category[] = [];
  SubCategories: SubCategory[] = [];
  selectedcategory: Category = {
    id: 'null',
    name: 'Tous les categories'
  }
  searchinfo: any = {
    title: '',
    category: '',
    sub_category: '',
    location: '',
    sort: '',
  }

  constructor(private announce: AnnounceService) { }

  ngOnInit(): void {
    this.getCategories()
    this.getAnnounces()
    this.getLocations()
    window.scrollTo(0, 0)
  }

  register(f: NgForm) {
    this.searchAnnounces(f.value)
  }
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  getAnnounces() {
    this.announce.getAnnounces().subscribe((res: any) => {
      this.announces = res.announces.announces
    })
  }
  getLocations() {
    this.announce.getLocations().subscribe((res: any) => {
      this.Locations.push(...res.locations)
    })
  }

  getCategories() {
    this.announce.getCategories().subscribe((res: any) => {
      this.Categories.push(...res.categories)
    })
  }
  getSubCategories(categoryName: string) {
    if (categoryName) {
      this.announce.getSubCategories(categoryName).subscribe((res: any) => {
        this.SubCategories = res.subCategories
      })
    } if (categoryName === '') {
      this.SubCategories = []
    }

  }

  searchAnnounces(f:any) {
    this.announce.searchAnnounces(f).subscribe((res: any) => {
      this.announces = res.announces.announces
    })
  }

}
