import { Component } from '@angular/core';
import { IonicPage, NavController ,AlertController, NavParams, MenuController } from 'ionic-angular';
import {Http, Headers, RequestOptions}  from "@angular/http";

import { EnrollNowPage } from '../enroll-now/enroll-now';
import { PersonalDetailsPage } from '../personal-details/personal-details';
import { LoginPage } from '../login/login';
import { LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';

/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


/**
 * Ionic page
 */
@IonicPage()
@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {
  items: any;
username:any;
program_name:any;


  /**
   * Creates an instance of courses page.
   * @param navCtrl 
   * @param alertCtrl 
   * @param http 
   * @param loading 
   * @param navParams 
   * @param menuCtrl 
   */
  constructor(public navCtrl: NavController,public alertCtrl: AlertController, public http:Http, public loading: LoadingController, public navParams: NavParams, public menuCtrl: MenuController) {
  this.enrollement();
  }
  /**
   * Courses page
   */
  CoursesPage() {
    this.navCtrl.push(CoursesPage);
  }

  /**
   * Enrolls now page
   */
  EnrollNowPage() {
    this.navCtrl.push(EnrollNowPage);
  }

  /**
   * Homes page
   */
  HomePage() {
    this.navCtrl.popToRoot();
  }
  /**
   * Personals details page
   */
  PersonalDetailsPage(){
    this.navCtrl.push(PersonalDetailsPage);
  }
  /**
   * Logins page
   */
  LoginPage() {
    this.navCtrl.push(LoginPage);
  }
  /**
   * Ions view did enter
   */
  ionViewDidEnter() {
    this.menuCtrl.enable(true, 'filters-3')
  }
  /**
   * Shows filters
   */
  showFilters() {
    this.menuCtrl.open('filters-3');
  }

  /**
   * Hides filters
   */
  hideFilters() {
    this.menuCtrl.close('filters-3');
  }
  /**
   * Ions view did load
   */
  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursesPage');
  }
  /**
   * Enrollements courses page
   */
  enrollement(){
    this.username = this.navParams.get('username');
    this.program_name = this.navParams.get('program_name');
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    let data = {
    username: this.username,
    program_name: this.program_name
 
    };
    let loader = this.loading.create({
      content: 'Processing please wait...',
    });
    loader.present().then(() => { 
      this.http.post('http://127.0.0.1:8080/ionicphp/student_audit.php', data, options)
        .map(res => res.json())
        .subscribe(res => {
          
          loader.dismiss()
          this.items = res.server_response;
          console.log(this.items); 
        });
    });
  }
}