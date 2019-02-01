var app = new Vue({
  el:'#app',
  data: {
    message : 'Hello Vue！',
    v_bind_message : 'You loaded this page on ' + new Date().toLocaleString(),
  }
})

var CnL = new Vue({
  el:'#CnL',
  data: {
    btn_bind : 'press this button to toggle the text above',
    btn_for : 'press this button add item into list above',
    seen : true,
    sam_todo : [
      {text : 'learn JavaScript'},
      {text : 'learn Vue'},
      {text : 'Sam will build some awsome'}
    ]
  }
})

var HUI = new Vue({
  el:'#HUI',
  data: {
    btn_bind : 'press this button reverse the text above',
    v_onclick_message: "hello Sam at Vuejs!...v_onclick",
    v_model_message: "hello Sam at Vuejs!...v_model"
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})

Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var CwC = new Vue({
  el: '#CwC',
  data: {
    groceryList: [
      { id: 0, text: 'Vegetables' },
      { id: 1, text: 'Cheese' },
      { id: 2, text: 'Whatever else humans are supposed to eat' }
    ]
  }
})

function tog_v_if() {
	// body...
	CnL.seen ^= true;
}

function push_v_for() {
	// body...
	CnL.sam_todo.push({text: 'static list item'})
}