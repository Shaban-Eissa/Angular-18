import {
  Directive,
  Input,
  OnInit,
  ViewContainerRef,
  TemplateRef,
} from '@angular/core';

@Directive({
  selector: '[appPermission]',
  standalone: true,
})
export class PermissionDirective implements OnInit {
  @Input() appPermission: string[] = [];
  private currentRole = 'admin';
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    if (this.appPermission.indexOf(this.currentRole) === -1) {
      this.viewContainer.clear();
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}
