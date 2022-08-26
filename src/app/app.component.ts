import { Component, TemplateRef, ElementRef  } from '@angular/core';
import { PlotAreaHoverEvent } from "@progress/kendo-angular-charts";
import { PopupService, PopupRef } from "@progress/kendo-angular-popup";
@Component({
    selector: 'my-app',
    template: `
    <ng-template #template>
      <p style="margin: 30px;">Popup content!</p>
    </ng-template>
      <kendo-chart (plotAreaHover)="onPlotAreaHover($event, template, null)">
        <kendo-chart-category-axis>
          <kendo-chart-category-axis-item [categories]="['A', 'B', 'C']">
              <kendo-chart-category-axis-item-crosshair>
                  <kendo-chart-category-axis-item-crosshair-tooltip #tooltip>
                  </kendo-chart-category-axis-item-crosshair-tooltip>
                  <kendo-chart-series-item-tooltip></kendo-chart-series-item-tooltip>
              </kendo-chart-category-axis-item-crosshair>
          </kendo-chart-category-axis-item>
        </kendo-chart-category-axis>
         <kendo-chart-value-axis>
          <kendo-chart-value-axis-item>
              <kendo-chart-value-axis-item-crosshair>
                  <kendo-chart-value-axis-item-crosshair-tooltip>
                  </kendo-chart-value-axis-item-crosshair-tooltip>
              </kendo-chart-value-axis-item-crosshair>
          </kendo-chart-value-axis-item>
        </kendo-chart-value-axis>
        <kendo-chart-series>
          <kendo-chart-series-item [data]="[1, 2, 3]">
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
      `
})
export class AppComponent {
  constructor(private popupService: PopupService) {}
  private popupRef: PopupRef;
  public onPlotAreaHover(args: PlotAreaHoverEvent, template: TemplateRef<{ [Key: string]: unknown }>, tooltip: ElementRef): void {
    
   // console.log(`Category: ${args.category}`);
       
    if (this.popupRef) {
      this.popupRef.popupElement.style.left =`${args.originalEvent.clientX}px`;
      console.log(`args.y: ${args.originalEvent.clientX}`);
      console.log(`Left: ${this.popupRef.popupElement.style.left}`);
      return;
    }
    this.popupRef = this.popupService.open({
      content: template,
      offset: { top: 0, left: 0 },
    });
  }
}
