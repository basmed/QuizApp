import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  quizzes = [];

  currentQuiz:number = 0;
  answerSelected = false;
  correctAnswers = 0;
  incorrectAnswers = 0;
  shownAlready = [];
  randomize:number;
  
  result = false;
  resultStatus = 'Show Result';
  
  
    constructor(private quizService: QuizService, private router: Router) { }
  
    ngOnInit(): void {
      this.quizzes = this.quizService.getQuizzes();
      this.currentQuiz = this.getRandom();
      this.randomize = this.getRandom();
  
    }
  
    onAnswer(option: boolean){
      this.answerSelected = true;
      setTimeout(() => {
        this.currentQuiz++;
        this.randomize = this.getRandom()
        this.answerSelected = false;
      }, 300);
  
      if(option){
        this.correctAnswers++;
      }else{
        this.incorrectAnswers++;
      }
    }

    getRandom(){
      return Math.floor(Math.random() * this.quizzes.length);
    }
  
    showResult(){
      this.result = true;
      this.resultStatus = 'Play Again!';    
    }
    playAgain(){
      this.currentQuiz = 0;
      this.correctAnswers = 0;
      this.incorrectAnswers = 0;
    }
  

}
