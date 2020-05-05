/* eslint-disable no-console */
import Component from '@ember/component';
import { action, set } from '@ember/object';
import { reads } from '@ember/object/computed';



export default class PeopleList extends Component {

	@reads('people')
	scientists;


	@action
	showPeople() {
		const { personName, scientists } = this;
		scientists.push(personName);
		set(this, 'scientists', scientists);
		set(this, 'personName', '');
		console.log('scientists', scientists);
	}
}