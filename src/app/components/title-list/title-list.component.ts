import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from '../../services/title.service';

@Component({
  selector: 'app-title-list',
  templateUrl: './title-list.component.html',
  styleUrls: ['./title-list.component.css'],
})
export class TitleListComponent implements OnInit {
  ids: number[] = [];
  items: { [key: number]: any } = {};

  constructor(private titleService: TitleService, private router: Router) {}
  ngOnInit() {
    let storeIds = sessionStorage.getItem('ids');
    if (!storeIds) {
      this.titleService.getIds().subscribe((ids: number[]) => {
        this.ids = ids;
        sessionStorage.setItem('ids', JSON.stringify(this.ids));
        for (const id of ids) {
          this.titleService.getItem(id).subscribe((item) => {
            sessionStorage.setItem(`story-${id}`, JSON.stringify(item));
            this.items[id] = item;
          });
        }
      });
    } else {
      this.ids = JSON.parse(storeIds);
      for (const id of this.ids) {
        let storeItem = sessionStorage.getItem(`story-${id}`);
        if (storeItem) {
          this.items[id] = JSON.parse(storeItem);
        }
      }
    }
  }

  goToDetails(id: number) {
    this.router.navigate(['/story', id]);
  }
}
