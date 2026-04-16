// FIXME: This code was only a demo to show the button component
export default function Button({ label, onClick }) {
    return (
        <button className="button" onClick={onClick}>
            {label}
        </button>
    );
}