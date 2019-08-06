/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ViewChild, ElementRef } from '@angular/core';
import { constants } from 'smooth-dnd';
const { wrapperClass, animationClass } = constants;
/** @type {?} */
const constantClasses = {
    [wrapperClass]: true,
    [animationClass]: true,
};
export class DraggableComponent {
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.wrapper.nativeElement.parentNode.className = constants.wrapperClass;
    }
}
DraggableComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: 'smooth-dnd-draggable',
                template: "<ng-container #draggableWrapper>\n    <ng-content></ng-content>\n</ng-container>"
            }] }
];
DraggableComponent.propDecorators = {
    wrapper: [{ type: ViewChild, args: ['draggableWrapper',] }]
};
if (false) {
    /** @type {?} */
    DraggableComponent.prototype.wrapper;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ2dhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbW9vdGgtZG5kLyIsInNvdXJjZXMiOlsic3JjL2RyYWdnYWJsZS9kcmFnZ2FibGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7TUFDakMsRUFDSixZQUFZLEVBQ1osY0FBYyxFQUNmLEdBQUcsU0FBUzs7TUFFUCxlQUFlLEdBQUc7SUFDdEIsQ0FBQyxZQUFZLENBQUMsRUFBRSxJQUFJO0lBQ3BCLENBQUMsY0FBYyxDQUFDLEVBQUUsSUFBSTtDQUN2QjtBQU9ELE1BQU0sT0FBTyxrQkFBa0I7Ozs7SUFFN0IsZUFBZTtRQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFlBQVksQ0FBQztJQUMzRSxDQUFDOzs7WUFURixTQUFTLFNBQUM7O2dCQUVULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLDRGQUF5QzthQUMxQzs7O3NCQUVFLFNBQVMsU0FBQyxrQkFBa0I7Ozs7SUFBN0IscUNBQW1EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGNvbnN0YW50cyB9IGZyb20gJ3Ntb290aC1kbmQnO1xuY29uc3Qge1xuICB3cmFwcGVyQ2xhc3MsXG4gIGFuaW1hdGlvbkNsYXNzXG59ID0gY29uc3RhbnRzO1xuXG5jb25zdCBjb25zdGFudENsYXNzZXMgPSB7XG4gIFt3cmFwcGVyQ2xhc3NdOiB0cnVlLFxuICBbYW5pbWF0aW9uQ2xhc3NdOiB0cnVlLFxufTtcblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdzbW9vdGgtZG5kLWRyYWdnYWJsZScsXG4gIHRlbXBsYXRlVXJsOiAnLi9kcmFnZ2FibGUuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIERyYWdnYWJsZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQge1xuICBAVmlld0NoaWxkKCdkcmFnZ2FibGVXcmFwcGVyJykgd3JhcHBlcjogRWxlbWVudFJlZjtcbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMud3JhcHBlci5uYXRpdmVFbGVtZW50LnBhcmVudE5vZGUuY2xhc3NOYW1lID0gY29uc3RhbnRzLndyYXBwZXJDbGFzcztcbiAgfVxufVxuIl19