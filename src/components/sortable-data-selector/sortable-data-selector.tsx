import * as style from './sortable-data-selector.css';
import * as React from 'react';
import { observer } from 'mobx-react';
import { SortableData } from './../../../types/types';
import { observable, action } from 'mobx';
import * as InfiniteScroll from 'react-infinite-scroller';

interface SortableDataSelectorProps {
    loadData: (page: number) => Promise<SortableData[]>;
}

@observer
export class SortableDataSelector extends React.Component<SortableDataSelectorProps> {

    @observable sortableData: SortableData[] = [];
    currentOffset = 0;

    @action
    setSortableData(data: SortableData[]) {
        this.sortableData = this.sortableData.concat(data);
    }

    async loadData(o: number) {
        let offset = o * 100;
        console.log("load data " + offset);

        let data = await this.props.loadData(offset);
        this.currentOffset = offset;

        this.setSortableData(data);
    }

    render() {

        console.log(this.sortableData.length);
        return (
            <div className={style.sortableDataSelectorContainer}>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={this.loadData.bind(this)}
                    hasMore={true}
                    loader={<div className="loader" key={0}>Loading ...</div>}
                    useWindow={false}
                >
                    {this.sortableData.map((data: SortableData) => {
                        return <p key={"sortable-data-key-" + data.id}>{data.name}</p>
                    })}
                </InfiniteScroll>
            </div >
        );
    }
}
