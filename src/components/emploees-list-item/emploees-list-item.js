import './emploees-list-item.css';

const EmploeesListItem = (props) => {

    const {name, salary, onDelete, onToggleIncreace, onToggleRise, increase, rise, onChangeSalary} = props;

    let classNames = 'list-group-item d-flex justify-content-between';
    if(increase){
        classNames += ' increase';
    };
    if(rise){
        classNames += ' like';
    }

    const handleSalaryChange = (event) => {
        const newSalary = event.target.value;

        onChangeSalary(newSalary);
    }

    return (
        <li className={classNames}>
            <span 
                className="list-group-item-label"
                onClick={onToggleRise}>{name}</span>
            <input 
                type="text" 
                className="list-group-item-input" 
                defaultValue={salary + '$'}
                onChange={handleSalaryChange}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button 
                    type="button"
                    className="btn-cookie btn-sm"
                    onClick={onToggleIncreace}>
                    <i className="fas fa-cookie"></i>
                </button>

                <button type="button"
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
}


export default EmploeesListItem;