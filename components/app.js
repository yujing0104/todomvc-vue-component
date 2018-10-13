;(function(){
	const template =`
	<div>
	<section class="todoapp">
	<todo-header :todos="todos"
	v-on:addTodo="addTodo" ></todo-header>
	<todo-list
	 :todos="todos"
	 :filterText="filterText" ></todo-list>
	<todo-footer :filterText="filterText"></todo-footer>
	</section>
	<app-footer></app-footer>
	</div>
	`

	const todos = [
		{
			id:1,
			title:'吃饭',
			completed:true
		},
		{
			id:2,
			title:'睡觉',
			completed:true
		},
		{
			id:3,
			title:'逛街',
			completed:false
		}
	] 

	window.App = {
		template,
		components:{
			todoHeader,
			todoList,
			todoFooter,
			appFooter
		},
		data(){
			return{
				todos,
				filterText:''
			}
		},

		created(){
			window.onhashchange = ()=>{
				let hash = window.location.hash.substr('2')
				if(hash === ''){
					hash = 'all'
				}
				this.filterText = hash
			}
		},
		

		methods:{
			addTodo(titleText){
				titleText = titleText.trim()
				if(!titleText.length){
					return
				}
				const todos = this.todos
				todos.push({
					id:todos[todos.length - 1].id+1,
					title:titleText,
					completed:false
				})
			}
		}

		
	}
	
})()