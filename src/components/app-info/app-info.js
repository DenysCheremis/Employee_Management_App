
import './app-info.css';

const AppInfo = ({emploees, increased}) => {

    return (
        <div className="app-info">
            <h1>Облік співробітників компанії</h1>
            <h2>Загальна кількість співробітників: {emploees}</h2>
            <h2>Премію отримають: {increased}</h2>
        </div>
    )
}

export default AppInfo;