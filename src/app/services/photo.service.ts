import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage'

import { Platform } from '@ionic/angular'

import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'
import { Filesystem } from '@capacitor/filesystem'

import { CapacitorPhoto } from '../models/capacitorPhoto.model';


@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photo: CapacitorPhoto = {
    filepath: '',
    webviewpath: './../assets/images/user.png',
    url: ''
  };

  constructor(private plataform: Platform, private fireStorage: AngularFireStorage) { }

  async takePhoto() {
    const image = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    })

    this.photo = {
      filepath: image.path,
      webviewpath: image.webPath,
      url: ''
    }
  }

  public async upload(name: string) {
    const photoName = name
    let file = null

    if (this.plataform.is('hybrid')) {
      const filePath = this.photo.filepath

      const readFile = await Filesystem.readFile({
        path: filePath
      });

      file = `data:image/jpeg;base64,${readFile.data}`
    } else {
      file = this.photo.webviewpath
    }

    const response = await fetch(file)
    const blob = await response.blob()
    const formData = new FormData()

    formData.append('file', blob, photoName)

    const foto = formData.get('file')
    const filepath = `userPhotos/${photoName}`

    const fileRef = this.fireStorage.ref(filepath)

    const result = this.fireStorage.upload(filepath, foto)

    return result.then(()=> fileRef)
  }
}
