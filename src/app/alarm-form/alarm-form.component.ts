import { Component, OnInit } from '@angular/core';
import { Choices } from '../choices';
import { CHOICES } from '../choices-list';
import { QUESTIONS } from '../questions-list';
import { NgForm, FormControl } from '@angular/forms';




@Component({
  selector: 'app-alarm-form',
  templateUrl: './alarm-form.component.html',
  styleUrls: ['./alarm-form.component.css']
})
export class AlarmFormComponent implements OnInit {
    
  greenInt = 0;
  yellowInt= 0;
  redInt = 0;

  myGreenEvent(greenInt) {
    greenInt = greenInt+1;
  }

  myYellowEvent(yellowInt) {
    yellowInt = yellowInt+1;
  }

  myRedEvent(redInt) {
    redInt = redInt+1;
  }

    ticketNum = new FormControl('');
    customerName = new FormControl('');
    affectedAsset = new FormControl('');
    accountName = new FormControl('');
    alarmImpact = new FormControl('');
    alarmRelevancy = new FormControl('');
    alarmType = new FormControl('');
    availabilityMon = new FormControl('');
    ciaTriad = new FormControl('');
    eventVolume = new FormControl('');
    dataExtracted = new FormControl('');
    gainAccess = new FormControl('');
    howLong = new FormControl('');
    maliciousIntent = new FormControl('');
    matchingVuln = new FormControl('');
    riskLevel = new FormControl('');
    sensitiveInfo = new FormControl('');
    timeTaken = new FormControl('');
    

    choices: Choices = {
      green: 'bcowing',
      yellow: 'bcowing1',
      red: 'bcowing2',
      name: 'bcowing3',
      nameG: 'bcowing4',
   };


   choiceS = CHOICES;
   
   submitted = false;

   onSubmit(form: NgForm){
    this.submitted = true;
    console.log(form);
  }

  constructor() { }

  ngOnInit() {
  }

}
