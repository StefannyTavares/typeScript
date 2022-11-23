"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var box_post_form_1 = require("./box-post-form");
var BoxPostList = /** @class */ (function () {
    function BoxPostList(eventManager) {
        this.eventManager = eventManager;
        this.buttonFormSelector = "#".concat(BoxPostList.boxId, ">button[type=button]");
        this.init();
    }
    BoxPostList.prototype.init = function () {
        var _this = this;
        var buttonList = document.querySelector(this.buttonFormSelector);
        buttonList.addEventListener('click', function () {
            _this.hiddenBox();
            _this.eventManager.runEvent(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST);
            //const boxForm = document.getElementById(BoxPostForm.boxId);
            //boxForm.removeAttribute('style');
        });
        this.eventManager.addListener(box_post_form_1.default.EVENT_CLICK_HIDDEN_BOX_FORM, function () {
            _this.showBox();
        });
        //this.eventManager.addListener('box-post-form-click-hidden');
    };
    BoxPostList.prototype.hiddenBox = function () {
        var boxList = document.getElementById(BoxPostList.boxId);
        boxList.style.display = 'none';
    };
    BoxPostList.prototype.showBox = function () {
        var boxList = document.getElementById(BoxPostList.boxId);
        boxList.removeAttribute('style');
    };
    BoxPostList.boxId = 'box-post-list';
    BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST = 'box-post-list-click-hidden';
    return BoxPostList;
}());
exports.default = BoxPostList;
//# sourceMappingURL=box-post-list.js.map