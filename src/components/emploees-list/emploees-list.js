import EmploeesListItem from '../emploees-list-item/emploees-list-item';

import './emploees-list.css';

const EmploeesList = ({data, onDelete, onToggleIncreace, onToggleRise, onChangeSalary}) => {

    const elements = data.map(item => {
        const{id, ...itemProps} = item;
        return <EmploeesListItem 
                    key={id} {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleIncreace={() => onToggleIncreace(id)}
                    onToggleRise={() => onToggleRise(id)}
                    onChangeSalary={(newSalary) => onChangeSalary(item.id, newSalary)}/>
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmploeesList;