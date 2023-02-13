import { HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommentService } from 'src/app/services/comment.service';
import { TitleService } from 'src/app/services/title.service';

@Component({
  selector: 'app-story-detail',
  templateUrl: './story-detail.component.html',
  styleUrls: ['./story-detail.component.css'],
})
export class StoryDetailComponent {
  params = new HttpParams();
  item: any = {};
  comments: any = [];
  constructor(
    private route: ActivatedRoute,
    private titleService: TitleService,
    private commentService: CommentService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = params['id'];
      this.titleService.getItem(id).subscribe((item) => {
        this.item = item;

        for (const id of item.kids) {
          this.commentService.getComments(id).subscribe((comment) => {
            this.comments.push(comment);
            // console.log(comment, 'INI DARI STORY DETAIL');
          });
        }
      });
    });
  }

  backToHome() {
    window.history.back();
  }
}
