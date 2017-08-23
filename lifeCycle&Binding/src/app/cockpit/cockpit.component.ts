import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = '';
  //newServerContent = '';
  @ViewChild('inputServerContent') serverContent :ElementRef;


  constructor() { }

  ngOnInit() {
  }
  onAddServer(serverName: HTMLInputElement) {
    if(serverName.value == '' || this.serverContent.nativeElement.value == ''){
      this.serverCreated.emit({
        serverName: 'Error Message',
        serverContent: 'Please enter some information!'
      })
    }else{
      this.serverCreated.emit({
        serverName: serverName.value,
        serverContent: this.serverContent.nativeElement.value
      })
    }
  }


  onAddBlueprint(serverName: HTMLInputElement) {
    if(serverName.value=='' || this.serverContent.nativeElement.value==''){
      this.blueprintCreated.emit({serverName: 'Error Message', serverContent: 'Please enter some information!'})
    }
    else{
      this.blueprintCreated.emit({
        serverName: serverName.value,
        serverContent: this.serverContent.nativeElement.value
      })
    }
  }
}
