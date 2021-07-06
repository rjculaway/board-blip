import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { Geopoint } from "@interfaces/geopoint";
import { MapMarker } from "@interfaces/map-marker";

@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.component.html",
  styleUrls: ["./google-maps.component.scss"]
})
export class GoogleMapsComponent implements OnInit {
  @Input() markers: Array<MapMarker>;
  @Input() height: number;
  @Output() addMarkerEvent: EventEmitter<Geopoint> = new EventEmitter<
    Geopoint
  >();

  center: google.maps.LatLngLiteral;
  mapOptions: google.maps.MapOptions;
  mapHeight: string;

  constructor() {}

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
    });

    this.mapOptions = {
      disableDoubleClickZoom: true,
      maxZoom: 15,
      minZoom: 10
    };

    if (this.height) {
      this.mapHeight = `${this.height}px`;
    } else {
      this.mapHeight = "300px";
    }
  }

  click({ latLng }: google.maps.MouseEvent) {
    const lat = latLng.lat();
    const lng = latLng.lng();

    this.markers = [];
    this.addMarker(lat, lng);
    this.addMarkerEvent.emit({ latitude: lat, longitude: lng });
  }

  private addMarker(lat: number, lng: number) {
    if (!this.markers) {
      this.markers = [];
    }

    this.markers.push({
      position: {
        lat,
        lng
      }
    });
  }
}
