"use strict";
//orientação a eventos:
//Dentro do evento existe ação.
//Diminui o acoplamento entre as classes. 
//Independencia entre as classes.
Object.defineProperty(exports, "__esModule", { value: true });
var event_manager_1 = require("./event-manager");
var box_post_list_1 = require("./box-post-list");
var box_post_form_1 = require("./box-post-form");
var PostsPage = /** @class */ (function () {
    function PostsPage(eventManager) {
        this.eventManager = eventManager;
        this.init();
    }
    PostsPage.prototype.init = function () {
        new box_post_list_1.default(this.eventManager);
        new box_post_form_1.default(this.eventManager);
    };
    return PostsPage;
}());
new PostsPage(new event_manager_1.default());
//# sourceMappingURL=posts.js.map