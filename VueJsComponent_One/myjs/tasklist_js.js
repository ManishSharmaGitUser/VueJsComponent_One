Vue.component('task-list', {
    template: '<div><task v-for="item in tasks">{{item.task}}</task></div>',
    data() {
        return {
            tasks: [
                { task: 'go to store', isdone: true },
                { task: 'buy fruits', isdone: false },
                { task: 'buy vegetables', isdone: true }

            ]
        };
    }
});


Vue.component('task', {
template : '<li><slot></slot></li>'
});

new Vue({
 el : '#root'
})