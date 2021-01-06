let api = [];
api.push({
    alias: 'AuthController',
    order: '1',
    link: 'auth_controller',
    desc: 'Auth Controller',
    list: []
})
api.push({
    alias: 'CommentController',
    order: '2',
    link: 'comment_controller',
    desc: 'Comment Controller',
    list: []
})
api[1].list.push({
    order: '1',
    desc: 'Create a new comment',
});
api[1].list.push({
    order: '2',
    desc: 'Get a single comment by id',
});
api[1].list.push({
    order: '3',
    desc: 'Get comments by postId',
});
api[1].list.push({
    order: '4',
    desc: 'Update a comment by id',
});
api[1].list.push({
    order: '5',
    desc: 'Delete a comment by id',
});
api.push({
    alias: 'PostController',
    order: '3',
    link: 'post_controller',
    desc: 'Post Controller',
    list: []
})
api[2].list.push({
    order: '1',
    desc: 'Create a new post',
});
api[2].list.push({
    order: '2',
    desc: 'Get a single post by id',
});
api[2].list.push({
    order: '3',
    desc: 'Get posts by username',
});
api[2].list.push({
    order: '4',
    desc: 'Get all posts',
});
api[2].list.push({
    order: '5',
    desc: 'Update a post by id',
});
api[2].list.push({
    order: '6',
    desc: 'Delete a post by id',
});
api.push({
    alias: 'UserController',
    order: '4',
    link: 'user_controller',
    desc: 'User Controller',
    list: []
})
api[3].list.push({
    order: '1',
    desc: 'Create a new user',
});
api[3].list.push({
    order: '2',
    desc: 'Get a single user by id',
});
api[3].list.push({
    order: '3',
    desc: 'Get all users',
});
api[3].list.push({
    order: '4',
    desc: 'Update a user by id',
});
api[3].list.push({
    order: '5',
    desc: 'Delete a user by id',
});
api.push({
    alias: 'dict',
    order: '5',
    link: 'dict_list',
    desc: 'Data Dictionaries',
    list: []
})
document.onkeydown = keyDownSearch;
function keyDownSearch(e) {
    const theEvent = e;
    const code = theEvent.keyCode || theEvent.which || theEvent.charCode;
    if (code == 13) {
        const search = document.getElementById('search');
        const searchValue = search.value;
        let searchArr = [];
        for (let i = 0; i < api.length; i++) {
            let apiData = api[i];
            const desc = apiData.desc;
            if (desc.indexOf(searchValue) > -1) {
                searchArr.push({
                    order: apiData.order,
                    desc: apiData.desc,
                    link: apiData.link,
                    list: apiData.list
                });
            } else {
                let methodList = apiData.list || [];
                let methodListTemp = [];
                for (let j = 0; j < methodList.length; j++) {
                    const methodData = methodList[j];
                    const methodDesc = methodData.desc;
                    if (methodDesc.indexOf(searchValue) > -1) {
                        methodListTemp.push(methodData);
                        break;
                    }
                }
                if (methodListTemp.length > 0) {
                    const data = {
                        order: apiData.order,
                        desc: apiData.desc,
                        link: apiData.link,
                        list: methodListTemp
                    };
                    searchArr.push(data);
                }
            }
        }
        let html;
        if (searchValue == '') {
            const liClass = "";
            const display = "display: none";
            html = buildAccordion(api,liClass,display);
            document.getElementById('accordion').innerHTML = html;
        } else {
            const liClass = "open";
            const display = "display: block";
            html = buildAccordion(searchArr,liClass,display);
            document.getElementById('accordion').innerHTML = html;
        }
        const Accordion = function (el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;
            const links = this.el.find('.dd');
            links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown);
        };
        Accordion.prototype.dropdown = function (e) {
            const $el = e.data.el;
            $this = $(this), $next = $this.next();
            $next.slideToggle();
            $this.parent().toggleClass('open');
            if (!e.data.multiple) {
                $el.find('.submenu').not($next).slideUp("20").parent().removeClass('open');
            }
        };
        new Accordion($('#accordion'), false);
    }
}

function buildAccordion(apiData, liClass, display) {
    let html = "";
    let doc;
    if (apiData.length > 0) {
        for (let j = 0; j < apiData.length; j++) {
            html += '<li class="'+liClass+'">';
            html += '<a class="dd" href="#_' + apiData[j].link + '">' + apiData[j].order + '.&nbsp;' + apiData[j].desc + '</a>';
            html += '<ul class="sectlevel2" style="'+display+'">';
            doc = apiData[j].list;
            for (let m = 0; m < doc.length; m++) {
                html += '<li><a href="#_' + apiData[j].order + '_' + doc[m].order + '_' + doc[m].desc + '">' + apiData[j].order + '.' + doc[m].order + '.&nbsp;' + doc[m].desc + '</a> </li>';
            }
            html += '</ul>';
            html += '</li>';
        }
    }
    return html;
}