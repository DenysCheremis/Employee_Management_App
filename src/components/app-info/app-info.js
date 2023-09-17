
import './app-info.css';

const AppInfo = ({emploees, increased}) => {

    return (
        <div className="app-info">
            <h1>Accounting of company employees</h1>
            <h2>Total number of employees: {emploees}</h2>
            <h2>The award will be received: {increased}</h2>
        </div>
    )
}

export default AppInfo;