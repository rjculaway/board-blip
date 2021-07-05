import { Injectable } from "@angular/core";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

import { Billboard } from "@interfaces/billboard";

@Injectable({
  providedIn: "root"
})
export class BillboardService {
  private readonly collection = "/billboards";
  private billboards: AngularFirestoreCollection<Billboard>;

  constructor(private db: AngularFirestore) {
    this.billboards = db.collection(this.collection);
  }

  getById(id: string): AngularFirestoreDocument<Billboard> {
    return this.billboards.doc(id);
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
