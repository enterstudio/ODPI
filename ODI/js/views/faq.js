﻿window.FaqView = Backbone.View.extend({

    initialize: function () {
        this.template = _.template(tpl.get('Faq'));
    },

    events: {

    },

    render: function (eventName) {
        $(this.el).html(this.template());
        return this;
    }

});