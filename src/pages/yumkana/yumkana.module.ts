import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YumkanaPage } from './yumkana';

@NgModule({
  declarations: [
    YumkanaPage,
  ],
  imports: [
    IonicPageModule.forChild(YumkanaPage),
  ],
})
export class YumkanaPageModule {}
