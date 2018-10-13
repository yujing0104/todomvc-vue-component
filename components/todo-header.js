;(function(){
	const template = `
	<header class="header">
		<h1>todos</h1>
		<input @keydown.enter="handleKeydown" class="new-todo" placeholder="What needs to be done?" autofocus>
	</header>
	`

	window.todoHeader = {
		template,
		props:['todos'],
		methods:{
			handleKeydown(e){
				const target = e.target
				const value = target.value.trim()
				if(!value.length){
					return
				}

				this.$emit('addTodo', value)

				target.value = ''
			}
		}
	}
})()