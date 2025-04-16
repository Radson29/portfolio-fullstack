import { Component } from '@angular/core';
import { SectionHeaderComponent } from "../section-header/section-header.component";
import { ProjectSmallComponent } from "./project-small/project-small.component";
import { ProjectCarDealershipComponent } from "./project-big/car-dealership-component";
import { ProjectMathComponent } from './project-big/project-math.component';
import { MedisyncComponent } from './project-big/medisync.component';

@Component({
  selector: 'app-project-section',
  imports: [SectionHeaderComponent, ProjectSmallComponent,ProjectCarDealershipComponent, ProjectMathComponent,MedisyncComponent],
  templateUrl: './project-section.component.html',
  styleUrl: './project-section.component.scss'
})
export class ProjectSectionComponent {

}
