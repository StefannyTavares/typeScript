var BoxPostList = /** @class */ (function () {
    function BoxPostList() {
        this.buttonListSelector = "#".concat(BoxPostList.boxId, ">button[type=button]");
        this.init();
    }
    BoxPostList.prototype.init = function () {
        var _this = this;
        var buttonList = document.querySelector(this.buttonListSelector);
        buttonList.addEventListener('click', function () {
            _this.hiddenBox();
            var boxForm = document.getElementById(BoxPostForm.boxId);
            boxForm.removeAttribute('style');
        });
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
    return BoxPostList;
}());
var BoxPostForm = /** @class */ (function () {
    function BoxPostForm() {
        this.buttonFormSelector = "#".concat(BoxPostForm.boxId, ">button[type=button]");
        this.init();
    }
    BoxPostForm.prototype.init = function () {
        var _this = this;
        var buttonForm = document.querySelector(this.buttonFormSelector);
        buttonForm.addEventListener('click', function () {
            _this.hiddenBox();
            var boxList = document.getElementById(BoxPostList.boxId);
            boxList.removeAttribute('style');
        });
    };
    BoxPostForm.prototype.hiddenBox = function () {
        var boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.style.display = 'none';
    };
    BoxPostForm.prototype.showBox = function () {
        var boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.removeAttribute('style');
    };
    BoxPostForm.boxId = 'box-post-form';
    return BoxPostForm;
}());
new BoxPostList();
new BoxPostForm();
