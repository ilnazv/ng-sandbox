import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

export interface IItem {
  id?: string;
  description: string;
  img: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.less']
})
export class PortfolioComponent implements OnInit {
  itemCollectionRef: any;
  items: Observable<IItem[]>;
  newItem: IItem = {
    description: '',
    img: ''
  };
  showSpinner = true;

  constructor(private snackBar: MatSnackBar, private db: Firestore) { }

  ngOnInit() {
    this.itemCollectionRef = collection(this.db, 'items');
    this.items = collectionData(this.itemCollectionRef).pipe(
      map(actions => {
        this.showSpinner = false;
        return actions.map(action => {
          const data = action.payload.doc.data() as IItem;
          return { ...data };
        });
      })
    );
  }

  addItem() {
    this.itemCollectionRef.add(this.newItem);
    this.newItem = {
      description: '',
      img: ''
    }
    this.notify('Новый проект добавлен. 🐶');
  }

  deleteItem(id: string) {
    this.itemCollectionRef.doc(id).delete().then(() => {
      this.notify('Проект удалён. 🐶');
    });
  }

  private notify(message: string) {
    this.snackBar.open(message, null, {
      duration: 1000,
    });
  }

  public like() {
    this.notify('Спасибо. 👍');
  }

  public dislike() {
    this.notify('И зачем ты меня расстроил? 😢');
  }
}
