import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class ProgressBarService {

  loading: BehaviorSubject<boolean>;

  constructor() {
    this.loading = new BehaviorSubject<boolean>(false);
  }

  start(): void {
    this.loading.next(true);
  }

  stop(): void {
    this.loading.next(false);
  }

  state = () => this.loading.asObservable();
}
