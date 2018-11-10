(function() {
    if(window.RedditParser) return;
    
    window.RedditParser = class RedditParser extends QAParser {
        constructor() {
            super('a.title', 'div.md-container', 'div.score.unvoted');
            
        }

        getLinkOrTextFromPost() {
            const anchor_tag = document.querySelector(this.question_class);
            if(anchor_tag && anchor_tag.href)
                return { href: anchor_tag.href };

            const body_element = document.querySelector(this.answer_class);
            anchor_tag = body_element.querySelector('a');
            if(anchor_tag && anchor_tag.href)
                return { href: anchor_tag.href };
                
            return { body: body_element.innerText };
        }

        getTopAnswer() {
            let answer_node = document.querySelectorAll(this.answer_class)[1];
            return (answer_node) ? answer_node.innerText : '';
        }
    }
})();