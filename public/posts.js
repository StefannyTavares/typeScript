//orientação a eventos:
//Dentro do evento existe ação.
//Diminui o acoplamento entre as classes. 
//Independencia entre as classes.
var EventManager = /** @class */ (function () {
    function EventManager() {
        //ouvinte
        this.listeners = {};
    }
    EventManager.prototype.addListener = function (eventName, callable) {
        if (!(this.listeners[eventName] instanceof Array)) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callable);
    };
    EventManager.prototype.runEvent = function (eventName) {
        for (var _i = 0, _a = this.listeners[eventName]; _i < _a.length; _i++) {
            var callable = _a[_i];
            callable();
        }
    };
    return EventManager;
}());
var BoxPostList = /** @class */ (function () {
    function BoxPostList(eventManager) {
        this.eventManager = eventManager;
        this.buttonListSelector = "#".concat(BoxPostList.boxId, ">button[type=button]");
        this.init();
    }
    BoxPostList.prototype.init = function () {
        var _this = this;
        var buttonList = document.querySelector(this.buttonListSelector);
        buttonList.addEventListener('click', function () {
            _this.hiddenBox();
            _this.eventManager.runEvent('box-post-list-click-hidden');
            //const boxForm = document.getElementById(BoxPostForm.boxId);
            //boxForm.removeAttribute('style')
        });
        this.eventManager.addListener('box-post-form-click-hidden', function () {
            _this.showBox();
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
    function BoxPostForm(eventManager) {
        this.eventManager = eventManager;
        this.buttonFormSelector = "#".concat(BoxPostForm.boxId, ">button[type=button]");
        this.init();
    }
    BoxPostForm.prototype.init = function () {
        var _this = this;
        var buttonForm = document.querySelector(this.buttonFormSelector);
        buttonForm.addEventListener('click', function () {
            _this.hiddenBox();
            _this.eventManager.runEvent('box-post-form-click-hidden');
            //const boxList = document.getElementById(BoxPostList.boxId);
            //boxList.removeAttribute('style')
        });
        this.eventManager.addListener('box-post-list-click-hidden', function () {
            _this.showBox();
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
var eventManager = new EventManager();
new BoxPostList(eventManager);
new BoxPostForm(eventManager);
//# sourceMappingURL=posts.js.map