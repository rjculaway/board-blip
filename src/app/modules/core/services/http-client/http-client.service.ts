import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { HttpRequestOptions } from "@interfaces/http-request-options";

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  private options: HttpRequestOptions = {};

  constructor(private httpClient: HttpClient) {}

  public Get<T>(endPoint: string, options?: HttpRequestOptions): Observable<T> {
    if (!options) {
      options = this.options;
    }

    return this.httpClient.get<T>(endPoint, options);
  }

  public Post<T>(
    endPoint: string,
    params: any,
    options?: HttpRequestOptions
  ): Observable<T> {
    if (!options) {
      options = this.options;
    }

    return this.httpClient.post<T>(endPoint, params, options);
  }
}
