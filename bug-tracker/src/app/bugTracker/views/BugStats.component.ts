import { Component, Input } from '@angular/core';
import { IBug } from '../models/IBug';

@Component({
	selector : 'bug-stats',
	template : `
		<section class="stats">
			<span class="closed">{{getClosedCount()}}</span>
			<span> / </span>
			<span>{{bugs.length}}</span>
		</section>
	`
})
export class BugStatsComponent{

	@Input('data')
	bugs : IBug[] = [];

	getClosedCount(){
		let closedCount = 0;
		for(let index = 0, count = this.bugs.length; index < count; index++)
			if (this.bugs[index].isClosed)
				++closedCount;
		return closedCount;
	}
}