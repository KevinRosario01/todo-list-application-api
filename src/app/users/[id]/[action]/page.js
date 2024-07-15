export default function UserAction({params}) {
    return (
        <div> User:{params.id} - {params.action}</div>
    );
}