import Component, {tracked} from '@glimmer/component';

export default class Counter extends Component {
  @tracked text = 1;

  increment() {
    this.text++;
  }
}
