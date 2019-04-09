import { Component } from '@angular/core';

import { CoursesPage } from '../courses/courses';
import { EnrollNowPage } from '../enroll-now/enroll-now';
import { HomePage } from '../home/home';
import { PersonalDetailsPage } from '../personal-details/personal-details';
import { ProgramCalenderPage } from '../program-calender/program-calender';
import { MyProgramPage } from '../my-program/my-program';
import { AdminPage } from '../admin/admin';

/**
 * Component
 */
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CoursesPage;
  tab3Root = EnrollNowPage;
  tab4Root = PersonalDetailsPage;
  tab5Root = ProgramCalenderPage;
  tab6Root = MyProgramPage;
  tab7Root = AdminPage;

  /**
   * Creates an instance of tabs page.
   */
  constructor() {

  }
}
