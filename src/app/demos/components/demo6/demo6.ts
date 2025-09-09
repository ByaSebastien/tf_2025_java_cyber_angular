import {Component, inject} from '@angular/core';
import {YuGiOhService} from './services/yu-gi-oh.service';
import {YuGiOhResult} from './models/yu-gi-oh-card';

@Component({
  selector: 'app-demo6',
  imports: [
  ],
  templateUrl: './demo6.html',
  styleUrl: './demo6.scss'
})
export class Demo6 {

  private readonly _yuGiOhService: YuGiOhService = inject(YuGiOhService);

  yuGiOhResult!: YuGiOhResult;
  // yuGiOhResult$!: Observable<YuGiOhResult>;
  // yuGiOhResultSignal!: Signal<YuGiOhResult | undefined>;


  constructor() {
    this.getCards('https://db.ygoprodeck.com/api/v7/cardinfo.php?offset=0&num=10&language=fr');
  }

  previous() {
    if(!this.yuGiOhResult.meta.previous_page) {
      return;
    }
    this.getCards(this.yuGiOhResult.meta.previous_page);
  }

  next() {
    if(!this.yuGiOhResult.meta.next_page) {
      return;
    }
    this.getCards(this.yuGiOhResult.meta.next_page);
  }

  getCards(url: string) {

    this._yuGiOhService.getCards(url).subscribe(
      result => {
        this.yuGiOhResult = result;
      }
    );

    // this._yuGiOhService.getCards(url).subscribe({
    //   next: (result) => {
    //     this.yuGiOhResult = result;
    //   },
    //   error: (err) => {
    //     console.log(err);
    //   },
    // });

    // this.yuGiOhResult$ = this._yuGiOhService.getCards(url);
    //
    // this.yuGiOhResultSignal= toSignal<YuGiOhResult>(this._yuGiOhService.getCards(url));
  }

}
