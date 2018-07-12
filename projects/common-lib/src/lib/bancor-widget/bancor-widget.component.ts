import { Component, OnInit } from '@angular/core';
declare var BancorConvertWidget:any;
@Component({
  selector: 'canyalib-bancor-widget',
  templateUrl: './bancor-widget.component.html',
  styleUrls: ['./bancor-widget.component.css']
})
export class BancorWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {   
        BancorConvertWidget.init({
                'type': '1',
                'baseCurrencyId': '5a6f61ece3de16000123763a',
                'pairCurrencyId': '5937d635231e97001f744267',
                'primaryColor': '#00BFFF',
                'primaryColorHover': '55DAFB'
        });   
  }

}
