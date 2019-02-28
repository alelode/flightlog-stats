import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx';

@observer
export class App extends React.Component {
  @observable text = '';
  @action
  setText() {
    this.text = Math.random() + ' asdasdasd';
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setText();
          }}
        >
          {'Click me'}
        </button>
        <p>{this.text}</p>
      </div>
    );
  }
}
