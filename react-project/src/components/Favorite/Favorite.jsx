export const Favorite = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {props.list.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}