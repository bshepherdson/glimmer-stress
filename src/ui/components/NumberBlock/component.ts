import Component, {tracked} from '@glimmer/component';

const ROWS = 300;
const COLS = 100;

const values = [];
for (let i = 0; i < ROWS; i++) {
  values[i] = [];
  for (let j = 0; j < COLS; j++) {
    values[i][j] = 1;
  }
}

export default class NumberBlock extends Component {
  @tracked values = values;

  didInsertElement() {
    window['bumper'] = (i, j) => {
      this.values[i][j]++;
      this.values = this.values;
    };
  }
}
