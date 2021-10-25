Vue.component('task', {

    template : '<li>My List <slot></slot></li>'
});


new Vue({
  el : '#root'
})