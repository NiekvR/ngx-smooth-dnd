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
var ContainerComponent = /** @class */ (function () {
    function ContainerComponent(_ngZone) {
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
    ContainerComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.container = smoothDnD(this.containerElementRef.nativeElement, this.getOptions());
    };
    /**
     * @return {?}
     */
    ContainerComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.container.dispose();
    };
    /**
     * @private
     * @return {?}
     */
    ContainerComponent.prototype.getOptions = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var options = {};
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
            options.onDragStart = function (info) {
                _this.getNgZone(function () {
                    _this.dragStart.emit(info);
                });
            };
        if (this.dragEnd)
            options.onDragEnd = function (info) {
                _this.getNgZone(function () {
                    _this.dragEnd.emit(info);
                });
            };
        if (this.drop)
            options.onDrop = function (dropResult) {
                _this.getNgZone(function () {
                    _this.drop.emit(dropResult);
                });
            };
        if (this.getChildPayload)
            options.getChildPayload = this.getChildPayload;
        if (this.shouldAnimateDrop)
            options.shouldAnimateDrop = this.shouldAnimateDrop;
        if (this.shouldAcceptDrop)
            options.shouldAcceptDrop = this.shouldAcceptDrop;
        if (this.dragEnter)
            options.onDragEnter = function () { return _this.getNgZone(function () { return _this.dragEnter.emit(); }); };
        if (this.dragLeave)
            options.onDragLeave = function () { return _this.getNgZone(function () { return _this.dragLeave.emit(); }); };
        if (this.dropReady)
            options.onDropReady = function (dropResult) {
                _this.getNgZone(function () {
                    _this.dropReady.emit(dropResult);
                });
            };
        if (this.getGhostParent)
            options.getGhostParent = this.getGhostParent;
        return options;
    };
    /**
     * @private
     * @param {?} clb
     * @return {?}
     */
    ContainerComponent.prototype.getNgZone = /**
     * @private
     * @param {?} clb
     * @return {?}
     */
    function (clb) {
        this._ngZone.run(function () {
            clb();
        });
    };
    ContainerComponent.decorators = [
        { type: Component, args: [{
                    // tslint:disable-next-line:component-selector
                    selector: "smooth-dnd-container",
                    template: "<div #container>\n    <ng-content></ng-content>\n</div>"
                }] }
    ];
    /** @nocollapse */
    ContainerComponent.ctorParameters = function () { return [
        { type: NgZone }
    ]; };
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
    return ContainerComponent;
}());
export { ContainerComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFpbmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1zbW9vdGgtZG5kLyIsInNvdXJjZXMiOlsic3JjL2NvbnRhaW5lci9jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLGVBQWUsRUFBRSxTQUFTLEVBQW9CLFNBQVMsRUFBRSxVQUFVLEVBQWlCLEtBQUssRUFBcUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEwsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDdEUsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQWdDLE1BQU0sWUFBWSxDQUFDO0FBRW5GLFNBQVMsQ0FBQyxXQUFXLEdBQUcsWUFBWSxDQUFDLGdCQUFnQixFQUFFLENBQUMsT0FBTyxDQUFDO0FBQ2hFLFNBQVMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDOzs7O0FBRTVCLHNDQUlDOzs7SUFIQyxvQ0FBa0I7O0lBQ2xCLG1DQUFhOztJQUNiLDBDQUF3Qjs7QUFHMUI7SUE4Q0UsNEJBQW9CLE9BQWU7UUFBZixZQUFPLEdBQVAsT0FBTyxDQUFRO1FBckJ6QixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQW9CLENBQUM7UUFDakQsWUFBTyxHQUFHLElBQUksWUFBWSxFQUFvQixDQUFDO1FBQy9DLFNBQUksR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBQ3RDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO1FBWTNDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBQy9CLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBS0YsQ0FBQzs7OztJQUV4Qyw0Q0FBZTs7O0lBQWY7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FDeEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsRUFD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Q2pCLEtBQUssU0FBQyxXQUFXOzJCQUNqQixLQUFLLFNBQUMsVUFBVTtxQ0FDaEIsS0FBSyxTQUFDLG9CQUFvQjtzQ0FDMUIsS0FBSyxTQUFDLHFCQUFxQjtpQ0FDM0IsS0FBSyxTQUFDLGdCQUFnQjtvQ0FDdEIsS0FBSyxTQUFDLG1CQUFtQjtvQ0FDekIsS0FBSyxTQUFDLG1CQUFtQjs0QkFDekIsS0FBSyxTQUFDLFdBQVc7NEJBQ2pCLEtBQUssU0FBQyxXQUFXO2tDQUNqQixLQUFLLFNBQUMsaUJBQWlCO2tDQUN2QixLQUFLLFNBQUMsaUJBQWlCOzRCQUV2QixNQUFNOzBCQUNOLE1BQU07dUJBQ04sTUFBTTs0QkFDTixNQUFNO2tDQUNOLEtBQUs7b0NBQ0wsS0FBSzttQ0FLTCxLQUFLOzRCQUtMLE1BQU07NEJBQ04sTUFBTTtpQ0FFTixLQUFLOztJQWtGUix5QkFBQztDQUFBLEFBN0hELElBNkhDO1NBeEhZLGtCQUFrQjs7Ozs7O0lBQzdCLHVDQUF1Qjs7SUFDdkIsd0NBQzBDOztJQUMxQyxpREFBd0Q7O0lBRXhELHlDQUFrQzs7SUFDbEMsdUNBQThCOztJQUM5Qix1Q0FBOEI7O0lBQzlCLHNDQUE0Qjs7SUFDNUIsZ0RBQWdEOztJQUNoRCxpREFBa0Q7O0lBQ2xELDRDQUF3Qzs7SUFDeEMsK0NBQThDOztJQUM5QywrQ0FBOEM7O0lBQzlDLHVDQUE4Qjs7SUFDOUIsdUNBQThCOztJQUM5Qiw2Q0FBMEM7O0lBQzFDLDZDQUEwQzs7SUFFMUMsdUNBQTJEOztJQUMzRCxxQ0FBeUQ7O0lBQ3pELGtDQUFnRDs7SUFDaEQsdUNBQXFEOztJQUNyRCw2Q0FBZ0Q7O0lBQ2hELCtDQUlhOztJQUNiLDhDQUlhOztJQUNiLHVDQUF5Qzs7SUFDekMsdUNBQXlDOztJQUV6Qyw0Q0FDa0M7Ozs7O0lBRXRCLHFDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgQ29udGVudENoaWxkcmVuLCBRdWVyeUxpc3QsIEFmdGVyQ29udGVudEluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBEcmFnZ2FibGVDb21wb25lbnQgfSBmcm9tICcuLi9kcmFnZ2FibGUvZHJhZ2dhYmxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBkcm9wSGFuZGxlcnMsIHNtb290aERuRCwgRHJvcFJlc3VsdCwgQ29udGFpbmVyT3B0aW9ucyB9IGZyb20gJ3Ntb290aC1kbmQnO1xuXG5zbW9vdGhEbkQuZHJvcEhhbmRsZXIgPSBkcm9wSGFuZGxlcnMucmVhY3REcm9wSGFuZGxlcigpLmhhbmRsZXI7XG5zbW9vdGhEbkQud3JhcENoaWxkID0gZmFsc2U7XG5cbmV4cG9ydCBpbnRlcmZhY2UgRHJhZ1N0YXJ0RW5kSW5mbyB7XG4gIGlzU291cmNlOiBib29sZWFuO1xuICBwYXlsb2FkOiBhbnk7XG4gIHdpbGxBY2NlcHREcm9wOiBib29sZWFuO1xufVxuXG5AQ29tcG9uZW50KHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxuICBzZWxlY3RvcjogXCJzbW9vdGgtZG5kLWNvbnRhaW5lclwiLFxuICB0ZW1wbGF0ZVVybDogXCIuL2NvbnRhaW5lci5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhaW5lckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgY29udGFpbmVyOiBhbnk7XG4gIEBDb250ZW50Q2hpbGRyZW4oRHJhZ2dhYmxlQ29tcG9uZW50KVxuICBkcmFnZ2FibGVzOiBRdWVyeUxpc3Q8RHJhZ2dhYmxlQ29tcG9uZW50PjtcbiAgQFZpZXdDaGlsZChcImNvbnRhaW5lclwiKSBjb250YWluZXJFbGVtZW50UmVmOiBFbGVtZW50UmVmO1xuXG4gIEBJbnB1dChcIm9yaWVudGF0aW9uXCIpIG9yaWVudGF0aW9uO1xuICBASW5wdXQoXCJiZWhhdmlvdXJcIikgYmVoYXZpb3VyO1xuICBASW5wdXQoXCJncm91cE5hbWVcIikgZ3JvdXBOYW1lO1xuICBASW5wdXQoXCJsb2NrQXhpc1wiKSBsb2NrQXhpcztcbiAgQElucHV0KFwiZHJhZ0hhbmRsZVNlbGVjdG9yXCIpIGRyYWdIYW5kbGVTZWxlY3RvcjtcbiAgQElucHV0KFwibm9uRHJhZ0FyZWFTZWxlY3RvclwiKSBub25EcmFnQXJlYVNlbGVjdG9yO1xuICBASW5wdXQoXCJkcmFnQmVnaW5EZWxheVwiKSBkcmFnQmVnaW5EZWxheTtcbiAgQElucHV0KFwiYW5pbWF0aW9uRHVyYXRpb25cIikgYW5pbWF0aW9uRHVyYXRpb247XG4gIEBJbnB1dChcImF1dG9TY3JvbGxFbmFibGVkXCIpIGF1dG9TY3JvbGxFbmFibGVkO1xuICBASW5wdXQoXCJkcmFnQ2xhc3NcIikgZHJhZ0NsYXNzO1xuICBASW5wdXQoXCJkcm9wQ2xhc3NcIikgZHJvcENsYXNzO1xuICBASW5wdXQoXCJkcm9wUGxhY2Vob2xkZXJcIikgZHJvcFBsYWNlaG9sZGVyO1xuICBASW5wdXQoXCJyZW1vdmVPbkRyb3BPdXRcIikgcmVtb3ZlT25Ecm9wT3V0O1xuXG4gIEBPdXRwdXQoKSBkcmFnU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPERyYWdTdGFydEVuZEluZm8+KCk7XG4gIEBPdXRwdXQoKSBkcmFnRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxEcmFnU3RhcnRFbmRJbmZvPigpO1xuICBAT3V0cHV0KCkgZHJvcCA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcFJlc3VsdD4oKTtcbiAgQE91dHB1dCgpIGRyb3BSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8RHJvcFJlc3VsdD4oKTtcbiAgQElucHV0KCkgZ2V0Q2hpbGRQYXlsb2FkOiAoaW5kZXg6IG51bWJlcikgPT4ge307XG4gIEBJbnB1dCgpXG4gIHNob3VsZEFuaW1hdGVEcm9wOiAoXG4gICAgc291cmNlQ29udGFpbmVyT3B0aW9uczogQ29udGFpbmVyT3B0aW9ucyxcbiAgICBwYXlsb2FkOiBhbnlcbiAgKSA9PiBib29sZWFuO1xuICBASW5wdXQoKVxuICBzaG91bGRBY2NlcHREcm9wOiAoXG4gICAgc291cmNlQ29udGFpbmVyT3B0aW9uczogQ29udGFpbmVyT3B0aW9ucyxcbiAgICBwYXlsb2FkOiBhbnlcbiAgKSA9PiBib29sZWFuO1xuICBAT3V0cHV0KCkgZHJhZ0VudGVyID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgZHJhZ0xlYXZlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIEBJbnB1dCgpXG4gIGdldEdob3N0UGFyZW50OiAoKSA9PiBIVE1MRWxlbWVudDtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9uZ1pvbmU6IE5nWm9uZSkgeyB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gc21vb3RoRG5EKFxuICAgICAgdGhpcy5jb250YWluZXJFbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICB0aGlzLmdldE9wdGlvbnMoKVxuICAgICk7XG4gIH1cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5jb250YWluZXIuZGlzcG9zZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcHRpb25zKCk6IENvbnRhaW5lck9wdGlvbnMge1xuICAgIGNvbnN0IG9wdGlvbnM6IENvbnRhaW5lck9wdGlvbnMgPSB7fTtcbiAgICBpZiAodGhpcy5vcmllbnRhdGlvbikgb3B0aW9ucy5vcmllbnRhdGlvbiA9IHRoaXMub3JpZW50YXRpb247XG4gICAgaWYgKHRoaXMuYmVoYXZpb3VyKSBvcHRpb25zLmJlaGF2aW91ciA9IHRoaXMuYmVoYXZpb3VyO1xuICAgIGlmICh0aGlzLmdyb3VwTmFtZSkgb3B0aW9ucy5ncm91cE5hbWUgPSB0aGlzLmdyb3VwTmFtZTtcbiAgICBpZiAodGhpcy5sb2NrQXhpcykgb3B0aW9ucy5sb2NrQXhpcyA9IHRoaXMubG9ja0F4aXM7XG4gICAgaWYgKHRoaXMuZHJhZ0hhbmRsZVNlbGVjdG9yKVxuICAgICAgb3B0aW9ucy5kcmFnSGFuZGxlU2VsZWN0b3IgPSB0aGlzLmRyYWdIYW5kbGVTZWxlY3RvcjtcbiAgICBpZiAodGhpcy5ub25EcmFnQXJlYVNlbGVjdG9yKVxuICAgICAgb3B0aW9ucy5ub25EcmFnQXJlYVNlbGVjdG9yID0gdGhpcy5ub25EcmFnQXJlYVNlbGVjdG9yO1xuICAgIGlmICh0aGlzLmRyYWdCZWdpbkRlbGF5KSBvcHRpb25zLmRyYWdCZWdpbkRlbGF5ID0gdGhpcy5kcmFnQmVnaW5EZWxheTtcbiAgICBpZiAodGhpcy5hbmltYXRpb25EdXJhdGlvbilcbiAgICAgIG9wdGlvbnMuYW5pbWF0aW9uRHVyYXRpb24gPSB0aGlzLmFuaW1hdGlvbkR1cmF0aW9uO1xuICAgIGlmICh0aGlzLmF1dG9TY3JvbGxFbmFibGVkKVxuICAgICAgb3B0aW9ucy5hdXRvU2Nyb2xsRW5hYmxlZCA9IHRoaXMuYXV0b1Njcm9sbEVuYWJsZWQ7XG4gICAgaWYgKHRoaXMuZHJhZ0NsYXNzKSBvcHRpb25zLmRyYWdDbGFzcyA9IHRoaXMuZHJhZ0NsYXNzO1xuICAgIGlmICh0aGlzLmRyb3BDbGFzcykgb3B0aW9ucy5kcm9wQ2xhc3MgPSB0aGlzLmRyb3BDbGFzcztcbiAgICBpZiAodGhpcy5kcm9wUGxhY2Vob2xkZXIpIG9wdGlvbnMuZHJvcFBsYWNlaG9sZGVyID0gdGhpcy5kcm9wUGxhY2Vob2xkZXI7XG5cbiAgICBpZiAodGhpcy5kcmFnU3RhcnQpXG4gICAgICBvcHRpb25zLm9uRHJhZ1N0YXJ0ID0gKGluZm86IERyYWdTdGFydEVuZEluZm8pID0+IHtcbiAgICAgICAgdGhpcy5nZXROZ1pvbmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJhZ1N0YXJ0LmVtaXQoaW5mbyk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgIGlmICh0aGlzLmRyYWdFbmQpXG4gICAgICBvcHRpb25zLm9uRHJhZ0VuZCA9IChpbmZvOiBEcmFnU3RhcnRFbmRJbmZvKSA9PiB7XG4gICAgICAgIHRoaXMuZ2V0Tmdab25lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmRyYWdFbmQuZW1pdChpbmZvKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgaWYgKHRoaXMuZHJvcClcbiAgICAgIG9wdGlvbnMub25Ecm9wID0gKGRyb3BSZXN1bHQ6IERyb3BSZXN1bHQpID0+IHtcbiAgICAgICAgdGhpcy5nZXROZ1pvbmUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuZHJvcC5lbWl0KGRyb3BSZXN1bHQpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICBpZiAodGhpcy5nZXRDaGlsZFBheWxvYWQpIG9wdGlvbnMuZ2V0Q2hpbGRQYXlsb2FkID0gdGhpcy5nZXRDaGlsZFBheWxvYWQ7XG4gICAgaWYgKHRoaXMuc2hvdWxkQW5pbWF0ZURyb3ApXG4gICAgICBvcHRpb25zLnNob3VsZEFuaW1hdGVEcm9wID0gdGhpcy5zaG91bGRBbmltYXRlRHJvcDtcbiAgICBpZiAodGhpcy5zaG91bGRBY2NlcHREcm9wKSBvcHRpb25zLnNob3VsZEFjY2VwdERyb3AgPSB0aGlzLnNob3VsZEFjY2VwdERyb3A7XG5cbiAgICBpZiAodGhpcy5kcmFnRW50ZXIpXG4gICAgICBvcHRpb25zLm9uRHJhZ0VudGVyID0gKCkgPT4gdGhpcy5nZXROZ1pvbmUoKCkgPT4gdGhpcy5kcmFnRW50ZXIuZW1pdCgpKTtcbiAgICBpZiAodGhpcy5kcmFnTGVhdmUpXG4gICAgICBvcHRpb25zLm9uRHJhZ0xlYXZlID0gKCkgPT4gdGhpcy5nZXROZ1pvbmUoKCkgPT4gdGhpcy5kcmFnTGVhdmUuZW1pdCgpKTtcblxuICAgIGlmICh0aGlzLmRyb3BSZWFkeSlcbiAgICAgIG9wdGlvbnMub25Ecm9wUmVhZHkgPSAoZHJvcFJlc3VsdDogRHJvcFJlc3VsdCkgPT4ge1xuICAgICAgICB0aGlzLmdldE5nWm9uZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5kcm9wUmVhZHkuZW1pdChkcm9wUmVzdWx0KTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIFxuICAgIGlmICh0aGlzLmdldEdob3N0UGFyZW50KSBvcHRpb25zLmdldEdob3N0UGFyZW50ID0gdGhpcy5nZXRHaG9zdFBhcmVudDtcblxuICAgIHJldHVybiBvcHRpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXROZ1pvbmUoY2xiKSB7XG4gICAgdGhpcy5fbmdab25lLnJ1bigoKSA9PiB7XG4gICAgICBjbGIoKTtcbiAgICB9KTtcbiAgfVxufVxuIl19