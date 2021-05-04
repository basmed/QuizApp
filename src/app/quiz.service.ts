import { Injectable } from '@angular/core';

interface Quiz{
    question: string;
    answer: { option: string, correct: boolean } [];
}

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  quizzes: Quiz[] = [
    {
      question: 'What\'s the capital of Somalia',
      answer: [
        { option: 'Nairobi', correct: false },
        { option: 'Asmara', correct: false },
        { option: 'Mogadishu', correct: true },
        { option: 'Addis Ababa', correct: false },
      ]
    },
    {
      question: 'What\'s the capital of Mexico',
      answer: [
        { option: 'Guadalajara City', correct: false },
        { option: 'Puebla City', correct: false },
        { option: 'Mexico City', correct: true },
        { option: 'Cancún', correct: false },
      ]
    },
    {
      question: 'What\'s the capital of the UK',
      answer: [
        { option: 'London', correct: true },
        { option: 'Asmara', correct: false },
        { option: 'Paris', correct: false },
        { option: 'Berlin', correct: false }
      ]
    },
    {
      question: 'What\'s the capital of the USA',
      answer: [
        { option: 'Los Angeles', correct: false },
        { option: 'New York', correct: false },
        { option: 'Washington DC', correct: true },
        { option: 'Boston', correct: false }
      ]
    },
    {
      question: 'What\'s the capital of the UAE',
      answer: [
        { option: 'Dubai', correct: false },
        { option: 'Abu Dhabi', correct: true },
        { option: 'Doha', correct: false },
        { option: 'Riyadh', correct: false }
      ]
    },
    {
      question: 'What\'s the capital of Japan',
      answer: [
        { option: 'Osaka', correct: false },
        { option: 'Seoul', correct: false },
        { option: 'Tokyo', correct: true },
        { option: 'Pyongyang', correct: false }
      ]
    },
    {
      question: 'What\'s the capital of South Africa',
      answer: [
        { option: 'Maputo', correct: false },
        { option: 'Johannesburg', correct: false },
        { option: 'Pretoria', correct: true },
        { option: 'Cape Town', correct: false }
      ]
    },
    {
      question: 'What\'s the capital of Brazil',
      answer: [
        { option: 'Buenos Aires', correct: false },
        { option: 'Sao Paulo', correct: false },
        { option: 'Brasília', correct: true },
        { option: 'Rio de Janeiro', correct: false },
      ]
    },
    {
      question: 'What\'s the capital of Jamaica',
      answer: [
        { option: 'Brasília', correct: false },
        { option: 'Portmore ', correct: false },
        { option: 'Asunción', correct: true },
        { option: 'Saint Catherine ', correct: false }
      ]
    },
    {
      question: 'What\'s the capital of Cuba',
      answer: [
        { option: 'Montevideo', correct: false },
        { option: 'Santa Clara', correct: false },
        { option: 'Havana', correct: true },
        { option: 'Camagüey', correct: false }
      ]
    }
  ]



  getQuizzes(){
    return this.quizzes;
  }
}
