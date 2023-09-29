
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  previousCard: any = null;


  cards = [
    { title: '', description: 'https://w0.peakpx.com/wallpaper/456/416/HD-wallpaper-dove-peace.jpg', showFront: false, key: "1", completed: false },
    { title: '', description: 'https://w0.peakpx.com/wallpaper/456/416/HD-wallpaper-dove-peace.jpg', showFront: false, key: "1", completed: false },
    { title: '', description: 'https://www.konradlorenz.edu.co/wp-content/uploads/2023/01/2016_10_07_not_premio_nobel_paz.jpg', showFront: false, key: "2", completed: false },
    { title: '', description: 'https://www.konradlorenz.edu.co/wp-content/uploads/2023/01/2016_10_07_not_premio_nobel_paz.jpg', showFront: false, key: "2", completed: false },
    { title: '', description: 'https://cdn.aarp.net/content/dam/aarp/politics/events-and-history/2016/09/1140-mother-teresa-canonization-esp.imgcache.rev.web.700.402.jpg', showFront: false, key: "3", completed: false },
    { title: '', description: 'https://cdn.aarp.net/content/dam/aarp/politics/events-and-history/2016/09/1140-mother-teresa-canonization-esp.imgcache.rev.web.700.402.jpg', showFront: false, key: "3", completed: false },
    { title: '', description: 'https://urosario.edu.co/sites/default/files/2022-10/%60Los-treinta-anos-de-la-constitucion-politica_0.png', showFront: false, key: "4", completed: false },
    { title: '', description: 'https://urosario.edu.co/sites/default/files/2022-10/%60Los-treinta-anos-de-la-constitucion-politica_0.png', showFront: false, key: "4", completed: false },
    { title: '', description: 'https://caracol.com.co/resizer/R0O-DdCpn_DABj3i5nXDsgCpiWw=/768x576/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/7ZZXW5ABB5L2DOWW43PYXD6AMM.jpg', showFront: false, key: "5", completed: false },
    { title: '', description: 'https://caracol.com.co/resizer/R0O-DdCpn_DABj3i5nXDsgCpiWw=/768x576/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/7ZZXW5ABB5L2DOWW43PYXD6AMM.jpg', showFront: false, key: "5", completed: false },
    { title: '', description: 'https://concepto.de/wp-content/uploads/2018/08/onu-e1535740371229.jpg', showFront: false, key: "6", completed: false },
    { title: '', description: 'https://concepto.de/wp-content/uploads/2018/08/onu-e1535740371229.jpg', showFront: false, key: "6", completed: false },
    { title: '', description: 'https://ecodes.org/images/Agenda_Victor/Cruz-Roja.jpg', showFront: false, key: "7", completed: false },
    { title: '', description: 'https://ecodes.org/images/Agenda_Victor/Cruz-Roja.jpg', showFront: false, key: "7", completed: false },
    
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