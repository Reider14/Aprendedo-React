type Props = {
    name: string;
    lastname: string;
}

function Autor(props: Props) {

    return (
        <div>
            <p><b>Autor:</b> {props.name}{props.lastname}</p>
        </div>
    )
}

export default Autor;