import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-key-logger',
  standalone: true,
  imports: [],
  templateUrl: './key-logger.component.html',
  styleUrl: './key-logger.component.css',
})
export class KeyLoggerComponent implements OnInit {
  @ViewChild('keyContainer', { static: true }) input: ElementRef | undefined;
  keys = '';

  ngOnInit(): void {
    const logger$ = fromEvent<KeyboardEvent>(
      this.input?.nativeElement,
      'keyup'
    );
    logger$.subscribe((event) => (this.keys += event.key));
  }
}
