import Ember from 'ember';

export default Ember.Service.extend({

    data : null,


    setGregGames(data){

        this.set("data",data);
    }
});
