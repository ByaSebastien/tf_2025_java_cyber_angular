import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {YuGiOhResult} from '../models/yu-gi-oh-card';

@Injectable({
  providedIn: 'root'
})
export class YuGiOhService {

  private readonly _http: HttpClient = inject(HttpClient);

  getCards(url: string) {
    return this._http.get<YuGiOhResult>(url);
  }
}
