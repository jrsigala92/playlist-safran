import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor(private httpclient: HttpClient) { }

  searchSong(name: string) {
    const API_KEY = `8502892fab72c3a8ad2fdbf5c14b9521`;
    const API_URL = `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${name}&api_key=${API_KEY}&format=json`;
    return this.httpclient.get(API_URL).toPromise();
  //   return [{
  //     name: 'Seek and destroy',
  //     artist: 'metallica',
  //     url: 'http://lastfm.com'
  //   },
  //   {
  //     name: 'Enter sandman',
  //     artist: 'metallica',
  //     url: 'lastfm.com'
  //   },
  //   {
  //     name: 'Seek and destroy',
  //     artist: 'metallica',
  //     url: 'lastfm.com'
  //   }
  //   , {
  //   name: 'Seek and destroy',
  //   artist: 'metallica',
  //   url: 'lastfm.com'
  // }];
  }
}
