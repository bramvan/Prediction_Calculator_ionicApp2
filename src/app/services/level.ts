import {Injectable} from '@angular/core';
import 'rxjs/Rx';
/*
class Level{
  constr(id, aantal);
  constr(level){
    this(level.id,level.aantalmoves...)
  }
}*/


@Injectable()
export class Level {

   ls: any;
   lid :any;

  constructor(){
    this.ls = [
    {levelId:'1', aantalMoves:1, uitkomst:1,beginwaarden:0,bewerkingen:['+ 1','- 1']},
    {levelId:'2', aantalMoves:2, uitkomst:2,beginwaarden:0,bewerkingen:['+ 4','- 2']},
    {levelId:'3', aantalMoves:5, uitkomst:1,beginwaarden:0,bewerkingen:['+ 5','- 1']},
    {levelId:'4', aantalMoves:3, uitkomst:8,beginwaarden:0,bewerkingen:['+ 3','+ 2', '+ 7']},
    {levelId:'5', aantalMoves:3, uitkomst:6,beginwaarden:5,bewerkingen:['x 5', '- 5','+ 5', '/ 5']},
    {levelId:'6', aantalMoves:3, uitkomst:8,beginwaarden:14,bewerkingen:['- 6', '- 10', 'x 4']},
    {levelId:'7', aantalMoves:4, uitkomst:20,beginwaarden:20,bewerkingen:['+ 22', 'x 10', 'x 2' , '/ 5', '- 1']},
    {levelId:'8', aantalMoves:3, uitkomst:30,beginwaarden:20,bewerkingen:['x 10', '/ 5', '+ 22', '- 2', 'x 2' ,]},
    {levelId:'9', aantalMoves:2, uitkomst:1,beginwaarden:0,bewerkingen:['0 -> 2','- 1']},
    {levelId:'10', aantalMoves:4, uitkomst:4,beginwaarden:1,bewerkingen:['0 -> 1','1 -> 2', '2 -> 3', '3 -> 4']},
    {levelId:'11', aantalMoves:1, uitkomst:1,beginwaarden:0,bewerkingen:['+1','-1']},
    {levelId:'12', aantalMoves:1, uitkomst:1,beginwaarden:0,bewerkingen:['+1','-1']},
    {levelId:'13', aantalMoves:1, uitkomst:1,beginwaarden:0,bewerkingen:['+1','-1']},
    {levelId:'14', aantalMoves:1, uitkomst:1,beginwaarden:0,bewerkingen:['+1','-1']},
    {levelId:'15', aantalMoves:1, uitkomst:1,beginwaarden:0,bewerkingen:['+1','-1']},
    {levelId:'16', aantalMoves:1, uitkomst:1,beginwaarden:0,bewerkingen:['+1','-1']},
    ];
  }
  getLevels(){
      return this.ls;
  }
  getLevel(id){
    this.ls.forEach(l =>{
      
        if(id == l.levelId){
          this.lid = l;
        }
        
      });

      return this.lid;
  }

  
}
