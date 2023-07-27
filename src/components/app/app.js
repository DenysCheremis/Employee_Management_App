import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../serch-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmploeesList from '../emploees-list/emploees-list';
import EmploeesAddForm from '../emploees-add-form/emploees-add-form';

import './app.css';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {name: 'Alex M.', salary: 800, increase: false, rise: true, id: 1},
                {name: 'Mark A.', salary: 1000, increase: true, rise: false, id: 2},
                {name: 'Preston H.', salary: 1400, increase: false, rise: false, id: 3},
                {name: 'Selena S.', salary: 3700, increase: false, rise: false, id: 4}
            ],
            term: '',
            filter: ''
        }
        this.maxId = 5
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return {
                data: data.filter((elem) => elem.id !== id)
            }
        })
    }

    addItem = (name, salary) => {
        const newItem = {
            name,
            salary,
            increase: false, 
            id: this.maxId++
        }

        if(name && salary){
            this.setState(({data}) => {
                const newArr = [...data, newItem];
    
                return{
                    data: newArr
                }
            })
        }
    }

    onToggleIncreace = (id) => {
        // this.setState(({data}) => {
        //     const index = data.findIndex(elem => elem.id === id);

        //     const old = data[index];
        //     const newItem = {...old, increase: !old.increase};
        //     const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

        //     return{
        //         data: newArr
        //     }
        // })

        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return{...item, increase: !item.increase}
                }
                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return{...item, rise: !item.rise}
                }
                return item;
            })
        }))
    }
 
    onChangeSalary = (id, newSalary) => {
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return{...item, salary: parseFloat(newSalary)}
                }
                return item;
            })
        }))
    }

    searchEmp = (items, term) => {
        if(term.length === 0){
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1;
        });
    }

    onUpdateSearch = (term) => {
        this.setState({term});
    }

    filterPost = (items, filter) => {
        switch (filter) {
            case 'rise':
                return items.filter(item => item.rise);
            case 'more1000':
                return items.filter(item => item.salary > 1000);
            default:
                return items
        }
    }

    onFilterSelect = (filter) => {
        this.setState({filter});
    }

    render() {
        const {data, term, filter} = this.state;
        const emploees = data.length;
        const increased = data.filter(item => item.increase).length;
        const visibleData = this.filterPost(this.searchEmp(data, term), filter);

        return (
            <div className="app">
                <AppInfo
                    emploees={emploees}
                    increased={increased}/>
    
                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter 
                        filter={filter} 
                        onFilterSelect={this.onFilterSelect}/>
                </div>
    
                <EmploeesList 
                    data={visibleData}
                    onDelete={this.deleteItem}
                    onToggleIncreace={this.onToggleIncreace}
                    onToggleRise={this.onToggleRise}
                    onChangeSalary={this.onChangeSalary}/>
                <EmploeesAddForm
                    onAdd={this.addItem}/>
            </div>
        );
    }
}

export default App;