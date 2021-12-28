import { SummarizerService } from './sumarizer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  inputText: string
  summary_text: string

  constructor(private summarizerService: SummarizerService) { }

  ngOnInit(): void {

  }
  summarize() {
    this.summarizerService.summarize(this.inputText).subscribe(response => {
      this.summary_text = response.data
    })
  }
}
