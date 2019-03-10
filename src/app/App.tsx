import * as React from 'react';
import { observer } from 'mobx-react';
import { SortableDataSelector } from './../components/sortable-data-selector/sortable-data-selector';
import { getPilots } from './../dalc/dalc';

@observer
export class App extends React.Component {


  async loadData(offset: number) {
    return await getPilots(offset);
  }

  render() {
    return (
      <div>
        <SortableDataSelector loadData={this.loadData.bind(this)} />
      </div>
    );
  }
}
