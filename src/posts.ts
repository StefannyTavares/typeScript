class BoxPostList {

    static boxId = 'box-post-list';
    private buttonListSelector = `#${BoxPostList.boxId}>button[type=button]`;

    constructor(){
        this.init();
    }
    private init(){
        const buttonList = document.querySelector(this.buttonListSelector);
        buttonList.addEventListener ('click',()=>{
          this.hiddenBox()
          
          const boxForm = document.getElementById(BoxPostForm.boxId);
          boxForm.removeAttribute('style')
        });
    }
    hiddenBox(){
        const boxList = document.getElementById(BoxPostList.boxId);
        boxList.style.display = 'none';
    }

    showBox(){
        const boxList = document.getElementById(BoxPostList.boxId);
        boxList.removeAttribute('style');
    }
}

class BoxPostForm {

    static boxId = 'box-post-form';
    private buttonFormSelector = `#${BoxPostForm.boxId}>button[type=button]`;

    constructor(){
        this.init();
    }
    private init(){
        const buttonForm = document.querySelector(this.buttonFormSelector);
        buttonForm.addEventListener ('click',()=>{
          this.hiddenBox()
          
          const boxList = document.getElementById(BoxPostList.boxId);
          boxList.removeAttribute('style')
        });
    }
    hiddenBox(){
        const boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.style.display = 'none';
    }

    showBox(){
        const boxForm = document.getElementById(BoxPostForm.boxId);
        boxForm.removeAttribute('style');
    }
}

new BoxPostList();
new BoxPostForm();