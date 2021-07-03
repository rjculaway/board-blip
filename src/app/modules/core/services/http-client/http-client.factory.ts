
import { HttpClient } from '@angular/common/http';
import { HttpClientService } from './http-client.service';

export function httpClientFactory(httpClient: HttpClient): HttpClientService {
	return new HttpClientService(httpClient);
}

export const httpClientProvider = [{
	provide: HttpClientService,
	useFactory: httpClientFactory,
	deps: [HttpClient]
}];