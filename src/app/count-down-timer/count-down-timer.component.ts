import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
@Component({
  selector: 'app-count-down-timer',
  templateUrl: './count-down-timer.component.html',
  styleUrls: ['./count-down-timer.component.css'],
})
export class CountDownTimerComponent implements OnInit, OnDestroy {
  private subscription: Subscription | undefined;

  public dateNow = new Date();
  public dDay = new Date('Oct 23 2021 15:00:00');
  // public dDay = new Date('Oct 17 2021 23:23:00');
  milliSecondsInASecond = 1000;
  hoursInADay = 24;
  minutesInAnHour = 60;
  SecondsInAMinute = 60;
  finish = false;

  public timeDifference: number | undefined;
  public secondsToDday: number | undefined;
  public minutesToDday: number | undefined;
  public hoursToDday: number | undefined;
  public daysToDday: number | undefined;


  private getTimeDifference() {
    this.timeDifference = this.dDay.getTime() - new Date().getTime();
    this.allocateTimeUnits(this.timeDifference);


    if (this.timeDifference <= 0){
      this.finish = true;
    }
  }

  private allocateTimeUnits(timeDifference: number) {
    this.secondsToDday = Math.floor(
      (timeDifference / this.milliSecondsInASecond) % this.SecondsInAMinute
    );
    this.minutesToDday = Math.floor(
      (timeDifference / (this.milliSecondsInASecond * this.minutesInAnHour)) %
      this.SecondsInAMinute
    );
    this.hoursToDday = Math.floor(
      (timeDifference /
        (this.milliSecondsInASecond *
          this.minutesInAnHour *
          this.SecondsInAMinute)) %
      this.hoursInADay
    );
    this.daysToDday = Math.floor(
      timeDifference /
      (this.milliSecondsInASecond *
        this.minutesInAnHour *
        this.SecondsInAMinute *
        this.hoursInADay)
    );
  }

  ngOnInit() {
    this.subscription = interval(1000).subscribe((x) => {
      this.getTimeDifference();
    });
  }

  ngOnDestroy() {
    // @ts-ignore
    this.subscription.unsubscribe();
  }
}
