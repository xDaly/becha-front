import { Injectable } from '@angular/core';
import FingerprintJS from '@fingerprintjs/fingerprintjs';
import { DeviceDetectorService } from 'ngx-device-detector';

@Injectable({
  providedIn: 'root'
})
export class UserinfoService {
  fpPromise = FingerprintJS.load();
  deviceInfo: any;

  constructor( private deviceService: DeviceDetectorService) {
   
  }
  async getInfo() {
    this.deviceInfo = this.deviceService.getDeviceInfo();
    const fp = await this.fpPromise
    const result = await fp.get()
    const visitorId = result.visitorId;
    let info = {}
    return info = {
      "FingerPrint": visitorId,
      "Device_Info": this.deviceInfo.userAgent.match(/\(([^)]+)\)/)[1],
      "User_Agent": this.deviceInfo.userAgent,
    }
    
  }
 


}
