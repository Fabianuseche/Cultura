
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  previousCard: any = null;


  cards = [
    { title: '', description: 'assets/1.jpg', showFront: false, key: "1", completed: false },
    { title: '', description: 'assets/1.jpg', showFront: false, key: "1", completed: false },
    { title: '', description: 'assets/2.jpg', showFront: false, key: "2", completed: false },
    { title: '', description: 'assets/2.jpg', showFront: false, key: "2", completed: false },
    { title: '', description: 'assets/3.png', showFront: false, key: "3", completed: false },
    { title: '', description: 'assets/3.png', showFront: false, key: "3", completed: false },
    { title: '', description: 'assets/4.jpg', showFront: false, key: "4", completed: false },
    { title: '', description: 'assets/4.jpg', showFront: false, key: "4", completed: false },
    { title: '', description: 'assets/5.webp', showFront: false, key: "5", completed: false },
    { title: '', description: 'assets/5.webp', showFront: false, key: "5", completed: false },
    { title: '', description: 'assets/6.jpg', showFront: false, key: "6", completed: false },
    { title: '', description: 'assets/6.jpg', showFront: false, key: "6", completed: false },
    { title: '', description: 'assets/7.png', showFront: false, key: "7", completed: false },
    { title: '', description: 'assets/7.png', showFront: false, key: "7", completed: false },
    { title: '', description: 'assets/8.avif', showFront: false, key: "8", completed: false },
    { title: '', description: 'assets/8.avif', showFront: false, key: "8", completed: false },

  ];
 restartCard=[
  { title: 'REINICIAR EL JUEGO',  showFront: true, }
 ]

 ngOnInit(){
  this.Sort()
 }

 Sort(){
  for (let i = this.cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
  }
 }
 restarGame() {
  this.Sort()
  for (const card of this.cards) {
    card.showFront = false;
    card.completed= false;
  }
}

  flipCard(card: any) {
    if (card.completed == true) {
      return
    }

    if (card == this.previousCard) { return }

    card.showFront = !card.showFront

    // si nohay carta
    if (this.previousCard == null) {
      this.previousCard = card // seleccionaa la carta


    } else {
      if (card.key === this.previousCard.key) {
        this.previousCard.completed = true;
        card.completed = true;
        this.previousCard = null
      } else {
        setTimeout(()=>{
          this.previousCard.showFront = false
          card.showFront = false
          this.previousCard = null
        },1000);
      }

    }
  }
}
