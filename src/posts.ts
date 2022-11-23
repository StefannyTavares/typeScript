//orientação a eventos:
//Dentro do evento existe ação.
//Diminui o acoplamento entre as classes. 
//Independencia entre as classes.

import EventManager from './event-manager';
import BoxPostList from './box-post-list';
import BoxPostForm from './box-post-form';

class PostsPage {
    constructor(private eventManager: EventManager) {
        this.init()
    }

    private init() {
        new BoxPostList(this.eventManager);
        new BoxPostForm(this.eventManager);
    }
}

new PostsPage(new EventManager());
