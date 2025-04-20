import { Component, OnInit } from '@angular/core';
import { PollService } from '../poll.service';
import { Poll } from '../poll.models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-poll',
  imports: [CommonModule, FormsModule],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.css'
})
export class PollComponent implements OnInit {
  newPoll: Poll = { 
    question: '',
    options: [
      { optionText: '', voteCount: 0},
      { optionText: '', voteCount: 0}
    ]
  };

  polls: Poll[] = [];

  constructor(private pollService: PollService) {}

  ngOnInit(): void { // only load the polls when the component is initialized
    this.loadPolls();
  }

  // fetch all polls from backend
  loadPolls() {
    this.pollService.getPolls().subscribe({
      next: (data) => {
        this.polls = data;
      },
      error: (error) => {
        console.error("Error fetching polls: ", error);
      }
    });
  }

  createPoll() {
    this.pollService.createPoll(this.newPoll).subscribe({
      next: (createdPoll) => {
        this.polls.push(createdPoll);
        this.resetPoll();
      },
      error: (error) => {
        console.error("Error creating poll: ", error);
      } 
    })
  }

  vote(optionIndex: number ,pollId?: number) {
    this.pollService.vote(optionIndex, pollId).subscribe({
      next: () => {
        const poll = this.polls.find(p => p.id === pollId);
        if (poll) {
          poll.options[optionIndex].voteCount++;
        }
      },
      error: (error) => {
        console.error("Error voting on a poll: ", error);
      } 
    })
  }

  resetPoll() {
    this.newPoll = { 
      question: '',
      options: [
        { optionText: '', voteCount: 0},
        { optionText: '', voteCount: 0}
      ]
    };
  }

  addOption() {
    this.newPoll.options.push({ optionText: '', voteCount: 0});
  }

  trackByIndex(index: number): number {
    return index;
  }
}
