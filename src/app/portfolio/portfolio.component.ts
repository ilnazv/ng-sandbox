import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
  itemCollectionRef: AngularFirestoreCollection<IItem>;
  items: Observable<IItem[]>;
  newItem: IItem = {
    description: '',
    img: ''
  };
  showSpinner = true;

  constructor(private snackBar: MatSnackBar, private db: AngularFirestore) { }

  ngOnInit() {
    this.itemCollectionRef = this.db.collection<IItem>('items');
    this.items = this.itemCollectionRef.snapshotChanges().pipe(
      map(actions => {
        return actions.map(action => {
          const data = action.payload.doc.data() as IItem;
          const id = action.payload.doc.id;
          this.showSpinner = false;
          return { id, ...data };
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
