import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { Place } from '../interfaces/place.interface';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor(private firestore: Firestore) { }
  addPlace (place: Place){
    const placeRef= collection(this.firestore, "place")

    return addDoc(placeRef, place)
  }
}
