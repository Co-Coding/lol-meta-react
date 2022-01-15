import spinner from '../../assets/spinner.gif'

export default function Spinner() {
    return (
        <img src={spinner} style={{width: '100px', margin: 'auto', display: 'block'}} alt='Loading'/>
    )
}

