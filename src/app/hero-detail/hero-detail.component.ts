import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroServiceService } from '../hero-service.service';
import {Hero} from '../heroes/hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(private route : ActivatedRoute , private heroService : HeroServiceService , private location : Location) { }

   hero ?: Hero;

  ngOnInit(): void {
    this.getHero();
  }


  getHero() : void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero => this.hero = hero);
  }

  goBack()
  {
    this.location.back();
  }

}
