/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ContentChildren, QueryList, ViewChild, ElementRef, Input, Output, EventEmitter, NgZone } from '@angular/core';
import { DraggableComponent } from '../draggable/draggable.component';
import { dropHandlers, smoothDnD } from 'smooth-dnd';
smoothDnD.dropHandler = dropHandlers.reactDropHandler().handler;
smoothDnD.wrapChild = false;
/**
 * @record
 */
export function DragStartEndInfo() { }
if (false) {
    /** @type {?} */
    DragStartEndInfo.prototype.isSource;
    /** @type {?} */
    DragStartEndInfo.prototype.payload;
    /** @type {?} */
    DragStartEndInfo.prototype.willAcceptDrop;
}
export class ContainerComponent {
    /**
     * @param {?} _ngZone
     */
    constructor(_ngZone) {
        this._ngZone = _ngZone;
        this.dragStart = new EventEmitter();
        this.dragEnd = new EventEmitter();
        this.drop = new EventEmitter();
        this.dropReady = new EventEmitter();
        this.dragEnter = new EventEmitter();
        this.dragLeave = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.container = smoothDnD(this.containerElementRef.nativeElement, this.getOptions());
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.container.dispose();
    }
    /**
     * @private
     * @return {?}
     */
    getOptions() {
        /** @type {?} */
        const options = {};
        if (this.orientation)
            options.orientation = this.orientation;
        if (this.behaviour)
            options.behaviour = this.behaviour;
        if (this.groupName)
            options.groupName = this.groupName;
        if (this.lockAxis)
            options.lockAxis = this.lockAxis;
        if (this.dragHandleSelector)
            options.dragHandleSelector = this.dragHandleSelector;
        if (this.nonDragAreaSelector)
            options.nonDragAreaSelector = this.nonDragAreaSelector;
        if (this.dragBeginDelay)
            options.dragBeginDelay = this.dragBeginDelay;
        if (this.animationDuration)
            options.animationDuration = this.animationDuration;
        if (this.autoScrollEnabled)
            options.autoScrollEnabled = this.autoScrollEnabled;
        if (this.dragClass)
            options.dragClass = this.dragClass;
        if (this.dropClass)
            options.dropClass = this.dropClass;
        if (this.dropPlaceholder)
            options.dropPlaceholder = this.dropPlaceholder;
        if (this.dragStart)
            options.onDragStart = (info) => {
                this.getNgZone(() => {
                    this.dragStart.emit(info);
                });
            };
        if (this.dragEnd)
            options.onDragEnd = (info) => {
                this.getNgZone(() => {
                    this.dragEnd.emit(info);
                });
            };
        if (this.drop)
            options.onDrop = (dropResult) => {
                this.getNgZone(() => {
                    this.drop.emit(dropResult);
                });
            };
        if (this.getChildPayload)
            options.getChildPayload = this.getChildPayload;
        if (this.shouldAnimateDrop)
            options.shouldAnimateDrop = this.shouldAnimateDrop;
        if (this.shouldAcceptDrop)
            options.shouldAcceptDrop = this.shouldAcceptDrop;
        if (this.dragEnter)
            options.onDragEnter = () => this.getNgZone(() => this.dragEnter.emit());
        if (this.dragLeave)
            options.onDragLeave = () => this.getNgZone(() => this.dragLeave.emit());
        if (this.dropReady)
            options.onDropReady = (dropResult) => {
                this.getNgZone(() => {
                    this.dropReady.emit(dropResult);
                });
            };
        if (this.getGhostParent)
            options.getGhostParent = this.getGhostParent;
        return options;
    }
    /**
     * @private
     * @param {?} clb
     * @return {?}
     */
    getNgZone(clb) {
        this._ngZone.run(() => {
            clb();
        });
    }
}
ContainerComponent.decorators = [
    { type: Component, args: [{
                // tslint:disable-next-line:component-selector
                selector: "smooth-dnd-container",
                template: "<div #container>\n    <ng-content></ng-content>\n</div>"
            }] }
];
/** @nocollapse */
ContainerComponent.ctorParameters = () => [
    { type: NgZone }
];
ContainerComponent.propDecorators = {
    draggables: [{ type: ContentChildren, args: [DraggableComponent,] }],
    containerElementRef: [{ type: ViewChild, args: ["container",] }],
    orientation: [{ type: Input, args: ["orientation",] }],
    behaviour: [{ type: Input, args: ["behaviour",] }],
    groupName: [{ type: Input, args: ["groupName",] }],
    lockAxis: [{ type: Input, args: ["lockAxis",] }],
    dragHandleSelector: [{ type: Input, args: ["dragHandleSelector",] }],
    nonDragAreaSelector: [{ type: Input, args: ["nonDragAreaSelector",] }],
    dragBeginDelay: [{ type: Input, args: ["dragBeginDelay",] }],
    animationDuration: [{ type: Input, args: ["animationDuration",] }],
    autoScrollEnabled: [{ type: Input, args: ["autoScrollEnabled",] }],
    dragClass: [{ type: Input, args: ["dragClass",] }],
    dropClass: [{ type: Input, args: ["dropClass",] }],
    dropPlaceholder: [{ type: Input, args: ["dropPlaceholder",] }],
    removeOnDropOut: [{ type: Input, args: ["removeOnDropOut",] }],
    dragStart: [{ type: Output }],
    dragEnd: [{ type: Output }],
    drop: [{ type: Output }],
    dropReady: [{ type: Output }],
    getChildPayload: [{ type: Input }],
    shouldAnimateDrop: [{ type: Input }],
    shouldAcceptDrop: [{ type: Input }],
    dragEnter: [{ type: Output }],
    dragLeave: [{ type: Output }],
    getGhostParent: [{ type: Input }]
};
if (false) {
    /**
     * @type {?}
     * @private
     */
    ContainerComponent.prototype.container;
    /** @type {?} */
    ContainerComponent.prototype.draggables;
    /** @type {?} */
    ContainerComponent.prototype.containerElementRef;
    /** @type {?} */
    ContainerComponent.prototype.orientation;
    /** @type {?} */
    ContainerComponent.prototype.behaviour;
    /** @type {?} */
    ContainerComponent.prototype.groupName;
    /** @type {?} */
    ContainerComponent.prototype.lockAxis;
    /** @type {?} */
    ContainerComponent.prototype.dragHandleSelector;
    /** @type {?} */
    ContainerComponent.prototype.nonDragAreaSelector;
    /** @type {?} */
    ContainerComponent.prototype.dragBeginDelay;
    /** @type {?} */
    ContainerComponent.prototype.animationDuration;
    /** @type {?} */
    ContainerComponent.prototype.autoScrollEnabled;
    /** @type {?} */
    ContainerComponent.prototype.dragClass;
    /** @type {?} */
    ContainerComponent.prototype.dropClass;
    /** @type {?} */
    ContainerComponent.prototype.dropPlaceholder;
    /** @type {?} */
    ContainerComponent.prototype.removeOnDropOut;
    /** @type {?} */
    ContainerComponent.prototype.dragStart;
    /** @type {?} */
    ContainerComponent.prototype.dragEnd;
    /** @type {?} */
    ContainerComponent.prototype.drop;
    /** @type {?} */
    ContainerComponent.prototype.dropReady;
    /** @type {?} */
    ContainerComponent.prototype.getChildPayload;
    /** @type {?} */
    ContainerComponent.prototype.shouldAnimateDrop;
    /** @type {?} */
    ContainerComponent.prototype.shouldAcceptDrop;
    /** @type {?} */
    ContainerComponent.prototype.dragEnter;
    /** @type {?} */
    ContainerComponent.prototype.dragLeave;
    /** @type {?} */
    ContainerComponent.prototype.getGhostParent;
    /**
     * @type {?}
     * @private
     */
    ContainerComponent.prototype._ngZone;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbW9vdGgtZG5kLyIsInNvdXJjZXMiOlsic3JjL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQW9CLFNBQVMsRUFBRSxVQUFVLEVBQWlCLEtBQUssRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEwsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWdDLE1BQU0sWUFBWSxDQUFDO0FBRW5GLFNBQVMsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsT0FBTyxDQUFDO0FBQ2hFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzs7O0FBRTVCLHNDQUlDOzs7SUFIQyxvQ0FBa0I7O0lBQ2xCLG1DQUFhOztJQUNiLDBDQUF3Qjs7QUFRMUIsTUFBTSxPQUFPLGtCQUFrQjs7OztJQXlDN0IsWUFBb0IsT0FBZTtRQUFmLFlBQU8sR0FBUCxPQUFPLENBQVE7UUFyQnpCLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBb0IsQ0FBQztRQUNqRCxZQUFPLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDL0MsU0FBSSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFDdEMsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7UUFZM0MsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFLRixDQUFDOzs7O0lBRXhDLGVBQWU7UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFDdEMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUNsQixDQUFDO0lBQ0osQ0FBQzs7OztJQUNELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7O0lBRU8sVUFBVTs7Y0FDVixPQUFPLEdBQXFCLEVBQUU7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVztZQUFFLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUM3RCxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQUUsT0FBTyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ3ZELElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkQsSUFBSSxJQUFJLENBQUMsUUFBUTtZQUFFLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUNwRCxJQUFJLElBQUksQ0FBQyxrQkFBa0I7WUFDekIsT0FBTyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztRQUN2RCxJQUFJLElBQUksQ0FBQyxtQkFBbUI7WUFDMUIsT0FBTyxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUN6RCxJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3RFLElBQUksSUFBSSxDQUFDLGlCQUFpQjtZQUN4QixPQUFPLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3JELElBQUksSUFBSSxDQUFDLGlCQUFpQjtZQUN4QixPQUFPLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3JELElBQUksSUFBSSxDQUFDLFNBQVM7WUFBRSxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDdkQsSUFBSSxJQUFJLENBQUMsU0FBUztZQUFFLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUN2RCxJQUFJLElBQUksQ0FBQyxlQUFlO1lBQUUsT0FBTyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBRXpFLElBQUksSUFBSSxDQUFDLFNBQVM7WUFDaEIsT0FBTyxDQUFDLFdBQVcsR0FBRyxDQUFDLElBQXNCLEVBQUUsRUFBRTtnQkFDL0MsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUM1QixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQztRQUVKLElBQUksSUFBSSxDQUFDLE9BQU87WUFDZCxPQUFPLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBc0IsRUFBRSxFQUFFO2dCQUM3QyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRTtvQkFDbEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzFCLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDO1FBRUosSUFBSSxJQUFJLENBQUMsSUFBSTtZQUNYLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxVQUFzQixFQUFFLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO29CQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUM7UUFFSixJQUFJLElBQUksQ0FBQyxlQUFlO1lBQUUsT0FBTyxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQ3pFLElBQUksSUFBSSxDQUFDLGlCQUFpQjtZQUN4QixPQUFPLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDO1FBQ3JELElBQUksSUFBSSxDQUFDLGdCQUFnQjtZQUFFLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFFNUUsSUFBSSxJQUFJLENBQUMsU0FBUztZQUNoQixPQUFPLENBQUMsV0FBVyxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzFFLElBQUksSUFBSSxDQUFDLFNBQVM7WUFDaEIsT0FBTyxDQUFDLFdBQVcsR0FBRyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUUxRSxJQUFJLElBQUksQ0FBQyxTQUFTO1lBQ2hCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsQ0FBQyxVQUFzQixFQUFFLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO29CQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUM7UUFFSixJQUFJLElBQUksQ0FBQyxjQUFjO1lBQUUsT0FBTyxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBRXRFLE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVPLFNBQVMsQ0FBQyxHQUFHO1FBQ25CLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRTtZQUNwQixHQUFHLEVBQUUsQ0FBQztRQUNSLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBNUhGLFNBQVMsU0FBQzs7Z0JBRVQsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsbUVBQXlDO2FBQzFDOzs7O1lBakJ1SixNQUFNOzs7eUJBb0IzSixlQUFlLFNBQUMsa0JBQWtCO2tDQUVsQyxTQUFTLFNBQUMsV0FBVzswQkFFckIsS0FBSyxTQUFDLGFBQWE7d0JBQ25CLEtBQUssU0FBQyxXQUFXO3dCQUNqQixLQUFLLFNBQUMsV0FBVzt1QkFDakIsS0FBSyxTQUFDLFVBQVU7aUNBQ2hCLEtBQUssU0FBQyxvQkFBb0I7a0NBQzFCLEtBQUssU0FBQyxxQkFBcUI7NkJBQzNCLEtBQUssU0FBQyxnQkFBZ0I7Z0NBQ3RCLEtBQUssU0FBQyxtQkFBbUI7Z0NBQ3pCLEtBQUssU0FBQyxtQkFBbUI7d0JBQ3pCLEtBQUssU0FBQyxXQUFXO3dCQUNqQixLQUFLLFNBQUMsV0FBVzs4QkFDakIsS0FBSyxTQUFDLGlCQUFpQjs4QkFDdkIsS0FBSyxTQUFDLGlCQUFpQjt3QkFFdkIsTUFBTTtzQkFDTixNQUFNO21CQUNOLE1BQU07d0JBQ04sTUFBTTs4QkFDTixLQUFLO2dDQUNMLEtBQUs7K0JBS0wsS0FBSzt3QkFLTCxNQUFNO3dCQUNOLE1BQU07NkJBRU4sS0FBSzs7Ozs7OztJQXJDTix1Q0FBdUI7O0lBQ3ZCLHdDQUMwQzs7SUFDMUMsaURBQXdEOztJQUV4RCx5Q0FBa0M7O0lBQ2xDLHVDQUE4Qjs7SUFDOUIsdUNBQThCOztJQUM5QixzQ0FBNEI7O0lBQzVCLGdEQUFnRDs7SUFDaEQsaURBQWtEOztJQUNsRCw0Q0FBd0M7O0lBQ3hDLCtDQUE4Qzs7SUFDOUMsK0NBQThDOztJQUM5Qyx1Q0FBOEI7O0lBQzlCLHVDQUE4Qjs7SUFDOUIsNkNBQTBDOztJQUMxQyw2Q0FBMEM7O0lBRTFDLHVDQUEyRDs7SUFDM0QscUNBQXlEOztJQUN6RCxrQ0FBZ0Q7O0lBQ2hELHVDQUFxRDs7SUFDckQsNkNBQWdEOztJQUNoRCwrQ0FJYTs7SUFDYiw4Q0FJYTs7SUFDYix1Q0FBeUM7O0lBQ3pDLHVDQUF5Qzs7SUFFekMsNENBQ2tDOzs7OztJQUV0QixxQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIENvbnRlbnRDaGlsZHJlbiwgUXVlcnlMaXN0LCBBZnRlckNvbnRlbnRJbml0LCBWaWV3Q2hpbGQsIEVsZW1lbnRSZWYsIEFmdGVyVmlld0luaXQsIElucHV0LCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRHJhZ2dhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vZHJhZ2dhYmxlL2RyYWdnYWJsZS5jb21wb25lbnQnO1xuaW1wb3J0IHsgZHJvcEhhbmRsZXJzLCBzbW9vdGhEbkQsIERyb3BSZXN1bHQsIENvbnRhaW5lck9wdGlvbnMgfSBmcm9tICdzbW9vdGgtZG5kJztcblxuc21vb3RoRG5ELmRyb3BIYW5kbGVyID0gZHJvcEhhbmRsZXJzLnJlYWN0RHJvcEhhbmRsZXIoKS5oYW5kbGVyO1xuc21vb3RoRG5ELndyYXBDaGlsZCA9IGZhbHNlO1xuXG5leHBvcnQgaW50ZXJmYWNlIERyYWdTdGFydEVuZEluZm8ge1xuICBpc1NvdXJjZTogYm9vbGVhbjtcbiAgcGF5bG9hZDogYW55O1xuICB3aWxsQWNjZXB0RHJvcDogYm9vbGVhbjtcbn1cblxuQENvbXBvbmVudCh7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6IFwic21vb3RoLWRuZC1jb250YWluZXJcIixcbiAgdGVtcGxhdGVVcmw6IFwiLi9jb250YWluZXIuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBDb250YWluZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIGNvbnRhaW5lcjogYW55O1xuICBAQ29udGVudENoaWxkcmVuKERyYWdnYWJsZUNvbXBvbmVudClcbiAgZHJhZ2dhYmxlczogUXVlcnlMaXN0PERyYWdnYWJsZUNvbXBvbmVudD47XG4gIEBWaWV3Q2hpbGQoXCJjb250YWluZXJcIikgY29udGFpbmVyRWxlbWVudFJlZjogRWxlbWVudFJlZjtcblxuICBASW5wdXQoXCJvcmllbnRhdGlvblwiKSBvcmllbnRhdGlvbjtcbiAgQElucHV0KFwiYmVoYXZpb3VyXCIpIGJlaGF2aW91cjtcbiAgQElucHV0KFwiZ3JvdXBOYW1lXCIpIGdyb3VwTmFtZTtcbiAgQElucHV0KFwibG9ja0F4aXNcIikgbG9ja0F4aXM7XG4gIEBJbnB1dChcImRyYWdIYW5kbGVTZWxlY3RvclwiKSBkcmFnSGFuZGxlU2VsZWN0b3I7XG4gIEBJbnB1dChcIm5vbkRyYWdBcmVhU2VsZWN0b3JcIikgbm9uRHJhZ0FyZWFTZWxlY3RvcjtcbiAgQElucHV0KFwiZHJhZ0JlZ2luRGVsYXlcIikgZHJhZ0JlZ2luRGVsYXk7XG4gIEBJbnB1dChcImFuaW1hdGlvbkR1cmF0aW9uXCIpIGFuaW1hdGlvbkR1cmF0aW9uO1xuICBASW5wdXQoXCJhdXRvU2Nyb2xsRW5hYmxlZFwiKSBhdXRvU2Nyb2xsRW5hYmxlZDtcbiAgQElucHV0KFwiZHJhZ0NsYXNzXCIpIGRyYWdDbGFzcztcbiAgQElucHV0KFwiZHJvcENsYXNzXCIpIGRyb3BDbGFzcztcbiAgQElucHV0KFwiZHJvcFBsYWNlaG9sZGVyXCIpIGRyb3BQbGFjZWhvbGRlcjtcbiAgQElucHV0KFwicmVtb3ZlT25Ecm9wT3V0XCIpIHJlbW92ZU9uRHJvcE91dDtcblxuICBAT3V0cHV0KCkgZHJhZ1N0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnU3RhcnRFbmRJbmZvPigpO1xuICBAT3V0cHV0KCkgZHJhZ0VuZCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhZ1N0YXJ0RW5kSW5mbz4oKTtcbiAgQE91dHB1dCgpIGRyb3AgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BSZXN1bHQ+KCk7XG4gIEBPdXRwdXQoKSBkcm9wUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPERyb3BSZXN1bHQ+KCk7XG4gIEBJbnB1dCgpIGdldENoaWxkUGF5bG9hZDogKGluZGV4OiBudW1iZXIpID0+IHt9O1xuICBASW5wdXQoKVxuICBzaG91bGRBbmltYXRlRHJvcDogKFxuICAgIHNvdXJjZUNvbnRhaW5lck9wdGlvbnM6IENvbnRhaW5lck9wdGlvbnMsXG4gICAgcGF5bG9hZDogYW55XG4gICkgPT4gYm9vbGVhbjtcbiAgQElucHV0KClcbiAgc2hvdWxkQWNjZXB0RHJvcDogKFxuICAgIHNvdXJjZUNvbnRhaW5lck9wdGlvbnM6IENvbnRhaW5lck9wdGlvbnMsXG4gICAgcGF5bG9hZDogYW55XG4gICkgPT4gYm9vbGVhbjtcbiAgQE91dHB1dCgpIGRyYWdFbnRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIGRyYWdMZWF2ZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICBASW5wdXQoKVxuICBnZXRHaG9zdFBhcmVudDogKCkgPT4gSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUpIHsgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IHNtb290aERuRChcbiAgICAgIHRoaXMuY29udGFpbmVyRWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgdGhpcy5nZXRPcHRpb25zKClcbiAgICApO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuY29udGFpbmVyLmRpc3Bvc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0T3B0aW9ucygpOiBDb250YWluZXJPcHRpb25zIHtcbiAgICBjb25zdCBvcHRpb25zOiBDb250YWluZXJPcHRpb25zID0ge307XG4gICAgaWYgKHRoaXMub3JpZW50YXRpb24pIG9wdGlvbnMub3JpZW50YXRpb24gPSB0aGlzLm9yaWVudGF0aW9uO1xuICAgIGlmICh0aGlzLmJlaGF2aW91cikgb3B0aW9ucy5iZWhhdmlvdXIgPSB0aGlzLmJlaGF2aW91cjtcbiAgICBpZiAodGhpcy5ncm91cE5hbWUpIG9wdGlvbnMuZ3JvdXBOYW1lID0gdGhpcy5ncm91cE5hbWU7XG4gICAgaWYgKHRoaXMubG9ja0F4aXMpIG9wdGlvbnMubG9ja0F4aXMgPSB0aGlzLmxvY2tBeGlzO1xuICAgIGlmICh0aGlzLmRyYWdIYW5kbGVTZWxlY3RvcilcbiAgICAgIG9wdGlvbnMuZHJhZ0hhbmRsZVNlbGVjdG9yID0gdGhpcy5kcmFnSGFuZGxlU2VsZWN0b3I7XG4gICAgaWYgKHRoaXMubm9uRHJhZ0FyZWFTZWxlY3RvcilcbiAgICAgIG9wdGlvbnMubm9uRHJhZ0FyZWFTZWxlY3RvciA9IHRoaXMubm9uRHJhZ0FyZWFTZWxlY3RvcjtcbiAgICBpZiAodGhpcy5kcmFnQmVnaW5EZWxheSkgb3B0aW9ucy5kcmFnQmVnaW5EZWxheSA9IHRoaXMuZHJhZ0JlZ2luRGVsYXk7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uRHVyYXRpb24pXG4gICAgICBvcHRpb25zLmFuaW1hdGlvbkR1cmF0aW9uID0gdGhpcy5hbmltYXRpb25EdXJhdGlvbjtcbiAgICBpZiAodGhpcy5hdXRvU2Nyb2xsRW5hYmxlZClcbiAgICAgIG9wdGlvbnMuYXV0b1Njcm9sbEVuYWJsZWQgPSB0aGlzLmF1dG9TY3JvbGxFbmFibGVkO1xuICAgIGlmICh0aGlzLmRyYWdDbGFzcykgb3B0aW9ucy5kcmFnQ2xhc3MgPSB0aGlzLmRyYWdDbGFzcztcbiAgICBpZiAodGhpcy5kcm9wQ2xhc3MpIG9wdGlvbnMuZHJvcENsYXNzID0gdGhpcy5kcm9wQ2xhc3M7XG4gICAgaWYgKHRoaXMuZHJvcFBsYWNlaG9sZGVyKSBvcHRpb25zLmRyb3BQbGFjZWhvbGRlciA9IHRoaXMuZHJvcFBsYWNlaG9sZGVyO1xuXG4gICAgaWYgKHRoaXMuZHJhZ1N0YXJ0KVxuICAgICAgb3B0aW9ucy5vbkRyYWdTdGFydCA9IChpbmZvOiBEcmFnU3RhcnRFbmRJbmZvKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYWdTdGFydC5lbWl0KGluZm8pO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICBpZiAodGhpcy5kcmFnRW5kKVxuICAgICAgb3B0aW9ucy5vbkRyYWdFbmQgPSAoaW5mbzogRHJhZ1N0YXJ0RW5kSW5mbykgPT4ge1xuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcmFnRW5kLmVtaXQoaW5mbyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgIGlmICh0aGlzLmRyb3ApXG4gICAgICBvcHRpb25zLm9uRHJvcCA9IChkcm9wUmVzdWx0OiBEcm9wUmVzdWx0KSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyb3AuZW1pdChkcm9wUmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgaWYgKHRoaXMuZ2V0Q2hpbGRQYXlsb2FkKSBvcHRpb25zLmdldENoaWxkUGF5bG9hZCA9IHRoaXMuZ2V0Q2hpbGRQYXlsb2FkO1xuICAgIGlmICh0aGlzLnNob3VsZEFuaW1hdGVEcm9wKVxuICAgICAgb3B0aW9ucy5zaG91bGRBbmltYXRlRHJvcCA9IHRoaXMuc2hvdWxkQW5pbWF0ZURyb3A7XG4gICAgaWYgKHRoaXMuc2hvdWxkQWNjZXB0RHJvcCkgb3B0aW9ucy5zaG91bGRBY2NlcHREcm9wID0gdGhpcy5zaG91bGRBY2NlcHREcm9wO1xuXG4gICAgaWYgKHRoaXMuZHJhZ0VudGVyKVxuICAgICAgb3B0aW9ucy5vbkRyYWdFbnRlciA9ICgpID0+IHRoaXMuZ2V0Tmdab25lKCgpID0+IHRoaXMuZHJhZ0VudGVyLmVtaXQoKSk7XG4gICAgaWYgKHRoaXMuZHJhZ0xlYXZlKVxuICAgICAgb3B0aW9ucy5vbkRyYWdMZWF2ZSA9ICgpID0+IHRoaXMuZ2V0Tmdab25lKCgpID0+IHRoaXMuZHJhZ0xlYXZlLmVtaXQoKSk7XG5cbiAgICBpZiAodGhpcy5kcm9wUmVhZHkpXG4gICAgICBvcHRpb25zLm9uRHJvcFJlYWR5ID0gKGRyb3BSZXN1bHQ6IERyb3BSZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5nZXROZ1pvbmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJvcFJlYWR5LmVtaXQoZHJvcFJlc3VsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICBcbiAgICBpZiAodGhpcy5nZXRHaG9zdFBhcmVudCkgb3B0aW9ucy5nZXRHaG9zdFBhcmVudCA9IHRoaXMuZ2V0R2hvc3RQYXJlbnQ7XG5cbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Tmdab25lKGNsYikge1xuICAgIHRoaXMuX25nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgY2xiKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==