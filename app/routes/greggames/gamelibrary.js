import Ember from 'ember';

export default Ember.Route.extend({

    gregservice: Ember.inject.service("greggame-service"),
    init() {
        var that = this;
        Ember.$.getJSON("http://localhost:8080/greggames", function (data) {

            data = data.map(v => v.toLowerCase());
            that.get("gregservice").setGregGames(data);
            
            that.refresh();

       




        });

    },
    model() {

        return this.get("gregservice").data;
    }
});
