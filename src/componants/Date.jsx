export default function Date(props) {
    const DATE = props.date;

    let [year, month, day] = DATE.split('/');
    let FULL_DATE = `${day}/${month}/${year}`;

    return (
        <div className="date">
            <div><b>
                <mark>Released date:</mark>
                {FULL_DATE}
            </b></div>
        </div>
    )
}