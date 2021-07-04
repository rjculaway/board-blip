import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection
} from "@angular/fire/firestore";

import { Billboard } from "@interfaces/billboard";

@Injectable({
  providedIn: "root"
})
export class BillboardService {
  private readonly collection = "/billboards";
  billboards: AngularFirestoreCollection<Billboard>;

  constructor(private db: AngularFirestore) {
    this.billboards = db.collection(this.collection);
  }

  getAll(): AngularFirestoreCollection<Billboard> {
    return this.billboards;
  }

  create(billboard: Billboard): Promise<any> {
    return this.billboards.add(billboard);
  }

  update(documentId: string, billboard: Billboard): Promise<any> {
    return this.billboards.doc(documentId).update(billboard);
  }

  delete(documentId: string): Promise<any> {
    return this.billboards.doc(documentId).delete();
  }
}
