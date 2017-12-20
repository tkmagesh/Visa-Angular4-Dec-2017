let SM = (function(){
	let _reducer = null,
		_state = undefined,
		_init_action = '@@INIT_ACTION',
		_subscribers = [];

	function getState(){
		return _state;
	}

	function dispatch(action){
		let _newState = _reducer(_state, action);
		if (_newState === _state) return;
		_state = _newState;
		triggerChange();
	}

	function triggerChange(){
		_subscribers.forEach(subscriber => subscriber());
	}

	function subscribe(subscriber){
		_subscribers.push(subscriber);
	}

	function createStore(reducer){
		_reducer = reducer;
		_state = _reducer(undefined, _init_action);

		return {
			getState : getState,
			subscribe : subscribe,
			dispatch : dispatch
		}
	}

	return {
		createStore : createStore
	}

})();